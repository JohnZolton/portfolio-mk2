import Image from "next/image";
import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";
import { Button, buttonVariants } from "../../src/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import StackDisplay from "./components/stackdisplay";

function SocraticSensei() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-8 text-center text-5xl font-bold text-gray-900">
          Socratic Sensei
        </h1>
        <div className="mb-4 flex items-center justify-center">
          <div className="relative w-full overflow-hidden bg-black pb-[56.25%]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://www.youtube.com/embed/aGcyp8uzmAI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="mb-6 flex flex-row justify-center gap-4">
          <Link
            href={"https://socraticsensei.xyz"}
            target="_blank"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            See it live!
          </Link>
          <Link
            href={"https://github.com/JohnZolton/socraticsensei"}
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
            <StackDisplay stack="Next.js, TypeScript, React, tRPC, Stripe, AWS Lambda, Google Gemini" />
          </div>
        </div>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">The Problem</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Law student&apos;s entire careers depend on their ability to
              master issue-spotting exams.
            </p>
            <p>
              Law school courses barely prepare you for this and rely on
              outdated, inefficient study techniques (if any at all).
            </p>
          </div>
        </section>
        <div className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-6 shadow-sm">
          <p className="mb-4 text-xl font-semibold text-blue-700">
            Socratic Sensei fixes this.
          </p>
          <p className="text-blue-600">
            Socratic Sensei is a legal education platform that provides custom
            issue-spotting essays tailored to each specific student&apos;s
            current study needs, powered by AI and spaced repetition algorithms
            (like Anki), Socratic Sensei provides the most efficient targeted
            study tools for law students.
          </p>
        </div>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Law School TL/DR
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Law students spend the entire semester reading and then cram for
              two weeks preparing for a special kind of essay - an &quot;Issue
              Spotter&quot;. The goal of these essays is to quickly identify
              every possible legal issue (i.e., lawsuit opportunity) you can.
              You don&apos;t need to analyze it deeply, just identify the issue,
              state the rule and call out any relevant facts.
            </p>
            <p>
              In the old days, you&apos;d rely on upper classmen recommendations
              on what practice essays to do. Now you can train on essays
              tailored specifically to your own weaknesses and knowledge gaps.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            How it works
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>Upload your course notes.</p>
            <p>
              Our AI will parse your notes into actionable flashcards of key
              knowledge bits.
            </p>
            <p>
              Then our AI pulls your most-due notes and builds a custom
              issue-spotting essay prompt targeting those key knowledge bits
            </p>
            <p>
              It comes with a built-in Socratic mentor during the essay portion,
              designed to nudge you in the right direction while not spoiling
              the prompt.
            </p>
            <p>
              Get instant feedback. Our AI grades your essay against the notes
              used to build it, gives you instant feedback, and updates the
              notecards accordingly so you spend time studying what needs to be
              studied and not issues you&apos;ve already mastered. &quot;Back in
              my day&quot; I had to wait MONTHS to get ANY feedback on my
              essays. Well gone are those days - be the change you want to see
              or whatever.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Benefits</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Personalized Learning:
                </span>{" "}
                Custom essays tailored to your specific knowledge gaps
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Immediate Feedback:
                </span>{" "}
                Get instant grading and analysis instead of waiting weeks
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Efficient Study:
                </span>{" "}
                Focus on what you need to learn, not what you&apos;ve already
                mastered
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  AI Guidance:
                </span>{" "}
                Built-in Socratic mentor to help guide your thinking
              </div>
            </li>
          </ul>
        </section>
      </div>
    </ProjectPage>
  );
}

export default SocraticSensei;
