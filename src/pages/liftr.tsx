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
      <div className="container mx-auto max-w-3xl p-8 text-xl">
        <h1 className="mb-6 text-center text-6xl font-bold">Liftr</h1>
        <div className="mb-4 flex items-center justify-center">
          <video width="100%" height="auto" controls muted>
            <source src={"/lifterdemo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mx-auto my-2 flex max-w-xs flex-row gap-x-8 px-10">
          <Link
            href={"https://liftr.club"}
            target="_blank"
            className={buttonVariants({ variant: "default" })}
          >
            See it live!
          </Link>
          <Link
            href={"https://github.com/JohnZolton/lyfter"}
            target="_blank"
            className={buttonVariants({ variant: "default" })}
          >
            View Code <Github className="ml-2" />
          </Link>
        </div>
        <p className="my-6 flex flex-row">
          Tech Stack:{" "}
          <StackDisplay stack="Nostr, Next.js, TypeScript, React, tRPC, Prisma" />
        </p>
        <section className="mb-8">
          <h2 className="my-4 text-2xl font-semibold">Welcome to Liftr</h2>
          <p className="text-lg leading-relaxed">
            Liftr is a workout tracking and coaching application that uses
            biofeedback to tailor workout planning (weight, reps and sets
            progression) for bodybuilding. Inspired by the match-or-beat
            algorithm from Renaissance Periodization and Menno Hensellmans&apos;
            deload philosophy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">The Algorithm</h2>
          <p className="text-lg leading-relaxed">
            Workouts are planned based on the match-or-beat system. It compares
            your current workout performance to the previous week&apos;s.
            Tracking performance based on weight, reps, and sets. If performance
            improves, you keep pushing forward. If performance declines, Liftr
            alerts you to take a deload for that muscle group. This is a key
            difference from the Renaissance Periodization app, they schedule
            week or half-week deloads. But what if only your biceps are
            overreached? It&apos;d be a waste of time to deload every muscle if
            only one is toasted. Thats why I chose to do muscle specific deloads
            triggered by a decrease in performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Features</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Workout Management:</strong> Easily create, plan, edit,
              and log your workouts.
            </li>
            <li>
              <strong>Progress Monitoring:</strong> Keep track of your progress
              and receive alerts when performance dips.
            </li>
            <li>
              <strong>Missed Workouts Handling:</strong> Seamlessly handle
              missed workouts and get back on track without hassle.
            </li>
            <li>
              <strong>Customization:</strong> Choose from premade plans or
              create your own.
            </li>
            <li>
              <strong>Target Display:</strong> View target weight and reps for
              each exercise.
            </li>
            <li>
              <strong>Add & Remove:</strong> Effortlessly add and remove sets,
              exercises, and workouts to fit your routine.
            </li>
            <li>
              <strong>Sign in with Nostr:</strong> Built a custom auth solution
              using Nostr signed-messages to verify log in and JWTs for api
              auth.
            </li>
            <li>
              <strong>Cardio:</strong> I caved and added cardio to my
              bodybuilding app. I had to run IRL and realized how out of shape I
              was so now I do cardio.
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">State Management</h2>
          <p className="text-lg leading-relaxed">
            Initially this was built purely with useState. I was young and naive
            and just trudged through the prop-drilling. I didn&apos;t learn
            about other state management solutions until I fell for the rust
            frontend-backend meme. After learning how miserable front-end rust
            is (at least I learned about Yewdux) I came back to the original TS
            implementation and refactored it with Zustand. Now I can add
            features without wanting to end it all.
          </p>
        </section>
      </div>
    </ProjectPage>
  );
}

export default Liftr;
