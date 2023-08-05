import Head from "next/head";
import PageLayout from "./components/pagelayout";
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
import Light from "./components/light";

library.add(fab, faGithub);

export default function Home() {
  return (
    <>
      <Head>
        <title>John Zolton</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Light/>
        <div className="h-full md:w-1/2 lg:sticky  lg:top-0 lg:flex lg:flex-col lg:py-24">
          <HeroSection />
        </div>
        <div className="h-full  w-full overflow-auto md:w-3/4 lg:pt-24">
          <AboutSection />
          <BigProjectList />
          <TechList />
          <SmallProjects />
          <CourseList />
        </div>
      </PageLayout>
    </>
  );
}

function SmallProjects() {
  const [hoveredProject, setHoveredProject] = useState("");
  return (
    <div>
      <div className="my-3 text-center text-3xl font-semibold">Projects</div>
      <ProjectTile
        title="Scribe"
        description="Real time voice-to-text transcription using the open source AI model Whisper"
        repo="https://github.com/JohnZolton/scribe"
        stars={39}
        forks={13}
        stack="Python, Whisper"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Scribe")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="AudioBooker"
        description="PDF and text file to audio converter using the open source AI model Bark"
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
          href="projectarchive"
          className="group flex flex-row items-center justify-center gap-1 text-gray-300 hover:text-white hover:underline"
        >
          Full Project Archive
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
    <>
      <ProjectTile
        title="Lyfter"
        description="Workout and exercise tracker with built in performance monitoring and program adjustment"
        picture="lyfter2.png"
        page="lyfter"
        url="https://lyfter.vercel.app/"
        repo="https://github.com/JohnZolton/lyfter"
        stack="Next.js, TypeScript, React, tRPC, Prisma, Tailwind, Clerk"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Lyfter")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="MyFitnessBuddy"
        description="Nutrition and activity tracker packed with quality of life features like automatic step tracking and meal planning"
        picture="fitnesspal2.png"
        page="MyFitnessBuddy"
        repo="https://github.com/JohnZolton/fitness"
        url="https://nutritiontracker.bio/tracking/"
        stack="Django, Postgres, Stripe, USDA API, Smartwatch API"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("MyFitnessBuddy")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="FreeBay"
        description="Online Auction platform featuring commenting on listings, watchlisting items, 2FA, and email and password resets"
        picture="freebay.png"
        page="FreeBay"
        repo="https://github.com/JohnZolton/freebay"
        url="https://freebay.live"
        stack="Django, Postgres, AWS S3, Railway"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("FreeBay")}
        onMouseLeave={() => setHoveredProject("")}
      />
    </>
  );
}
