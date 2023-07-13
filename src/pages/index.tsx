import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import NavBar from "./components/navbar";
import PageLayout from "./components/pagelayout";
import HeroSection from "./components/hero";
import AboutSection from "./components/about";
import ProjectTile from "./components/projecttile";
import CourseTile from "./components/coursetile";
import CourseList from "./components/courselist";
import TechList from "./components/techstack";

export default function Home() {
  return (
    <>
      <Head>
        <title>John Zolton</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <NavBar />
        <div className="m-5 flex flex-row">
          <HeroSection />
          <AboutSection />
        </div>
        <div className="flex flex-col">
          <ProjectTile
          title="Lyfter"
          description="Workout and exercise tracker with built in performance monitoring and program adjustment"
          picture="pic here"
          url="https://lyfter.vercel.app/"
          repo="https://github.com/JohnZolton/lyfter"
          stack="Next.js, TypeScript, React, tRPC, Prisma, Tailwind, Clerk"
          />
          <ProjectTile
          title="MyFitnessBuddy"
          description="Nutrition and activity tracker packed with quality of life features like automatic step tracking and meal planning"
          picture="pic here"
          repo="https://github.com/JohnZolton/fitness"
          url="https://nutritiontracker.bio/tracking/"
          stack="Django, Postgres"
          />
          <ProjectTile
          title="FreeBay"
          description="Online Auction platform"
          picture="pic here"
          repo="https://github.com/JohnZolton/freebay2"
          url="freebay.live"
          stack="Django, Postgres, AWS S3, Railway"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-2xl">Smaller Projects</div>
          <ProjectTile
          title="Scribe"
          description="Real time voice-to-text transcription using open source AI models"
          repo="https://github.com/JohnZolton/scribe"
          stars={39}
          forks={13}
          />
          <ProjectTile
          title="AudioBooker"
          description="PDF and text file to audio converter using the open source AI model Bark"
          repo="https://github.com/JohnZolton/pdf-2-mp3"
          />
          <ProjectTile
          title="Floppy Bird"
          description="A modern take on a timeless classic"
          repo="https://github.com/JohnZolton/floppy-bird"
          />
        </div>
        <CourseList/>
        <TechList />
      </PageLayout>
    </>
  );
}
