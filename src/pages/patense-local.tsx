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
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-8 text-center text-5xl font-bold text-gray-900">
          Patense.local
        </h1>
        <div className="mb-4 flex items-center justify-center">
          <div className="relative w-full overflow-hidden bg-black pb-[56.25%]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/k-4vgzUKX7w"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="mb-6 flex flex-row justify-center gap-4">
          <Link
            href={"https://github.com/JohnZolton/patense-local"}
            target="_blank"
            className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <span>View Code</span>
            <Github size={18} />
          </Link>
        </div>
        <div className="mb-6 rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
          <div className="flex flex-row items-center">
            <span className="mr-2 font-semibold text-gray-700">
              Tech Stack:
            </span>
            <StackDisplay stack="vLLM, Next.js, TypeScript, React, tRPC, Prisma" />
          </div>
        </div>

        <div className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-6 shadow-sm">
          <p className="text-blue-600">
            100% private, local document analysis with LLMs.
          </p>
        </div>
        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Features</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>Inventive Feature Extraction</div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>Deep Reference Search</div>
            </li>
          </ul>
        </section>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            AI Deep Search
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              A lot of what patent attorney&apos;s do is search documents for
              various features. The problem is that takes time and people get
              tired/distracted. And an LLM can read WAY faster
              (hundreds/thousands of words per second).
            </p>
            <p>
              So why not have the LLM search the documents? It&apos;s the same
              idea as in{" "}
              <Link className="text-blue-600 hover:underline" href={"patense"}>
                Patense.ai
              </Link>
              . Enter a feature, break all the references into chunks (to
              increase the accuracy of the LLM response) and ask the LLM if the
              chunk discloses or suggests the feature (the standard for getting
              a patent).
            </p>
            <p>
              Using this technique with a 3090, I was able to extract relevant
              paragraphs from ~60 pages of patents in 40 seconds.
            </p>
          </div>
        </section>
        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <div className="space-y-4 text-gray-600">
            <p>
              This &apos;reads&apos; all the documents and identified any
              sections that may be relevant to your possible inventive feature.
              Since LLMs hallucinate, I also included the source text as well
              for easy verification.
            </p>
          </div>
        </section>
        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Inventive Feature Extraction
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              This uses a similar technique but searching your own
              Specification.
            </p>
            <p>
              This extracts every possible feature so you can get an overview of
              potential strategies and easily search the references (your own
              disclosure defines the possible features you can use to
              distinguish your invention from the prior art).
            </p>
          </div>
        </section>
        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">The Tech</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Originally this used a naive queue, then I learned about vLLM and
              continuous batching. Continuous batching is-hang on. In a graphics
              card, there&apos;s space for the model and space for the prompt.
              If there&apos;s space left over you can stuff in more prompts.
              When those prompts are finished, space opens up. Continuous
              batching is the process of automatically refilling the graphics
              card as prompts finish and free memory. This led to massive (8x)
              speed gains.
            </p>
            <p>
              The original project,{" "}
              <Link href={"patense"} className="text-blue-600 hover:underline">
                Patense.ai
              </Link>
              , used batched concurrent api calls to chatGPT. I chose not to use
              local because (1) the target user likely doesn&apos;t have the
              compute or the knowhow to run it locally and (2) parallel API
              calls were way faster.
            </p>
            <p>
              But with continuous batching, local LLMs have a ~0.5-1.0 second
              response time (at least with an 8b model). Making it much faster
              than openAI (at my current price tier).
            </p>
            <p>
              I think the entire process of obtaining a patent can be automated
              (or at least, seriously augmented) with LLMs. I&apos;m building
              out tools for the various macro actions needed.
            </p>
          </div>
        </section>
      </div>
    </ProjectPage>
  );
}

export default Patense;
