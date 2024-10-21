import Head from "next/head";
import StackDisplay from "./components/stackdisplay";

import { ScrollArea } from "../components/ui/scroll-area";
import HeroSection from "./components/hero";
import AboutSection from "./components/about";
import ProjectTile from "./components/projecttile";
import CourseList from "./components/courselist";
import TechList from "./components/techstack";
import { useState } from "react";
import Link from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { Scroll } from "lucide-react";

library.add(fab, faGithub);

export default function Home() {
  return (
    <>
      <Head>
        <title>John Zolton</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex h-screen w-full flex-col lg:flex-row">
        <div className="flex h-screen w-1/2 flex-col items-end justify-center lg:sticky lg:top-0">
          <HeroSection />
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="flex h-full w-full flex-col justify-center overflow-y-auto p-4">
            <div className="flex w-2/3 flex-col items-center justify-center lg:items-end lg:justify-end lg:pt-[800px]">
              <BigProjectList />
              <SmallProjects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  stack?: string;
  repo?: string;
  stars?: number;
  forks?: number;
}

interface GithubDisplayProps {
  project: Project;
}
function GithubDisplay({ project }: GithubDisplayProps) {
  return (
    <div className="flex flex-row">
      {project.repo && (
        <Link href={project.repo} legacyBehavior className="">
          <a target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </Link>
      )}
      {project.stars && (
        <div className="transtion flex flex-row items-center duration-300 hover:text-orange-300">
          <div className="px-1 font-semibold">{project.stars}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      )}
      {project.forks && (
        <div className="flex flex-row items-center transition duration-300 hover:text-blue-500">
          <div className="px-1 font-semibold">{project.forks}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-git-fork"
          >
            <circle cx="12" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="6" r="3" />
            <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
            <path d="M12 12v3" />
          </svg>
        </div>
      )}
      {project.stack && (
        <div className="">
          <StackDisplay stack={project.stack} />
        </div>
      )}
    </div>
  );
}

function SmallProjects() {
  const [hoveredProject, setHoveredProject] = useState("");
  return (
    <div>
      <div className="my-2 text-center text-xl font-semibold">Small stuff</div>
      <ProjectTile
        title="Tabby-API-Ollama"
        description="TabbyAPI with extra endpoints to be a drop-in replacement for Ollama"
        repo="https://github.com/JohnZolton/tabbyAPI-ollama"
        stars={1}
        stack="Python, ExLlama2"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Tappy-API-Ollama")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="Scribe"
        description="Real time voice-to-text transcription using the open source AI model Whisper"
        repo="https://github.com/JohnZolton/scribe"
        stars={50}
        forks={15}
        stack="Python, Whisper"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Scribe")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="AudioBooker"
        description="Turn PDFs into Audio using open source AI"
        repo="https://github.com/JohnZolton/pdf-2-mp3"
        stack="Python, Bark"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("AudioBooker")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="Floppy Bird"
        description="A modern take on a timeless classic"
        url="https://floppybirddemo.github.io/"
        stack="JavaScript, HTML, CSS"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Floppy Bird")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="This Website"
        description="A modern, aesthetic portfolio website"
        repo="https://github.com/JohnZolton/portfolio-mk2"
        stack="Next.Js, React, TypeScript, Tailwind"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("This Website")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <div className="my-3 text-center text-xl font-semibold">
        <Link
          href="https://github.com/JohnZolton"
          rel="noopener noreferrer"
          target="_blank"
          className="group flex flex-row items-center justify-center gap-1 hover:underline"
        >
          More on Github
          <svg
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            width="1em"
            className="transform transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-[-1px] group-hover:scale-125"
          >
            <path
              fillRule="evenodd"
              d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 11H3a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 011.414-1.414l4 4z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function BigProjectList() {
  const [hoveredProject, setHoveredProject] = useState("");
  return (
    <div className="">
      <ProjectTile
        title="Patense.ai"
        description="Suite of patent tools from AI document analysis to streamlining paperwork"
        picture="patense3.png"
        page="patense"
        url="https://patense.ai"
        repo="https://github.com/JohnZolton/docktalk4"
        stack="Next.js, TypeScript, React, tRPC, Prisma, Tailwind, AWS Lambda, OpenAI"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Patense.ai")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="Patense.local"
        description="Patense.ai fork with 100% local LLMs"
        picture=""
        page="patense-local"
        repo="https://github.com/JohnZolton/patense-local"
        stack="vLLM, Next.js, TypeScript, React, tRPC, Prisma"
        stars={7}
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Patense.local")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="Snorkle"
        description="Deep document search with 100% local LLMs (generic fork of patense.local)"
        picture=""
        page="snorkle"
        repo="https://github.com/JohnZolton/snorkle"
        stack="vLLM, Next.js, TypeScript, React, tRPC, Prisma"
        stars={24}
        forks={4}
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Snorkle")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="Liftr.club"
        description="Bodybuilding training app with built-in performance adjusment/progressive overload with biofeedback. Custom auth with Nostr log-in."
        picture="liftr.png"
        page="liftr"
        url="https://liftr.club/"
        repo="https://github.com/JohnZolton/lyfter"
        stack="Nostr, Next.js, TypeScript, React"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Liftr.club")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="MyFitnessBuddy"
        description="Nutrition and activity tracker with quality of life features like automatic step tracking and repeat meal autofill"
        picture="fitnesspal2.png"
        page="MyFitnessBuddy"
        repo="https://github.com/JohnZolton/fitness"
        url="https://nutritiontracker.bio/tracking/"
        stack="Django, Postgres, Stripe, USDA API, Smartwatch API"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("MyFitnessBuddy")}
        onMouseLeave={() => setHoveredProject("")}
      />
    </div>
  );
}
