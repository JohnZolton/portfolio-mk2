/**
 * Single source of truth for project data across the portfolio.
 * Consumed by the default home page, the theme variants under
 * /themes/*, and the project gallery. Edit here and every view
 * stays in sync.
 */

export interface Project {
  title: string;
  description: string;
  /** filename in /public */
  picture?: string;
  /** live deployment */
  url?: string;
  /** source repository */
  repo?: string;
  stars?: number;
  forks?: number;
  /** internal subpage route, e.g. "gobble" -> /gobble */
  page?: string;
  /** comma-separated tech stack */
  stack: string;
  category: "main" | "small";
}

export const projects: Project[] = [
  {
    title: "Gobble",
    description:
      "MCP server that turns podcasts, YouTube videos, and books into a searchable, vector-indexed knowledge base. Downloads and transcribes 2-hour videos in ~45s with local GPU Parakeet models.",
    picture: "gobble.jpg",
    page: "gobble",
    repo: "https://github.com/JohnZolton/Gobble",
    stack: "Python, MCP, Parakeet, yt-dlp, Vector DB, SSE",
    category: "main",
  },
  {
    title: "SocraticSensei.xyz",
    description: "AI Powered Custom Study SaaS",
    picture: "socraticsensei.png",
    page: "socraticsensei",
    url: "https://socraticsensei.xyz",
    stack: "Next.js, TypeScript, React, tRPC, Stripe, AWS Lambda, Google Gemini",
    category: "main",
  },
  {
    title: "Patense.ai",
    description:
      "Suite of patent tools from AI document analysis to streamlining paperwork",
    picture: "patense3.png",
    page: "patense",
    url: "https://patense.ai",
    repo: "https://github.com/JohnZolton/docktalk4",
    stack: "Next.js, TypeScript, React, tRPC, Stripe, AWS Lambda, OpenAI",
    category: "main",
  },
  {
    title: "Patense.local",
    description: "Patense.ai fork with 100% local LLMs",
    picture: "patense-local.png",
    page: "patense-local",
    repo: "https://github.com/JohnZolton/patense-local",
    stack: "vLLM, Next.js, TypeScript, React, tRPC, Prisma",
    stars: 7,
    category: "main",
  },
  {
    title: "Snorkle",
    description:
      "Deep document search with 100% local LLMs (generic fork of patense.local)",
    picture: "snorkle.png",
    page: "snorkle",
    repo: "https://github.com/JohnZolton/snorkle",
    stack: "vLLM, Next.js, TypeScript, React, tRPC, Prisma",
    stars: 24,
    forks: 4,
    category: "main",
  },
  {
    title: "Liftr.club",
    description:
      "Bodybuilding training app with built-in performance adjustment/progressive overload with biofeedback. Custom auth with Nostr public/private keys.",
    picture: "liftr-thumbnail.png",
    page: "liftr",
    url: "https://liftr.club/",
    repo: "https://github.com/JohnZolton/lyfter",
    stack: "Nostr, Next.js, TypeScript, React",
    category: "main",
  },
  {
    title: "MyFitnessBuddy",
    description:
      "Nutrition and activity tracker with quality of life features like automatic step tracking and repeat meal autofill.",
    picture: "fitnesspal2.png",
    page: "MyFitnessBuddy",
    repo: "https://github.com/JohnZolton/fitness",
    url: "https://nutritiontracker.bio/tracking/",
    stack: "Django, Postgres, Stripe, USDA API, Smartwatch API",
    category: "main",
  },
  {
    title: "Tabby-API-Ollama",
    description:
      "TabbyAPI fork with extra endpoints to be a drop-in replacement for Ollama",
    page: "tabby",
    repo: "https://github.com/JohnZolton/tabbyAPI-ollama",
    stack: "Python, ExLlama2, FastAPI",
    stars: 1,
    category: "small",
  },
  {
    title: "AI Web Scraper",
    description:
      "Crawl a list of websites and scrape contacts with LLMs and Regex's",
    page: "scraper",
    repo: "https://github.com/JohnZolton/tabbyAPI-ollama",
    stack: "Rust, Mistralrs",
    category: "small",
  },
  {
    title: "Scribe",
    description:
      "Real time voice-to-text transcription using the open source AI model Whisper",
    repo: "https://github.com/JohnZolton/scribe",
    stack: "Python, Whisper",
    stars: 50,
    forks: 15,
    category: "small",
  },
  {
    title: "AudioBooker",
    description: "Turn PDFs into Audio using open source AI",
    repo: "https://github.com/JohnZolton/pdf-2-mp3",
    stack: "Python, Bark",
    category: "small",
  },
  {
    title: "Floppy Bird",
    description: "A modern take on a timeless classic",
    url: "https://floppybirddemo.github.io/",
    stack: "JavaScript, HTML, CSS",
    category: "small",
  },
  {
    title: "This Website",
    description: "A modern, aesthetic portfolio website",
    repo: "https://github.com/JohnZolton/portfolio-mk2",
    stack: "Next.js, React, TypeScript, Tailwind",
    category: "small",
  },
];

export const mainProjects: Project[] = projects.filter(
  (p) => p.category === "main",
);
export const smallProjects: Project[] = projects.filter(
  (p) => p.category === "small",
);

export const stackList = (stack: string): string[] =>
  stack
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
