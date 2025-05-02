import Image from "next/image";
import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";
import { Button, buttonVariants } from "../../src/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import StackDisplay from "./components/stackdisplay";

function Liftr() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-8 text-center text-5xl font-bold text-gray-900">
          Liftr
        </h1>
        <div className="mb-4 flex items-center justify-center">
          <div className="relative w-full overflow-hidden bg-black pb-[56.25%]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src={"https://youtube.com/embed/aj75CMgnoxI"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="mb-6 flex flex-row justify-center gap-4">
          <Link
            href={"https://liftr.club"}
            target="_blank"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            See it live!
          </Link>
          <Link
            href={"https://github.com/JohnZolton/lyfter"}
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
            <StackDisplay stack="Nostr, Next.js, TypeScript, React, tRPC, Prisma" />
          </div>
        </div>

        <div className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-6 shadow-sm">
          <p className="text-blue-600">
            Liftr is a workout tracking and coaching application that uses
            biofeedback to tailor workout planning (weight, reps and sets
            progression) for bodybuilding. Inspired by the match-or-beat
            algorithm from Renaissance Periodization and Menno Hensellmans&apos;
            deload philosophy.
          </p>
        </div>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            The Algorithm
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Workouts are planned based on the match-or-beat system. It
              compares your current workout performance to the previous
              week&apos;s. Tracking performance based on weight, reps, and sets.
              If performance improves, you keep pushing forward. If performance
              declines, Liftr alerts you to take a deload for that muscle group.
              This is a key difference from the Renaissance Periodization app,
              they schedule week or half-week deloads. But what if only your
              biceps are overreached? It&apos;d be a waste of time to deload
              every muscle if only one is toasted. Thats why I chose to do
              muscle specific deloads triggered by a decrease in performance.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Features</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Workout Management:
                </span>{" "}
                Easily create, plan, edit, and log your workouts.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Progress Monitoring:
                </span>{" "}
                Keep track of your progress and receive alerts when performance
                dips.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Missed Workouts Handling:
                </span>{" "}
                Seamlessly handle missed workouts and get back on track without
                hassle.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Customization:
                </span>{" "}
                Choose from premade plans or create your own.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Target Display:
                </span>{" "}
                View target weight and reps for each exercise.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Add & Remove:
                </span>{" "}
                Effortlessly add and remove sets, exercises, and workouts to fit
                your routine.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">
                  Sign in with Nostr:
                </span>{" "}
                Built a custom auth solution using Nostr signed-messages to
                verify log in and JWTs for api auth.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>
                <span className="font-semibold text-gray-700">Cardio:</span> I
                caved and added cardio to my bodybuilding app. I had to run IRL
                and realized how out of shape I was so now I do cardio.
              </div>
            </li>
          </ul>
        </section>
        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            State Management
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Initially this was built purely with useState. I was young and
              naive and just trudged through the prop-drilling. I didn&apos;t
              learn about other state management solutions until I fell for the
              rust frontend-backend meme. After learning how miserable front-end
              rust is (at least I learned about Yewdux) I came back to the
              original TS implementation and refactored it with Zustand. Now I
              can add features without wanting to end it all.
            </p>
          </div>
        </section>
      </div>
    </ProjectPage>
  );
}

export default Liftr;
