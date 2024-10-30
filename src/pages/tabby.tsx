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
      <div className="container mx-auto max-w-3xl p-2 text-xl">
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
        <div className="my-6 flex flex-row">
          Tech Stack: <StackDisplay stack="Python, ExLlama2, FastAPI" />
        </div>
        <section className="mb-8">
          <h2 className="my-4 text-2xl font-semibold">Tabby-API-Ollama</h2>
          <p className="text-lg leading-relaxed">
            A fork of Tabby-API that functions as a drop-in replacement of
            Ollama.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Motivation</h2>
          <p className="text-lg leading-relaxed">
            I really disliked every LLM frontend besides open-webui. But
            open-webui only works with Ollama. Ollama lacks my favorite model
            format, Exllamav2. This format is quite fast for models that fit
            entirely in the GPU(s). So why not make open-webui compatible with
            my go-to server, TabbyAPI?
          </p>
        </section>

        <section className="mb-8 flex flex-col gap-y-4">
          <h2 className="text-2xl font-semibold">The Process</h2>
          <p className="text-lg leading-relaxed">
            I fired up open-webui and pointed it at the TabbyAPI endpoint. I
            read the error message, then the open-webui backend code to see what
            it was expecting, and then TabbyAPI server to figure out how to
            resolve it. I ultimately made all changes in Tabby since it was
            simplest, and would make it a drop-in replacement for Ollama. I
            found the endpoint open-webui was trying to hit, what it expected,
            and implemented it in Tabby. Like model lists, version numbers, chat
            completions etc.
          </p>
          <p className="text-lg leading-relaxed">
            I worked like this for a couple days, bouncing between reading
            open-webui code and then implementing that in Tabby. I finally got
            text to generate and receive in open-webui, but open-webui
            wouldn&apos;t display it. I got a JSON parsing error. After an
            embarrasingly long time, I realized the answer was in the Ollama
            backend and I just had to mimic their streaming response in Tabby.
          </p>
          <p className="text-lg leading-relaxed">
            With that final issue resolved I can finally use the two together
            and experience the sweet relief of being able to move on with my
            life.
          </p>
        </section>
      </div>
    </ProjectPage>
  );
}

export default Patense;
