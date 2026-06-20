import ProjectPage from "./components/projectpage";
import { Github } from "lucide-react";
import Link from "next/link";
import StackDisplay from "./components/stackdisplay";

function Patense() {
  return (
    <ProjectPage>
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <h1 className="mb-8 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-center text-5xl font-bold text-transparent">
          Snorkle
        </h1>
        <div className="mb-4 flex items-center justify-center">
          <div className="mb-4 flex items-center justify-center">
            <img
              src="/snorkle.gif"
              alt="Snorkling GIF"
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="mb-6 flex flex-row justify-center gap-4">
          <Link
            href={"https://github.com/JohnZolton/patense-local"}
            target="_blank"
            className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/80 transition-colors hover:border-fuchsia-400/50 hover:text-fuchsia-200 focus:outline-none"
          >
            <span>View Code</span>
            <Github size={18} />
          </Link>
        </div>
        <div className="mb-6 rounded-2xl border border-white/10 bg-[#0b0b13] p-4">
          <div className="flex flex-row items-center">
            <span className="mr-2 font-semibold text-white/80">
              Tech Stack:
            </span>
            <StackDisplay stack="vLLM, Next.js, TypeScript, React, tRPC, Prisma" />
          </div>
        </div>
        <div className="mb-8 rounded-2xl border border-white/10 bg-[#0b0b13] p-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-white">GitHub Stats</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                <span className="font-semibold">24</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex items-center text-cyan-400">
                <span className="font-semibold">4</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <circle cx="12" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
                  <path d="M12 12v3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-cyan-300">
            100% private, local document analysis with LLMs.
          </p>
        </div>
        <section className="mb-8 rounded-2xl border border-white/10 bg-[#0b0b13] p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Features</h2>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-cyan-400">•</span>
              <div>Deep Document Search</div>
            </li>
          </ul>
        </section>

        <section className="mb-8 rounded-2xl border border-white/10 bg-[#0b0b13] p-6">
          <div className="space-y-4 text-white/70">
            <p>
              This is a fork of{" "}
              <Link
                className="text-cyan-300 hover:underline"
                href={"patense-local"}
              >
                Patense.local
              </Link>{" "}
              with a modified system prompt for generic document searches.
              Sometimes ctl+F doesn&apos;t cut it and you need a broader or more
              robust way to find relevant text.
            </p>
          </div>
        </section>
        <section className="mb-8 rounded-2xl border border-white/10 bg-[#0b0b13] p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Tech</h2>
          <div className="space-y-4 text-white/70">
            <p>
              The core tech and features are the same. Break reference documents
              into chunks and ask an LLM if the content is relevant to a given
              query. Return a brief quote and the full text for verification.
              Uses Next.js on the frontend with a vLLM server.
            </p>
          </div>
        </section>
      </div>
    </ProjectPage>
  );
}

export default Patense;
