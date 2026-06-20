import React, { PropsWithChildren } from "react";
import Link from "next/link";
import YouTube from "react-youtube";
import CyberpunkBackground from "./cyberpunk-bg";
import NavBar from "./navbar";

interface ProjectPageProps {
  title: string;
  youtube?: string;
  description?: string;
  url?: string;
  paragraphs: string[];
  repo?: string;
}

export default function ProjectPage(props: PropsWithChildren) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06060a] font-mono text-white">
      <CyberpunkBackground />
      <div className="relative z-10">
        <NavBar />
        {props.children}
        <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-white/30">
          Built by{" "}
          <Link href="/" className="text-white/50 hover:text-cyan-300 hover:underline">
            John Zolton
          </Link>
        </footer>
      </div>
    </main>
  );
}

export function Project({
  title,
  repo,
  description,
  youtube,
  url,
  paragraphs,
}: ProjectPageProps) {
  const options = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pb-16 pt-8">
      <h1 className="mb-6 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-center text-5xl font-black tracking-tight text-transparent sm:text-6xl">
        {title}
      </h1>

      {youtube && (
        <div className="mb-6 w-full max-w-2xl">
          <YouTube
            videoId={youtube}
            opts={options}
            className="aspect-video w-full"
          />
        </div>
      )}

      <div className="mb-8 flex flex-row flex-wrap items-center justify-center gap-3">
        {url && (
          <Link href={url} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <button className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20">
                Try it live!
              </button>
            </a>
          </Link>
        )}
        {repo && (
          <Link legacyBehavior href="">
            <a
              href={repo}
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <button className="flex flex-row items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-semibold text-white/80 transition hover:border-fuchsia-400/50 hover:text-fuchsia-200">
                View Source
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </a>
          </Link>
        )}
      </div>

      {paragraphs && (
        <div className="w-full max-w-2xl space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[14px] leading-relaxed text-white/70"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
