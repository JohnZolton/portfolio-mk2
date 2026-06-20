/**
 * Shared personal/profile content used by the theme variants so every
 * redesign stays content-consistent while the presentation differs.
 */

export const profile = {
  name: "John Zolton",
  tagline: "ML Engineer · ex-Patent Attorney",
  blurb:
    "Patent attorney turned software engineer building AI-powered tools.",
  email: "john@zolton.xyz",
  github: "https://github.com/JohnZolton",
  resume: "John Zolton Resume.pdf",
};

export const aboutParagraphs: string[] = [
  "Patent attorney turned software engineer with a passion for building innovative AI-powered tools.",
  "I heard AI was going to take my job so I'm doing my part to speed it up.",
  "When I'm not at the computer or staring into the abyss, I'm usually hiking a trail with my dog, Murph.",
];

export interface ExperienceEntry {
  title: string;
  company: string;
  location?: string;
  period: string;
  skills: string[];
  /** Optional expandable bullet details (renders a click-to-expand card). */
  details?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "ML Engineer",
    company: "Trunk Tools",
    period: "Sept 2025 – Present",
    skills: ["Python", "Prefect", "AWS", "LLM", "NLP", "Pipeline Orchestration"],
    details: [
      "Launched new Submittal Register product by productionizing NLP research into a Prefect-orchestrated AWS pipeline, delivering an app-ready service end to end",
      "Led cross-team integration by defining data contracts and coordinating API interfaces between NLP and frontend/app teams, unblocking delivery and aligning pipeline outputs with product requirements",
      "Drove major latency improvements through parallel execution and pipeline tuning, processing ~3,000-page documents in ~5–8 minutes (~4× faster than early runs, beating <10-minute target)",
      "Implemented token-efficient consolidation and deduplication across parallelized paths, reducing redundant LLM work while preserving deterministic outputs",
      "Improved extraction quality through evaluation-driven iteration, achieving ~99.6% IoU on page-range detection and higher section-splitting and data-extraction accuracy",
      "Optimized source-text highlighting by constraining bounding-box search to predicted pages with ±2-page fallback (capturing ~99.8% of misses), reducing local runtime from 10–15 minutes to ~4–5 minutes while maintaining highlight coverage",
      "Added production robustness for LLM-dependent steps with retry handling and token-range chunking to prevent request failures and improve pipeline reliability",
      "Supported Submittal Review v3 stabilization on TRACI, helping reduce failed-run rates from ~20–30% to ≤1% through production hardening and targeted fixes",
      "Refactored agent orchestration patterns for improved clarity, maintainability, and reliability",
      "Provided critical bug-fix coverage during senior engineer PTO, keeping releases on track",
    ],
  },
  {
    title: "ML Architect",
    company: "Skyward IT Solutions",
    period: "Jan 2025 – Sept 2025",
    skills: ["Python", "AWS", "LLM", "MCP", "Terraform", "Vector DBs"],
    details: [
      "Transformed the organization's #1 most popular tool (CMS chat) from rigid path-following to a flexible agentic system using Model Context Protocol and custom workflows",
      "Expanded agent capabilities by building MCP integrations with key tools (Slack, Jira, Confluence, Linear, Internet, Code Execution, Vector and SQL DBs)",
      "Enabled local spreadsheet analysis with LLMs via client-side code execution and tailored Python-specific coding agents",
      "Built a specialized research agent with custom tooling and prompts to amplify the internal contract procurement team, with MCP tools for accessing proprietary data",
      "Developed and tested multiple knowledge base approaches (vector stores, agentic-SQL queries, BM25 searches) to identify optimal solutions for specific use cases",
      "Developed a Terraform-based infrastructure-as-code solution for reproducible LLM inference engine benchmarking across cloud providers",
      "Created custom performance testing tools capturing LLM-specific metrics (time-to-first-token, throughput) for 4 inference engines and 25+ open-source models",
      "Onboarded and trained interns and new hires in developing effective agents with the MCP protocol and best practices for LLM-powered applications",
    ],
  },
  {
    title: "Founder/Creator",
    company: "Socratic Sensei",
    period: "Jan 2025 – Present",
    skills: ["Next.js", "tRPC", "LLMs", "Spaced Repetition"],
  },
  {
    title: "Founder/Creator",
    company: "Patense.ai",
    period: "Jan 2024 – Aug 2024",
    skills: ["Next.js", "tRPC", "Prisma", "AWS Lambda", "vLLM"],
  },
  {
    title: "Patent Attorney",
    company: "McBee, Moore & Vanik IP, LLC",
    location: "Frederick, MD",
    period: "Aug 2023 – Jan 2025",
    skills: ["Patent Law", "IP", "Legal Writing"],
  },
];
