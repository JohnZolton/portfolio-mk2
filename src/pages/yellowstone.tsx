import { useCallback, useEffect, useState } from "react";
import { readdirSync } from "fs";
import { join } from "path";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import NavBar from "./components/navbar";
import { probeMedia } from "~/lib/tripMedia";

const FILE_RE = /^(?:IMG|VID)_(\d{8}_\d{6})\.(?:jpe?g|mp4)$/i;
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Aspect variants per orientation — cycled so tiles within a column have
// staggered heights (true masonry) while staying close to the source crop.
const LANDSCAPE_ASPECTS = [
  "aspect-[4/3]",
  "aspect-[1/1]",
  "aspect-[6/5]",
  "aspect-[3/2]",
];
const PORTRAIT_ASPECTS = [
  "aspect-[3/4]",
  "aspect-[1/1]",
  "aspect-[5/6]",
  "aspect-[2/3]",
];

interface TripFile {
  name: string;
  kind: "image" | "video";
  ts: string; // YYYYMMDD_HHMMSS
  dateLabel: string;
  aspect: string;
  landscape: boolean;
}

function formatDateLabel(ts: string): string {
  const month = MONTHS[Number(ts.slice(4, 6)) - 1] ?? "";
  const day = Number(ts.slice(6, 8));
  return `${month} ${day}`;
}

export function getStaticProps() {
  const dir = join(process.cwd(), "public", "yellowstone");
  let names: string[] = [];
  try {
    names = readdirSync(dir);
  } catch {
    names = [];
  }

  const files: TripFile[] = names
    .map((n) => n.match(FILE_RE))
    .filter((m): m is RegExpMatchArray => m !== null)
    .map((m): TripFile => {
      const name = m[0];
      const ts = m[1] ?? "";
      const kind = name.startsWith("VID") ? "video" : "image";
      const dims = probeMedia(join(dir, name));
      const landscape = dims !== null && dims.width >= dims.height;
      return {
        name,
        kind,
        ts,
        dateLabel: formatDateLabel(ts),
        aspect: "", // filled below per-orientation counter
        landscape,
      };
    })
    .sort((a, b) =>
      a.ts < b.ts ? -1 : a.ts > b.ts ? 1 : a.name.localeCompare(b.name),
    );

  const counters = { landscape: 0, portrait: 0 };
  for (const file of files) {
    const bucket = file.landscape ? "landscape" : "portrait";
    const variants =
      bucket === "landscape" ? LANDSCAPE_ASPECTS : PORTRAIT_ASPECTS;
    file.aspect = variants[counters[bucket] % variants.length] ?? "aspect-[4/3]";
    counters[bucket] += 1;
  }

  return { props: { files } };
}

const GRID_SIZES = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw";

function optSrcSet(name: string, format: "avif" | "webp"): string {
  const stem = name.replace(/\.(jpe?g)$/i, "");
  return `/yellowstone/opt/${format}/${stem}@480.${format} 480w, /yellowstone/opt/${format}/${stem}@960.${format} 960w`;
}

function TripTile({
  file,
  index,
  onOpen,
}: {
  file: TripFile;
  index: number;
  onOpen: (index: number) => void;
}) {
  const src = `/yellowstone/${file.name}`;
  const aspect = file.aspect;

  if (file.kind === "video") {
    return (
      <div
        className={`${aspect} group relative mb-4 overflow-hidden rounded-xl border border-white/10 transition hover:border-cyan-400/40`}
      >
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full bg-black object-cover"
        />
        <button
          type="button"
          aria-label={`Enlarge video ${file.name}`}
          onClick={() => onOpen(index)}
          className="absolute right-2 top-2 rounded-lg border border-white/10 bg-black/70 p-1.5 text-white/80 opacity-0 backdrop-blur transition hover:border-cyan-400/40 hover:text-cyan-300 group-hover:opacity-100"
        >
          <Expand className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`${aspect} group relative mb-4 overflow-hidden rounded-xl border border-white/10 transition hover:border-cyan-400/40`}
    >
      <picture>
        <source
          type="image/avif"
          srcSet={optSrcSet(file.name, "avif")}
          sizes={GRID_SIZES}
        />
        <source
          type="image/webp"
          srcSet={optSrcSet(file.name, "webp")}
          sizes={GRID_SIZES}
        />
        <img
          src={src}
          alt={file.name}
          loading="lazy"
          decoding="async"
          onClick={() => onOpen(index)}
          className="block h-full w-full cursor-zoom-in object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </picture>
    </div>
  );
}

function Lightbox({
  files,
  active,
  onClose,
  onStep,
}: {
  files: TripFile[];
  active: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}) {
  const file = files[active];
  if (!file) return null;
  const src = `/yellowstone/${file.name}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={file.name}
    >
      <motion.div
        key={active}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
        className="flex max-h-full max-w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {file.kind === "video" ? (
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="max-h-[82vh] max-w-[92vw] rounded-lg"
          />
        ) : (
          <Image
            src={src}
            alt={file.name}
            unoptimized
            priority
            width={4080}
            height={3072}
            className="h-auto max-h-[82vh] w-auto max-w-[92vw] rounded-lg object-contain"
          />
        )}
        <div className="mt-3 flex items-center gap-4 font-mono text-xs text-white/50">
          <span>{file.dateLabel}</span>
          <span className="text-white/30">
            {active + 1} / {files.length}
          </span>
        </div>
      </motion.div>

      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-lg border border-white/10 bg-black/50 p-2 text-white/70 transition hover:border-cyan-400/40 hover:text-cyan-300"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation();
          onStep(-1);
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-black/50 p-2 text-white/70 transition hover:border-cyan-400/40 hover:text-cyan-300 sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation();
          onStep(1);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-black/50 p-2 text-white/70 transition hover:border-cyan-400/40 hover:text-cyan-300 sm:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </motion.div>
  );
}

function Yellowstone({ files }: { files: TripFile[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((a) =>
        a === null || files.length === 0
          ? a
          : (a + dir + files.length) % files.length,
      ),
    [files.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <main className="relative min-h-screen bg-[#06060a] font-mono text-white">
      <div className="relative z-10 flex flex-col">
        <NavBar />
        <div className="mx-auto w-full max-w-6xl px-4 py-8">
          <h1 className="mb-8 text-center text-3xl font-black tracking-tight text-white/90">
            Yellowstone Road Trip
          </h1>
          <Masonry
            breakpointCols={{ default: 4, 1024: 3, 640: 2 }}
            className="flex w-auto -ml-4"
            columnClassName="pl-4 bg-clip-padding"
          >
            {files.map((file, index) => (
              <TripTile
                key={file.name}
                file={file}
                index={index}
                onOpen={setActive}
              />
            ))}
          </Masonry>
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox
            files={files}
            active={active}
            onClose={close}
            onStep={step}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Yellowstone;
