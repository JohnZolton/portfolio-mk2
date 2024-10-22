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
        <h1 className="mb-8 text-center text-6xl font-bold">
          Tabby-API-Ollama
        </h1>
        <div className="mx-auto my-2 flex max-w-xs flex-row items-center justify-center  px-10">
          <Link
            href={"https://github.com/JohnZolton/tabbyAPI-ollama"}
            target="_blank"
            className={buttonVariants({ variant: "default" })}
          >
            <div className="mr-2">View Code</div>
            <Github />
          </Link>
        </div>
        <p className="my-6 flex flex-row">
          Tech Stack: <StackDisplay stack="Python, ExLlama2, FastAPI" />
        </p>
        <section className="mb-8">
          <h2 className="my-4 text-2xl font-semibold">Tabby-API-Ollama</h2>
          <p className="text-lg leading-relaxed">
            A fork of Tabby-API that functions as a drop-in replacement of
            Ollama.
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
