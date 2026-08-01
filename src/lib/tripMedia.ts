import { closeSync, openSync, readSync, statSync } from "fs";

export interface MediaInfo {
  width: number;
  height: number;
}

/**
 * Parse display dimensions from a JPEG buffer, honoring EXIF orientation
 * (photos shot portrait are stored landscape with a rotation flag).
 * Only the first bytes of the file are needed (APP1/EXIF + SOF are near
 * the start), so callers can read a small header.
 */
export function jpegInfo(buf: Buffer): MediaInfo | null {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;

  let orientation = 1;
  let width = 0;
  let height = 0;

  let i = 2;
  while (i + 4 <= buf.length) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buf[i + 1] ?? 0;
    // Standalone markers with no length field.
    if (
      marker === 0xff ||
      marker === 0x00 ||
      marker === 0x01 ||
      (marker >= 0xd0 && marker <= 0xd7)
    ) {
      i += 2;
      continue;
    }
    const len = buf.readUInt16BE(i + 2);
    if (len < 2) break;

    // SOF0..SOF15 (excluding DHT/DAC/DNL) carry the frame dimensions.
    if (
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc
    ) {
      if (i + 9 <= buf.length) {
        height = buf.readUInt16BE(i + 5);
        width = buf.readUInt16BE(i + 7);
      }
      break;
    }

    // APP1 -> EXIF -> IFD0 -> orientation tag (0x0112).
    if (marker === 0xe1 && len > 10) {
      const start = i + 4;
      if (buf.toString("latin1", start, start + 6) === "Exif\u0000\u0000") {
        const tiff = start + 6;
        const byteOrder = buf.toString("latin1", tiff, tiff + 2);
        if (byteOrder === "II" || byteOrder === "MM") {
          const le = byteOrder === "II";
          const readU16 = (o: number) =>
            le ? buf.readUInt16LE(tiff + o) : buf.readUInt16BE(tiff + o);
          const readU32 = (o: number) =>
            le ? buf.readUInt32LE(tiff + o) : buf.readUInt32BE(tiff + o);
          if (readU16(2) === 42) {
            const ifd0 = readU32(4);
            if (ifd0 + 2 <= buf.length - tiff) {
              const count = readU16(ifd0);
              for (let e = 0; e < count && e < 64; e++) {
                const entry = ifd0 + 2 + e * 12;
                if (entry + 12 > buf.length - tiff) break;
                if (readU16(entry) === 0x0112) {
                  orientation = readU16(entry + 8);
                  break;
                }
              }
            }
          }
        }
      }
    }
    i += 2 + len;
  }

  if (width === 0 || height === 0) return null;
  // Orientation 5-8 = 90/270 degree rotation; swap to get display dims.
  return orientation >= 5 && orientation <= 8
    ? { width: height, height: width }
    : { width, height };
}

/**
 * Parse video track dimensions from an MP4 buffer by walking the box tree
 * for moov/trak/tkhd. The caller decides how much of the file to buffer;
 * moov may live at the end for non-faststart files.
 */
export function mp4Info(buf: Buffer): MediaInfo | null {
  const find = (start: number, end: number): MediaInfo | null => {
    let i = start;
    while (i + 8 <= end) {
      let size = buf.readUInt32BE(i);
      const type = buf.toString("latin1", i + 4, i + 8);
      if (size === 1) {
        if (i + 16 > end) break;
        size = Number(buf.readBigUInt64BE(i + 8));
      } else if (size === 0) {
        break;
      }
      if (size < 8) break;

      if (type === "moov" || type === "trak") {
        const found = find(i + 8, Math.min(i + size, end));
        if (found) return found;
      } else if (type === "tkhd") {
        const ver = buf[i + 8];
        const off = ver === 1 ? 88 : 76;
        if (i + 8 + off + 8 <= end) {
          const w = buf.readUInt32BE(i + 8 + off) >> 16;
          const h = buf.readUInt32BE(i + 8 + off + 4) >> 16;
          if (w > 0 && h > 0) return { width: w, height: h };
        }
      }
      i += size;
    }
    return null;
  };
  return find(0, buf.length);
}

/** Read a byte slice of a file without buffering the whole thing. */
export function readSlice(
  path: string,
  offset: number,
  length: number,
): Buffer | null {
  const fd = openSync(path, "r");
  try {
    const buf = Buffer.alloc(length);
    const n = readSync(fd, buf, 0, length, offset);
    return n === length ? buf : buf.subarray(0, n);
  } catch {
    return null;
  } finally {
    closeSync(fd);
  }
}

/** Build-time probe of a media file's display dimensions. */
export function probeMedia(path: string): MediaInfo | null {
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) {
    const head = readSlice(path, 0, 64 * 1024);
    return head ? jpegInfo(head) : null;
  }
  if (path.endsWith(".mp4")) {
    const stat = statSync(path);
    const head = readSlice(path, 0, 1024 * 1024);
    const fromHead = head ? mp4Info(head) : null;
    if (fromHead) return fromHead;
    // moov often sits at the end of non-faststart files.
    const tailLen = Math.min(4 * 1024 * 1024, stat.size);
    const tail = readSlice(path, stat.size - tailLen, tailLen);
    return tail ? mp4Info(tail) : null;
  }
  return null;
}
