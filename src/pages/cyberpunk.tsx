import Head from "next/head";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Github,
  Mail,
  FileText,
  Star,
  GitFork,
  ExternalLink,
  PawPrint,
  ChevronDown,
} from "lucide-react";
import {
  mainProjects,
  smallProjects,
  stackList,
  type Project,
} from "../data/projects";
import {
  profile,
  aboutParagraphs,
  experience,
  type ExperienceEntry,
} from "../data/profile";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CyberpunkBackground from "./components/cyberpunk-bg";

/* ------------------------------------------------------------------ */
/* Motion variants                                                     */
/* ------------------------------------------------------------------ */

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="cp-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
    >
      {/* neon hover outline */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "0 0 0 1px rgba(34,211,238,0.55), 0 0 24px rgba(34,211,238,0.35), 0 0 48px rgba(124,58,237,0.25)",
        }}
      />
      {project.picture && (
        <div className="relative overflow-hidden border-b border-white/10 bg-black/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/${project.picture}`}
            alt={project.title}
            loading="lazy"
            className="h-44 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-transparent to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-mono text-base font-bold tracking-tight text-white sm:text-lg">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-3 font-mono text-[11px] text-cyan-300/80">
            {typeof project.stars === "number" && (
              <span className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5" />
                {project.stars}
              </span>
            )}
            {typeof project.forks === "number" && (
              <span className="flex items-center gap-1">
                <GitFork className="h-3.5 w-3.5" />
                {project.forks}
              </span>
            )}
          </div>
        </div>
        <p className="text-[13px] leading-relaxed text-white/60">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {stackList(project.stack).map((tech) => (
            <span
              key={tech}
              className="cp-chip rounded-full border border-cyan-400/25 bg-cyan-400/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan-200/90"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );

  if (project.page) {
    return (
      <Link href={`/${project.page}`} key={project.title}>
        {inner}
      </Link>
    );
  }
  if (project.url) {
    return (
      <a
        key={project.title}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  if (project.repo) {
    return (
      <a
        key={project.title}
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  return <div key={project.title}>{inner}</div>;
}

/* ------------------------------------------------------------------ */
/* Experience card (opaque, optionally expandable)                     */
/* ------------------------------------------------------------------ */

function ExperienceCard({
  job,
  defaultOpen = false,
}: {
  job: ExperienceEntry;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const expandable = !!job.details;

  const header = (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <h3 className="font-mono text-[15px] font-bold text-white">
        {job.title}{" "}
        <span className="text-cyan-300">·</span>{" "}
        <span className="text-white/80">{job.company}</span>
      </h3>
      <span className="font-mono text-[11px] uppercase tracking-wider text-fuchsia-300/80">
        {job.period}
      </span>
    </div>
  );

  return (
    <div className="cp-card cp-exp rounded-xl border border-white/10 bg-[#0b0b13] p-5 transition hover:border-cyan-400/40">
      {expandable ? (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="cp-exp-trigger -m-1 flex w-[calc(100%+0.5rem)] items-start justify-between gap-3 rounded-md p-1 text-left transition hover:text-cyan-200"
        >
          <div className="flex-1">{header}</div>
          <ChevronDown
            className={`mt-1 h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      ) : (
        header
      )}

      {job.location && (
        <p className="mt-0.5 font-mono text-[11px] text-white/40">
          {job.location}
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-1.5">
        {job.skills.map((s) => (
          <span
            key={s}
            className="cp-chip rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/60"
          >
            {s}
          </span>
        ))}
      </div>

      {expandable && (
        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="cp-exp-details overflow-hidden"
            >
              {job.details!.map((d, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 py-1.5 text-[13px] leading-relaxed text-white/75"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  <span>{d}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CyberpunkPage({
  variant = "theme",
}: {
  variant?: "home" | "theme";
} = {}) {
  const isHome = variant === "home";

  return (
    <>
      <Head>
        <title>{isHome ? "John Zolton" : "John Zolton — Cyberpunk"}</title>
        <meta
          name="description"
          content={
            isHome
              ? "John Zolton — ML Engineer · ex-Patent Attorney."
              : "John Zolton — ML Engineer · ex-Patent Attorney. Cyberpunk theme."
          }
        />
      </Head>

      <main className="relative min-h-screen overflow-hidden bg-[#06060a] font-mono text-white">
        <CyberpunkBackground />


        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32"
        >
          {/* ===================== HERO ===================== */}
          <section className="relative flex flex-col items-start gap-6 py-10 sm:py-16">
            <motion.span
              variants={fadeUp}
              className="cp-label rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300"
            >
              {profile.tagline}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="cp-name text-left font-mono text-[15vw] font-black leading-[0.85] tracking-tighter sm:text-[10vw] md:text-[8rem]"
              data-text={profile.name}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-[15px] leading-relaxed text-white/60"
            >
              {profile.blurb}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-cta group flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-[13px] font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="cp-cta flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-semibold text-white/80 transition hover:border-fuchsia-400/50 hover:text-fuchsia-200"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={`/${encodeURIComponent(profile.resume)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-cta flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[13px] font-semibold text-white/80 transition hover:border-violet-400/50 hover:text-violet-200"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </section>

          {/* ===================== ABOUT ===================== */}
          <motion.section
            variants={fadeUp}
            className="cp-panel mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
          >
            <h2 className="cp-section-title mb-5 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
              {"// about"}
            </h2>
            <div className="flex flex-col gap-4">
              {aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[14px] leading-relaxed text-white/70"
                >
                  {i === 2 ? (
                    <>
                      When I&apos;m not at the computer or staring into the
                      abyss, I&apos;m usually hiking a trail with my dog,{" "}
                      <Link
                        href="/murph"
                        className="cp-murph-link inline-flex items-center gap-1 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-1.5 py-0.5 font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-cyan-100"
                      >
                        <PawPrint className="h-3.5 w-3.5" />
                        Murph
                      </Link>
                      .
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>
          </motion.section>

          {/* ===================== EXPERIENCE ===================== */}
          <section className="mt-16">
            <motion.h2
              variants={fadeUp}
              className="cp-section-title mb-8 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300"
            >
              {"// experience"}
            </motion.h2>

            <div className="relative pl-6 sm:pl-8">
              {/* connecting line */}
              <span
                aria-hidden
                className="cp-timeline-line absolute left-[5px] top-1 bottom-1 w-px bg-gradient-to-b from-cyan-400/60 via-fuchsia-500/40 to-violet-500/60 sm:left-[7px]"
              />
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="flex flex-col gap-8"
              >
                {experience.map((job, i) => (
                  <motion.div
                    key={`${job.company}-${job.period}`}
                    variants={fadeUp}
                    className="relative"
                  >
                    {/* node dot */}
                    <span
                      aria-hidden
                      className="cp-timeline-node absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300 sm:-left-8"
                      style={{
                        boxShadow:
                          "0 0 0 4px rgba(34,211,238,0.12), 0 0 14px rgba(34,211,238,0.7)",
                      }}
                    />
                    <ExperienceCard job={job} defaultOpen={i === 0} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ===================== PROJECTS ===================== */}
          <section className="mt-16">
            <motion.h2
              variants={fadeUp}
              className="cp-section-title mb-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300"
            >
              {"// projects"}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mb-8 font-mono text-[12px] text-white/40"
            >
              main builds
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {mainProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mb-8 mt-14 font-mono text-[12px] text-white/40"
            >
              experiments &amp; smaller tools
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {smallProjects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </motion.div>
          </section>

          {/* ===================== FOOTER ===================== */}
          <motion.footer
            variants={fadeUp}
            className="mt-20 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cp-cta group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-semibold text-white/80 transition hover:border-cyan-400/50 hover:text-cyan-200"
            >
              <Github className="h-4 w-4" />
              More on Github
              <ExternalLink className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" />
            </a>

          </motion.footer>
        </motion.div>
      </main>

      <style jsx>{`
        .cp-name {
          background: linear-gradient(
            100deg,
            #22d3ee 0%,
            #a855f7 45%,
            #ff00ff 70%,
            #22d3ee 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 40px rgba(124, 58, 237, 0.35);
          animation: cp-name-shift 8s linear infinite;
          position: relative;
        }
        @keyframes cp-name-shift {
          to {
            background-position: 200% center;
          }
        }
        /* glitch flicker on hover */
        .cp-name::before,
        .cp-name::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: inherit;
          -webkit-background-clip: text;
          background-clip: text;
          opacity: 0;
          pointer-events: none;
        }
        .cp-name:hover::before {
          opacity: 0.85;
          color: #22d3ee;
          -webkit-text-fill-color: #22d3ee;
          animation: cp-glitch-1 0.45s steps(2, end) infinite;
        }
        .cp-name:hover::after {
          opacity: 0.85;
          color: #ff00ff;
          -webkit-text-fill-color: #ff00ff;
          animation: cp-glitch-2 0.45s steps(2, end) infinite;
        }
        @keyframes cp-glitch-1 {
          0% {
            clip-path: inset(0 0 85% 0);
            transform: translate(-2px, -1px);
          }
          50% {
            clip-path: inset(40% 0 40% 0);
            transform: translate(2px, 1px);
          }
          100% {
            clip-path: inset(80% 0 5% 0);
            transform: translate(-1px, 1px);
          }
        }
        @keyframes cp-glitch-2 {
          0% {
            clip-path: inset(70% 0 10% 0);
            transform: translate(2px, 1px);
          }
          50% {
            clip-path: inset(20% 0 60% 0);
            transform: translate(-2px, -1px);
          }
          100% {
            clip-path: inset(10% 0 75% 0);
            transform: translate(1px, -1px);
          }
        }
        .cp-section-title::before {
          content: "";
        }
        .cp-cta {
          transition: box-shadow 0.3s ease, border-color 0.3s ease,
            color 0.3s ease, background-color 0.3s ease;
        }
        .cp-cta:hover {
          box-shadow: 0 0 22px rgba(34, 211, 238, 0.25);
        }
        .cp-murph-link:hover {
          box-shadow: 0 0 14px rgba(34, 211, 238, 0.4);
        }
        .cp-card:hover {
          border-color: rgba(34, 211, 238, 0.5);
        }
        .cp-chip {
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .cp-card:hover .cp-chip {
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.35);
          border-color: rgba(34, 211, 238, 0.5);
        }

        @media (prefers-reduced-motion: reduce) {
          .cp-name {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
