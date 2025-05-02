import Head from "next/head";
import StackDisplay from "./components/stackdisplay";
import { PawPrint } from "lucide-react";
import { ScrollArea } from "../components/ui/scroll-area";
import { ScrollHint } from "../components/ui/scroll-hint";
import HeroSection from "./components/hero";
import AboutSection from "./components/about";
import ExperienceSection from "./components/experience";
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
      <div className="mx-auto flex min-h-screen max-w-[1600px] items-center px-4 py-16">
        {/* Three-column layout */}
        <div className="grid w-full grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* Column 1: Hero Section */}
          <div className="lg:col-span-3 lg:border-r lg:border-gray-100 lg:pr-8">
            <div className="flex h-full flex-col justify-center">
              <HeroSection />
              <div className="mt-8 flex justify-center">
                <Link
                  href={"/murph"}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-700"
                >
                  <PawPrint size={18} />
                  <span>Meet Murph</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: About & Experience */}
          <div className="lg:col-span-4 lg:pl-4">
            <ScrollHint height="h-[calc(100vh-10rem)]">
              <div className="space-y-12 pb-16">
                <AboutSection />
                <ExperienceSection />
              </div>
            </ScrollHint>
          </div>

          {/* Column 3: Projects */}
          <div className="lg:col-span-5">
            <ScrollHint height="h-[calc(100vh-10rem)]">
              <div className="pb-16">
                <ProjectList />
              </div>
            </ScrollHint>
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectList() {
  const [hoveredProject, setHoveredProject] = useState("");
  return (
    <div className="">
      <ProjectTile
        title="SocraticSensei.xyz"
        description="AI Powered Custom Study SaaS"
        picture="socraticsensei.png"
        page="socraticsensei"
        url="https://socraticsensei.xyz"
        stack="Next.js, TypeScript, React, tRPC, Stripe, AWS Lambda, Google Gemini"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("SocraticSensei.xyz")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="Patense.ai"
        description="Suite of patent tools from AI document analysis to streamlining paperwork"
        picture="patense3.png"
        page="patense"
        url="https://patense.ai"
        repo="https://github.com/JohnZolton/docktalk4"
        stack="Next.js, TypeScript, React, tRPC, Stripe, AWS Lambda, OpenAI"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Patense.ai")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="Patense.local"
        description="Patense.ai fork with 100% local LLMs"
        picture="patense-local.png"
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
        picture="snorkle.png"
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
        description="Bodybuilding training app with built-in performance adjusment/progressive overload with biofeedback. Custom auth with Nostr public/private keys."
        picture="liftr-thumbnail.png"
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
        description="Nutrition and activity tracker with quality of life features like automatic step tracking and repeat meal autofill."
        picture="fitnesspal2.png"
        page="MyFitnessBuddy"
        repo="https://github.com/JohnZolton/fitness"
        url="https://nutritiontracker.bio/tracking/"
        stack="Django, Postgres, Stripe, USDA API, Smartwatch API"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("MyFitnessBuddy")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <div>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Small stuff</h2>
        <ProjectTile
          title="Tabby-API-Ollama"
          description="TabbyAPI fork with extra endpoints to be a drop-in replacement for Ollama"
          page="tabby"
          repo="https://github.com/JohnZolton/tabbyAPI-ollama"
          stars={1}
          stack="Python, ExLlama2, FastAPI"
          hovered={hoveredProject}
          onMouseEnter={() => setHoveredProject("Tabby-API-Ollama")}
          onMouseLeave={() => setHoveredProject("")}
        />
        <ProjectTile
          title="AI Web Scraper"
          description="Crawl a list of websites and scrape contacts with LLMs and Regex's"
          page="scraper"
          repo="https://github.com/JohnZolton/tabbyAPI-ollama"
          stack="Rust, Mistralrs"
          hovered={hoveredProject}
          onMouseEnter={() => setHoveredProject("AI Web Scraper")}
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
        <div className="mb-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            <Link
              href="https://github.com/JohnZolton"
              rel="noopener noreferrer"
              target="_blank"
              className="group flex flex-row items-center gap-2 hover:text-blue-600"
            >
              More on Github
              <svg
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                height="1.25em"
                width="1.25em"
                className="transform transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-[-1px]"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 11H3a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 011.414-1.414l4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
