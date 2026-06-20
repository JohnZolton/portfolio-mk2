import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ProjectPage from "./components/projectpage";
import StackDisplay from "./components/stackdisplay";
import { Github, Cpu, Mic, Search, Database } from "lucide-react";

const STACK = "Python, MCP, Parakeet, yt-dlp, Vector DB, SSE";

const features = [
  {
    icon: Mic,
    title: "Blazing transcription",
    body: "yt-dlp pulls the media, NVIDIA Parakeet transcribes ~2 hours of audio in roughly 45 seconds on a local GPU — no cloud, no per-minute bills.",
  },
  {
    icon: Search,
    title: "Semantic search",
    body: "Transcripts are chunked, embedded, and indexed so you can ask natural-language questions and pull the exact moment an episode covers a topic.",
  },
  {
    icon: Database,
    title: "Knowledge base",
    body: "A unified store across podcasts, YouTube videos, and ebooks. Load retrieved context straight into any MCP-aware chatbot (Goose, Cline, etc.).",
  },
  {
    icon: Cpu,
    title: "Local-first",
    body: "Runs entirely on your hardware. The only thing that leaves the machine is whatever you choose to send to a model you control.",
  },
];

const pipeline = [
  {
    step: "01",
    name: "Acquire",
    detail: "yt-dlp downloads audio/video from a URL or RSS feed.",
  },
  {
    step: "02",
    name: "Transcribe",
    detail: "Parakeet runs GPU inference to produce a timestamped transcript.",
  },
  {
    step: "03",
    name: "Index",
    detail: "Transcript is split, embedded, and written to a local vector store.",
  },
  {
    step: "04",
    name: "Serve",
    detail: "An MCP server (SSE or stdio) exposes search + retrieval tools to your agent.",
  },
];

function Gobble() {
  return (
    <>
      <Head>
        <title>Gobble — John Zolton</title>
        <meta
          name="description"
          content="Gobble — an MCP server for managing a podcast-based knowledge base. Download, transcribe, and semantically search long-form media."
        />
      </Head>
      <ProjectPage>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-10 pt-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                MCP Server
              </div>
              <h1 className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-6xl font-black tracking-tight text-transparent sm:text-7xl">
                Gobble
              </h1>
              <p className="mt-4 max-w-md text-lg text-white/60">
                An MCP server for managing a podcast-based knowledge base.
                Download, transcribe, and semantically search long-form media —
                then feed it to any agent that speaks Model Context Protocol.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="https://github.com/JohnZolton/Gobble"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-fuchsia-500/20 transition-transform hover:scale-[1.03]"
                >
                  <Github size={18} />
                  View Source
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  How it works
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-fuchsia-500/20 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
                <Image
                  src="/gobble.jpg"
                  alt="Gobble logo"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Stack */}
          <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-[#0b0b13] px-5 py-4">
            <span className="text-sm font-semibold text-white/80">
              Tech stack
            </span>
            <StackDisplay stack={STACK} />
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "~45s", v: "to transcribe 2hrs of audio" },
              { k: "100%", v: "local, GPU inference" },
              { k: "SSE + stdio", v: "MCP transports" },
              { k: "0", v: "cloud dependencies" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-[#0b0b13] p-5"
              >
                <div className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-3xl font-black text-transparent">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-white/50">{s.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-6 text-2xl font-bold text-white">What it does</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-[#0b0b13] p-6 transition-colors hover:border-cyan-400/40"
              >
                <div className="mb-3 inline-flex rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-2.5 text-cyan-300">
                  <f.icon size={22} />
                </div>
                <h3 className="mb-1 text-lg font-bold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pipeline */}
        <section id="how-it-works" className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-6 text-2xl font-bold text-white">How it works</h2>
          <div className="grid gap-3 md:grid-cols-4">
            {pipeline.map((p, i) => (
              <div key={p.step} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-[#0b0b13] p-5">
                  <div className="font-mono text-xs font-bold text-cyan-400">
                    {p.step}
                  </div>
                  <div className="mt-1 text-lg font-bold text-white">
                    {p.name}
                  </div>
                  <div className="mt-2 text-sm text-white/60">{p.detail}</div>
                </div>
                {i < pipeline.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-fuchsia-400/60 md:block">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Install */}
        <section className="mx-auto max-w-5xl px-6 py-10">
          <h2 className="mb-6 text-2xl font-bold text-white">Get running</h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/60">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-white/40">
                bash
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-4 font-mono text-sm leading-relaxed text-white/80">
              <code>{`# install dependencies
uv sync

# run as an MCP server (SSE on port 8000)
uv run mcp_server.py

# or over stdio for Goose / Cline
uv run mcp_server.py --transport stdio`}</code>
            </pre>
          </div>
          <p className="mt-4 text-sm text-white/50">
            Requires a CUDA-capable GPU for local transcription. Full
            instructions live in the{" "}
            <Link
              href="https://github.com/JohnZolton/Gobble"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:underline"
            >
              README
            </Link>
            .
          </p>
        </section>
      </ProjectPage>
    </>
  );
}

export default Gobble;
