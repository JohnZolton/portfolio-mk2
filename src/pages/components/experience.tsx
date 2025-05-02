import React from "react";
import { Badge } from "../../../src/components/ui/badge";

interface ExperienceItemProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  skills: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  skills,
}) => {
  return (
    <div className="mb-8 rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md">
      <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="mt-1 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800 md:mt-0">
          {period}
        </span>
      </div>
      <div className="mb-3 text-base font-medium text-gray-700">
        {company}
        {location && <span className="ml-2 text-gray-500">• {location}</span>}
      </div>
      <ul className="mb-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <span className="mr-2 mt-1 text-blue-500">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="bg-blue-50 text-xs font-medium text-blue-700"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "ML Architect",
      company: "Skyward IT Solutions",
      location: "Rockville, MD",
      period: "Jan 2025 – Present",
      description: [
        "Transformed organization's #1 most popular tool (CMS chat) from rigid path-following to flexible agentic system using Model Context Protocol and custom workflows",
        "Expanded agent capabilities by building MCP integrations with key tools (Slack, Jira, Confluence, Linear, Internet, Code Execution, Vector and SQL DBs)",
        "Enabled local spreadsheet analysis with LLMs via client-side code execution and tailored Python-specific coding agents",
        "Built specialized research agent with custom tooling and prompts to amplify internal contract procurement team, with MCP tools for accessing proprietary data",
        "Developed and tested multiple knowledge base approaches (vectorstores, agentic-SQL queries, BM25 searches) to identify optimal solutions for specific use cases",
        "Developed Terraform-based infrastructure-as-code solution for reproducible LLM inference engine benchmarking across cloud providers",
        "Created custom performance testing tools capturing LLM-specific metrics (time-to-first-token, throughput) for 4 inference engines and 25+ open-source models",
        "Onboarded and trained interns and new hires in developing effective agents with the MCP protocol and best practices for LLM-powered applications",
      ],
      skills: [
        "MCP",
        "Llama-Index",
        "Terraform",
        "LLM",
        "Python",
        "Knowledge Engineering",
        "BM25",
        "Vector Databases",
        "Cloud Infrastructure",
        "Performance Testing",
      ],
    },
    {
      title: "Founder/Creator",
      company: "Socratic Sensei",
      period: "Jan 2025 – Present",
      description: [
        "Developing AI-powered study platform for law students using Next.js, tRPC, and LLMs",
        "Built spaced repetition system that automatically generates personalized issue-spotting essays based on students' knowledge gaps",
        "Implemented knowledge-grounded LLM architecture that anchors AI responses to students' course notes, eliminating hallucinations while providing Socratic guidance",
      ],
      skills: [
        "Next.js",
        "tRPC",
        "LLMs",
        "Spaced Repetition",
        "Knowledge-grounded AI",
      ],
    },
    {
      title: "Founder/Creator",
      company: "Patense.ai",
      period: "Jan 2024 – Aug 2024",
      description: [
        "Developed Patense.ai using Next.js, tRPC, Prisma, Tailwind, and AWS Lambda to help patent lawyers analyze documents",
        "Built cloud and privacy-first local solutions utilizing LLMs, with 2X performance boost through vLLM implementation",
        "Increased search speed by 300% via prompt engineering and created scalable data processing with custom O(nlog(n)) algorithm searches",
      ],
      skills: [
        "Next.js",
        "tRPC",
        "Prisma",
        "Tailwind",
        "AWS Lambda",
        "LLMs",
        "vLLM",
        "Prompt Engineering",
        "Algorithm Design",
      ],
    },
    {
      title: "Patent Attorney",
      company: "McBee, Moore & Vanik IP, LLC",
      location: "Frederick, MD",
      period: "Aug 2023 – Jan 2025",
      description: [
        "Secured patent protection for a variety of technologies",
        "Managed worldwide prosecution for multiple clients",
      ],
      skills: [
        "Patent Law",
        "Intellectual Property",
        "Legal Writing",
        "Client Relations",
      ],
    },
  ];

  return (
    <div className="w-full max-w-xl">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            location={exp.location}
            period={exp.period}
            description={exp.description}
            skills={exp.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
