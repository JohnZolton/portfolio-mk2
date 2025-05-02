import Image from "next/image";
import NavBar from "./components/navbar";
import ProjectPage from "./components/projectpage";
import { Project } from "./components/projectpage";
import { Button, buttonVariants } from "../../src/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";
import StackDisplay from "./components/stackdisplay";

function MyFitnessBuddy() {
  return (
    <ProjectPage>
      <NavBar></NavBar>
      <div className="container mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-8 text-center text-5xl font-bold text-gray-900">
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
        <div className="mb-6 flex flex-row justify-center gap-4">
          <Link
            href={"https://github.com/JohnZolton/fitness-production"}
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
            <StackDisplay stack="Django, Postgres, Stripe, USDA API, Garmin API Wrapper" />
          </div>
        </div>

        <div className="mb-8 rounded-lg border border-blue-100 bg-blue-50 p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold text-blue-700">
            All-in-One Health Monitoring Website
          </h3>
          <p className="text-blue-600">
            This was my first &apos;real&apos; web app and it&apos;s kind of
            cringe but it&apos;s staying up here for posterity.
          </p>
        </div>
        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Key Features
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>Automatic syncing with smartwatch data</div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>Querying nutrition data from the USDA food database</div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>Customizable nutrition goals</div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-blue-500">•</span>
              <div>Auto-repeating meals</div>
            </li>
          </ul>
        </section>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Smart Search Bar
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Our search bar uses JavaScript to fetch data results for the
              desired food, featuring an autocomplete dropdown menu.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Daily Log and Nutrition Tracking
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              After performing a search, users can add any resulting food and
              quantity to their daily log. With edit and remove buttons
              available for corrections or changes. Daily totals and progress
              bars for nutrition data are updated with each change in the food
              log.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Settings and Syncing
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Users can update their macronutrient targets (protein, carbs,
              fats), fiber, and enamble syncing step counts from their Garmin
              smartwatch. Although Garmin only provides API keys to companies,
              we leveraged an API wrapper, Python: Garmin Connect, to request
              data for user accounts. Users can manually sync their step data or
              enable automatic syncing, which collects the previous day&apos;s
              step data.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Visual Data Representation
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Daily total steps, body weight, and calories are displayed on
              three interactive charts using Chart.js, providing users with a
              clear and engaging view of their health progress.
            </p>
          </div>
        </section>
      </div>
    </ProjectPage>
  );
}

export default MyFitnessBuddy;
