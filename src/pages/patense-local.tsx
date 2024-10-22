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
            <source src={"/lifterdemo.mp4"} type="video/mp4" />
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
          <h2 className="mb-4 text-2xl font-semibold">Heading</h2>
          <p className="text-lg leading-relaxed">todo</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Features</h2>
          <ul className="list-disc space-y-2 pl-5">todo</ul>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Heading 2</h2>
          <p className="text-lg leading-relaxed">todo</p>
        </section>
      </div>
    </ProjectPage>
  );
}

export default Patense;
