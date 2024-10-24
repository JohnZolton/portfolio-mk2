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
        <h1 className="mb-8 text-center text-6xl font-bold">Patense.local</h1>
        <div className="mb-4 flex items-center justify-center">
          <video width="100%" height="auto" controls muted>
            <source src={"/extract.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
        <p className="my-6 flex flex-row">
          Tech Stack:{" "}
          <StackDisplay stack="vLLM, Next.js, TypeScript, React, tRPC, Prisma" />
        </p>
        <section className="mb-8">
          <h2 className="my-4 text-2xl font-semibold">Patense.local</h2>
          <p className="text-lg leading-relaxed">
            100% private, local document analysis with LLMs.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Features</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Inventive Feature Extraction</li>
            <li>Deep Reference Search</li>
          </ul>
        </section>

        <section className="mb-8 flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">AI Deep Search</h2>
          <p className="text-lg leading-relaxed">
            A lot of what patent attorney&apos;s do is search documents for
            various features. The problem is that takes time and people get
            tired/distracted. And an LLM can read WAY faster (hundreds/thousands
            of words per second).
          </p>
          <p className="text-lg leading-relaxed">
            So why not have the LLM search the documents? It&apos;s the same
            idea as in{" "}
            <Link className="underline" href={"patense"}>
              Patense.ai
            </Link>
            . Enter a feature, break all the references into chunks (to increase
            the accuracy of the LLM response) and ask the LLM if the chunk
            discloses or suggests the feature (the standard for getting a
            patent).
          </p>
          <p className="text-lg leading-relaxed">
            Using this technique with a 3090, I was able to extract relevant
            paragraphs from ~60 pages of patents in 40 seconds.
          </p>
        </section>
        <p className="mb-8 text-lg leading-relaxed">
          This &apos;reads&apos; all the documents and identified any sections
          that may be relevant to your possible inventive feature. Since LLMs
          hallucinate, I also included the source text as well for easy
          verification.
        </p>
        <section className="mb-8 flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">
            Inventive Feature Extraction
          </h2>
          <p className="text-lg leading-relaxed">
            This uses a similar technique but searching your own Specification.
          </p>
          <p className="text-lg leading-relaxed">
            This extracts every possible feature so you can get an overview of
            potential strategies and easily search the references (your own
            disclosure defines the possible features you can use to distinguish
            your invention from the prior art).
          </p>
        </section>
        <section className="mb-8 flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">The Tech</h2>
          <p className="text-lg leading-relaxed">
            Originally this used a naive queue, then I learned about vLLM and
            continuous batching. Continuous batching is-hang on. In a graphics
            card, there&apos;s space for the model and space for the prompt. If
            there&apos;s space left over you can stuff in more prompts. When
            those prompts are finished, space opens up. Continuous batching is
            the process of automatically refilling the graphics card as prompts
            finish and free memory. This led to massive (8x) speed gains.
          </p>
          <p className="text-lg leading-relaxed">
            The original project,{" "}
            <Link href={"patense"} className="underline">
              Patense.ai
            </Link>
            , used batched concurrent api calls to chatGPT. I chose not to use
            local because (1) the target user likely doesn&apos;t have the
            compute or the knowhow to run it locally and (2) parallel API calls
            were way faster.
          </p>
          <p className="text-lg leading-relaxed">
            But with continuous batching, local LLMs have a ~0.5-1.0 second
            response time (at least with an 8b model). Making it much faster
            than openAI (at my current price tier).
          </p>
          <p className="text-lg leading-relaxed">
            I think the entire process of obtaining a patent can be automated
            (or at least, seriously augmented) with LLMs. I&apos;m building out
            tools for the various macro actions needed.
          </p>
        </section>
      </div>
    </ProjectPage>
  );
}

export default Patense;
