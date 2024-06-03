import Image from "next/image";
import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";
import { Button, buttonVariants } from "../../src/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

function MyFitnessBuddy() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <div className="container mx-auto max-w-3xl p-8">
        <h1 className="mb-6 text-center text-6xl font-bold">
          My Fitness Buddy
        </h1>
        <div className="mb-4 flex items-center justify-center">
          <Image
            className="h-full w-full object-contain"
            src={`/fitnesspal2.png`}
            alt={"myfitnessbuddy.png"}
            width={1427}
            height={682}
          />
        </div>
        <div className="mx-auto my-2 flex max-w-xs flex-row justify-center px-10">
          <Link
            href={"https://github.com/JohnZolton/fitness-production"}
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            View Code <Github />
          </Link>
        </div>
        <h1 className="mb-4 text-center text-4xl font-bold">
          All-in-One Health Monitoring Website
        </h1>
        <h2 className="mb-2 text-2xl font-semibold">Key Features</h2>
        <ul className="mb-4 list-inside list-disc">
          <li>Automatic syncing with smartwatch health data</li>
          <li>Querying nutrition data from the USDA food database</li>
          <li>Customizable nutrition goals</li>
        </ul>

        <h2 className="mb-2 text-2xl font-semibold">Smart Search Bar</h2>
        <p className="mb-4">
          Our search bar uses JavaScript to fetch data results for the desired
          food, featuring an autocomplete dropdown menu.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">
          Daily Log and Nutrition Tracking
        </h2>
        <p className="mb-4">
          After performing a search, users can add any resulting food and
          quantity to their daily log. With edit and remove buttons available
          for corrections or changes. Daily totals and progress bars for
          nutrition data are updated with each change in the food log.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">Settings and Syncing</h2>
        <p className="mb-4">
          Users can update their macronutrient targets (protein, carbs, fats),
          fiber, and enamble syncing step counts from their Garmin smartwatch.
          Although Garmin only provides API keys to companies, we leveraged an
          API wrapper, Python: Garmin Connect, to request data for user
          accounts. Users can manually sync their step data or enable automatic
          syncing, which collects the previous day&apos;s step data.
        </p>

        <h2 className="mb-2 text-2xl font-semibold">
          Visual Data Representation
        </h2>
        <p className="mb-4">
          Daily total steps, body weight, and calories are displayed on three
          interactive charts using Chart.js, providing users with a clear and
          engaging view of their health progress.
        </p>
      </div>
    </ProjectPage>
  );
}

export default MyFitnessBuddy;
