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
import { useEffect, useRef, useCallback } from "react";
import { useMediaQuery } from "react-responsive";

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
        <div className="my-auto h-full flex-col items-center justify-center md:w-1/2 lg:sticky lg:flex lg:flex-col lg:py-80">
          <HeroSection />
        </div>
        <div className="h-full  w-full ">
          <ProjectShowcase projects={projects} />
        </div>
      </PageLayout>
    </>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}
const projects = [
  {
    id: 1,
    title: "Patense.ai",
    description: "Patent Law AI Tools",
    imageUrl: "patense3.png",
  },
  {
    id: 2,
    title: "AI Lead Generator",
    description: "Rust AI Web Scraper",
    imageUrl: "rust-scraper.png",
  },
  {
    id: 3,
    title: "Snorkle",
    description: "Local, private AI Document Deep Search",
    imageUrl: "snorkle.png",
  },
  {
    id: 4,
    title: "Liftr.club",
    description: "Workout Coach App",
    imageUrl: "liftr.png",
  },
  {
    id: 5,
    title: "My fitness buddy",
    description: "Nutrition and activity tracking",
    imageUrl: "fitnesspal.png",
  },
];

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const rotationSpeed = 0.1;
  const animationRef = useRef<number>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [dragged, setDragged] = useState(false);

  const animate = useCallback(() => {
    setRotation((prev) => (prev + rotationSpeed) % 360);
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (!isDragging && !hoveredIndex) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationRef.current!);
    }
    return () => cancelAnimationFrame(animationRef.current!);
  }, [isDragging, hoveredIndex, animate]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setDragged(false);
    setIsDragging(true);
    setStartX(e.clientX);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      setRotation((prev) => (prev + deltaX * 0.5) % 360);
      setStartX(e.clientX);
      if (Math.abs(deltaX) > 5) {
        setDragged(true);
      }
    },
    [isDragging, startX]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  function handleCardClick(project: Project) {
    if (!dragged) {
      setSelectedProject(project);
    }
  }
  function handleCloseDetail() {
    setSelectedProject(null);
    setIsDragging(false);
    setHoveredIndex(null);
  }

  useEffect(() => {
    // Add global event listeners for mouseup and mouseleave
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseLeave = () => setIsDragging(false);

    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("mouseleave", handleGlobalMouseLeave);

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mouseleave", handleGlobalMouseLeave);
    };
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (!isMobile)
    return (
      <>
        {!selectedProject && (
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className="relative h-[200px] w-full cursor-grab select-none lg:mt-64"
          >
            {projects.map((project, index) => {
              const angle =
                (index / projects.length) * 2 * Math.PI +
                rotation * (Math.PI / 180);
              const radius = 250; // Adjust this value to change the circle size
              const x = Math.sin(angle) * radius;
              const y = Math.cos(angle) * radius * 0.3 - 50; // Flatten the circle and raise the back
              const scale = 0.8 + (0.3 * Math.cos(angle)) / 2; // Scale based on position
              const zIndex = Math.round(Math.cos(angle) * 100);
              const isHovered =
                hoveredIndex !== null && hoveredIndex + 1 === index + 1;

              return (
                <div
                  key={project.id}
                  className="absolute  z-10 h-96 w-80 rounded-lg border border-black bg-white p-4 shadow-xl transition-all duration-300 ease-out"
                  onClick={() => handleCardClick(project)}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                  }}
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${
                      isHovered ? 1.2 * scale : scale
                    })`,
                    zIndex,
                    left: "calc(50% - 128px)", // Center horizontally
                    top: "50%", // Center vertically
                  }}
                >
                  <img
                    src={project.imageUrl}
                    draggable={false}
                    alt={project.title}
                    className="h-64 w-full rounded-t-lg object-cover"
                  />
                  <div className="p-4 text-black">
                    <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {selectedProject && (
          <div className="relative h-full w-full">
            <DetailView
              project={selectedProject}
              handleCloseDetail={handleCloseDetail}
            />
          </div>
        )}
      </>
    );

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-4 p-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg border border-black bg-white p-4 shadow-md"
            onClick={() => handleCardClick(project)}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-48 w-full rounded-t-lg object-cover"
            />
            <div className="p-4 text-black">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
        {selectedProject && (
          <div className="relative h-full w-full">
            <DetailView
              project={selectedProject}
              handleCloseDetail={handleCloseDetail}
            />
          </div>
        )}
      </div>
    );
  }
};

import { motion } from "framer-motion";

interface DetailViewProps {
  project: Project;
  handleCloseDetail: () => void;
}
function DetailView({ project, handleCloseDetail }: DetailViewProps) {
  useEffect(() => {
    function handleEscKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleCloseDetail();
      }
    }

    function handlePopState(event: PopStateEvent) {
      if (event.state && event.state.detailView) {
        // Close the detail view when back button is pressed and detail view is open
        handleCloseDetail();
      }
    }

    document.addEventListener("keydown", handleEscKey);
    window.addEventListener("popstate", handlePopState);
    // Push a new state to the history when opening the detail view
    window.history.pushState({ detailView: true }, "");

    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener("keydown", handleEscKey);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handleCloseDetail]);

  // Function to handle closing the detail view
  const closeDetailView = () => {
    // Check if there's a state in the history with detailView: true
    if (window.history.state && window.history.state.detailView) {
      // If so, go back in the browser history
      window.history.back();
    } else {
      // If not, just call the close function directly
      handleCloseDetail();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] bg-black bg-opacity-50"
        onClick={handleCloseDetail}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="full absolute z-[9999] flex h-screen w-full flex-col items-start  justify-start bg-black p-8 text-white"
      >
        <div className="w-full">
          <img
            src={project.imageUrl}
            className="h-auto max-h-[40vh] w-full object-contain"
            alt={project.title}
          />
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
        </div>
        <button
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-900"
          onClick={handleCloseDetail}
        >
          &times;
        </button>
      </motion.div>
    </>
  );
}

function SmallProjects() {
  const [hoveredProject, setHoveredProject] = useState("");
  return (
    <div>
      <div className="my-3 text-center text-3xl font-semibold">
        Software Projects
      </div>
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
          className="group flex flex-row items-center justify-center gap-1 text-gray-300 hover:text-white hover:underline"
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
    <>
      <div className="my-3 text-center text-3xl font-semibold">Web Apps</div>
      <ProjectTile
        title="Patense.ai"
        description="Save patent attorneys hours by analyzing documents in seconds."
        picture="patense3.png"
        page="patense"
        url="https://patense.ai"
        repo="https://github.com/JohnZolton/docktalk4"
        stack="Next.js, TypeScript, React, tRPC, Prisma, Tailwind, Clerk, AWS Lambda, OpenAI"
        hovered={hoveredProject}
        onMouseEnter={() => setHoveredProject("Patense.ai")}
        onMouseLeave={() => setHoveredProject("")}
      />
      <ProjectTile
        title="Liftr.club"
        description="Workout and exercise tracker with built in performance monitoring and feedback adjustment"
        picture="liftr.png"
        page="liftr"
        url="https://liftr.club/"
        repo="https://github.com/JohnZolton/lyfter"
        stack="Next.js, TypeScript, React, tRPC, Prisma, Tailwind, Clerk"
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
    </>
  );
}
