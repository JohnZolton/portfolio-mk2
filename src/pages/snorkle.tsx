import Image from "next/image";
import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";
import { Button, buttonVariants } from "../../src/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import StackDisplay from "./components/stackdisplay";

function Patense() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <div className="container mx-auto max-w-3xl p-2">
        <h1 className="mb-8 text-center text-6xl font-bold">Snorkle</h1>
        <div className="mb-4 flex items-center justify-center">
          <div className="mb-4 flex items-center justify-center">
            <img
              src="/snorkle.gif"
              alt="Snorkling GIF"
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="mx-auto my-2 flex max-w-xs flex-row items-center justify-center  px-10">
          <Link
            href={"https://github.com/JohnZolton/patense-local"}
            target="_blank"
            className={buttonVariants({ variant: "default" })}
          >
            <div className="mr-2">View Code</div>
            <Github />
          </Link>
        </div>
        <div className="my-6 flex flex-row">
          Tech Stack:{" "}
          <StackDisplay stack="vLLM, Next.js, TypeScript, React, tRPC, Prisma" />
        </div>
        <section className="mb-8 ">
          <div className="flex flex-row gap-x-2">
            <h2 className="my-4 text-2xl font-semibold">Snorkle</h2>
            <div className="transtion flex flex-row items-center duration-300 ">
              <div className="flex flex-row items-start justify-start">
                <div className="px-1 font-semibold">{24}</div>
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
                <div className="flex flex-row items-center transition duration-300 ">
                  <div className="px-1 font-semibold">{4}</div>
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
              </div>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            100% private, local document analysis with LLMs.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Features</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Deep Document Search</li>
          </ul>
        </section>

        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            This is a fork of{" "}
            <Link className="underline" href={"patense-local"}>
              Patense.local
            </Link>{" "}
            with a modified system prompt for generic document searches.
            Sometimes ctl+F doesn&apos;t cut it and you need a broader or more
            robust way to find relevant text.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Tech</h2>
          <p className="text-lg leading-relaxed">
            The core tech and features are the same. Break reference documents
            into chunks and ask an LLM if the content is relevant to a given
            query. Return a brief quote and the full text for verification. Uses
            Next.js on the frontend with a vLLM server.
          </p>
        </section>
      </div>
    </ProjectPage>
  );
}

export default Patense;
