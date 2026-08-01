/**
 * Pre-generates responsive AVIF/WebP derivatives for the Yellowstone gallery
 * so the site never depends on the on-demand Next.js image optimizer (which
 * is slow in dev and re-runs per request). Originals stay untouched and are
 * still served in the lightbox.
 *
 * Usage:  npm run optimize:yellowstone
 * Runs automatically before `next build` via the `prebuild` hook.
 *
 * Output layout:
 *   public/yellowstone/opt/avif/<stem>@480.avif
 *   public/yellowstone/opt/avif/<stem>@960.avif
 *   public/yellowstone/opt/webp/<stem>@480.webp
 *   public/yellowstone/opt/webp/<stem>@960.webp
 */
import { existsSync, readdirSync, statSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = join(ROOT, "public", "yellowstone");
const OUT_DIR = join(SRC_DIR, "opt");
const WIDTHS = [480, 960];
/**
 * @type {{ name: "avif" | "webp"; options: import("sharp").AvifOptions | import("sharp").WebpOptions }[]}
 */
const FORMATS = [
  { name: "avif", options: { quality: 65 } },
  { name: "webp", options: { quality: 82 } },
];

/**
 * @param {string} out
 * @param {string} src
 */
function isUpToDate(out, src) {
  return existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs;
}

const sources = readdirSync(SRC_DIR).filter((f) => /\.jpe?g$/i.test(f));

const jobs = [];
let skipped = 0;
for (const src of sources) {
  const stem = src.replace(/\.(jpe?g)$/i, "");
  const srcPath = join(SRC_DIR, src);
  for (const { name, options } of FORMATS) {
    for (const width of WIDTHS) {
      const outPath = join(OUT_DIR, name, `${stem}@${width}.${name}`);
      if (isUpToDate(outPath, srcPath)) {
        skipped++;
        continue;
      }
      jobs.push(
        sharp(srcPath)
          .rotate() // apply EXIF orientation (portrait shots)
          .resize({ width })
          .toFormat(name, options)
          .toFile(outPath),
      );
    }
  }
}

mkdirSync(OUT_DIR, { recursive: true });
for (const { name } of FORMATS) {
  mkdirSync(join(OUT_DIR, name), { recursive: true });
}

const results = await Promise.all(jobs);
const total = results.reduce((s, r) => s + r.size, 0);
/** @type {Record<string, number>} */
const counts = {};
for (const r of results) {
  counts[r.format] = (counts[r.format] ?? 0) + r.size;
}

console.log(
  `[yellowstone] ${sources.length} sources -> ${results.length} derivatives ` +
    `(${skipped} up to date), ${(total / 1048576).toFixed(1)} MB total`,
);
for (const [fmt, bytes] of Object.entries(counts)) {
  console.log(`  ${fmt}: ${(bytes / 1048576).toFixed(1)} MB`);
}
