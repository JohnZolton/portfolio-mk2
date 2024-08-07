import Image from "next/image";
import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";
import { Button, buttonVariants } from "../../src/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

function Liftr() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <div className="container mx-auto max-w-3xl p-8">
        <h1 className="mb-6 text-center text-6xl font-bold">Liftr</h1>
        <div className="mb-4 flex items-center justify-center">
          <video width="100%" height="auto" controls muted>
            <source src={"/lifterdemo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mx-auto my-2 flex max-w-xs flex-row justify-between px-10">
          <Link
            href={"https://liftr.club"}
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            See it live!
          </Link>
          <Link
            href={"https://github.com/JohnZolton/lyfter"}
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            View Code <Github />
          </Link>
        </div>
        <section className="mb-8">
          <h2 className="my-4 text-2xl font-semibold">Welcome to Liftr</h2>
          <p className="text-lg leading-relaxed">
            Liftr is a full-fledged workout tracking and coaching application
            that uses biofeedback to tailor weight, reps and sets programming
            for bodybuilding. Inspired by the match-or-beat algorithm from
            Renaissance Periodization and Menno Hensellmans&apos; deload
            philosophy, Liftr ensures your workout progression is always on
            point.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>
          <p className="mb-2 text-lg leading-relaxed">
            Liftr is a T3 Stack project built off create-t3-app, with the
            following:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Next.js:</strong> The robust React framework for
              server-rendered applications.
            </li>
            <li>
              <strong>React:</strong> For building dynamic and responsive user
              interfaces.
            </li>
            <li>
              <strong>TypeScript:</strong> Ensuring type safety and scalability
              in our codebase.
            </li>
            <li>
              <strong>tRPC:</strong> An end-to-end typesafe API layer for
              seamless data handling.
            </li>
            <li>
              <strong>Nostr</strong> Custom log-in flow to utilize Nostr Pubkeys
              identities for user authentication.
            </li>
            <li>
              <strong>Prisma:</strong> Our open-source database ORM for managing
              complex data structures.
            </li>
            <li>
              <strong>Tailwind:</strong> A utility-first CSS framework for
              crafting beautiful interfaces.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">The Algorithm</h2>
          <p className="text-lg leading-relaxed">
            The core algorith is the match-or-beat system, it compares your
            current workout performance to the previous week&apos;s. Tracking
            performance based on weight, reps, and sets. If performance
            improves, you keep pushing forward. If performance declines, Liftr
            alerts you to take a deload for that muscle group. This is a key
            difference from the Renaissance Periodization app, they schedule
            week or half-week deloads. But what if only your biceps are
            overreached? It&apos;d be a waste of time to deload every muscle if
            only one is toasted. Thats why we do muscle specific deloads
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
              was so now we do cardio.
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
