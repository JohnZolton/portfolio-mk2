import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";
import NavBar from "./components/navbar";
import PageLayout from "./components/pagelayout";
import HeroSection from "./components/hero";
import AboutSection from "./components/about";

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
      </PageLayout>
    </>
  );
}
