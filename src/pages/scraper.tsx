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
          AI Lead Generator
        </h1>
        <div className="mx-auto my-2 flex max-w-xs flex-row items-center justify-center  px-10">
          <Link
            href={"https://github.com/JohnZolton/rust-web-scraper"}
            target="_blank"
            className={buttonVariants({ variant: "default" })}
          >
            <div className="mr-2">View Code</div>
            <Github />
          </Link>
        </div>
        <div className="my-6 flex flex-row">
          Tech Stack: <StackDisplay stack="Rust, Mistralrs" />
        </div>
        <section className="mb-8">
          <h2 className="my-4 text-2xl font-semibold">
            Web-scraper/lead-generator
          </h2>
          <p className="text-lg leading-relaxed">
            Feed it a list of websites, crawl the site for their personnel
            pages, and extract contact information with regex&apos;s and LLMs.
            Written in Rust because I wanted to learn something new.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Motivation</h2>
          <p className="text-lg leading-relaxed">
            I needed more leads for Patense.ai. Last time I spent an afternoon
            saving pages and extracting contacts by tweaking regexes for each
            page. It wasn&apos;t great but it wasn&apos;t terrible. Most pages
            were similar so I just had to make minor tweaks. But I ran out of
            leads and needed more. So this time, instead of spending a few
            mindnumbing hours doing it manually, I spent a week making a AI do
            it.
          </p>
        </section>
        <h2 className="my-4 text-2xl font-semibold">The Solution</h2>
        <ul className="mb-4 list-inside list-disc">
          <li>Load companies from json</li>
          <li>Crawl company website </li>
          <li className="ml-6">
            Regex all the &apos;a&apos; tags and add them to a queue
          </li>
          <li className="ml-6">Track visited pages with hashmap</li>
          <li>Regex to any &apos;emailto:&apos;</li>
          <li>Recursively jump up parent nodes to collect context</li>
          <li>Send context to an LLM and have it identify name and title</li>
          <li>
            <span>
              Regex the output (this was before I learned about{" "}
              <Link
                href={"https://github.com/dottxt-ai/outlines"}
                target="_blank"
                className={"underline"}
              >
                structured generation
              </Link>
              )
            </span>
          </li>
        </ul>
      </div>
    </ProjectPage>
  );
}

export default Patense;
