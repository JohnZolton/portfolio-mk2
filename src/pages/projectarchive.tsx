import NavBar from "./components/navbar";
import PageLayout from "./components/pagelayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectPage() {
  return (
    <PageLayout>
      <NavBar></NavBar>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center rounded-lg  p-8 text-center">
        <h1 className="mb-6 text-4xl font-semibold text-slate-200">
          Project Archive
        </h1>
        <div className="overflow-x-auto rounded-lg bg-cyan-950 shadow-lg">
          <table className="min-w-full text-slate-200">
            <thead>
              <tr className="text-lg leading-normal text-slate-200">
                <th className="border-b-2 border-slate-200 px-6 py-3 text-center">
                  Title
                </th>
                <th className="border-b-2 border-slate-200 px-6 py-3 text-center">
                  Description
                </th>
                <th className="border-b-2 border-slate-200 px-6 py-3 text-center">
                  Code
                </th>
                <th className="border-b-2 border-slate-200 px-6 py-3 text-center">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, i) => (
                <TableRow
                  key={i}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  date={project.date}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProjectPage;

interface ProjectInfo {
  title: string;
  description: string;
  github: string;
  date: number;
}

function TableRow({ title, description, github, date }: ProjectInfo) {
  return (
    <tr className="border-b border-slate-200 text-left text-base text-slate-200 hover:bg-slate-700">
      <td className="px-6 py-4   ">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4 text-center   ">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition duration-300 hover:text-red-500"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </td>
      <td className="px-6 py-4">{date}</td>
    </tr>
  );
}

const projects: ProjectInfo[] = [
  {
    title: "Portfolio-mk2",
    description: "Updated portfolio with react and next.js",
    github: "https://github.com/JohnZolton/portfolio-mk2",
    date: 2023,
  },
  {
    title: "Lyfter",
    description: "Workout tracker web app",
    github: "https://github.com/JohnZolton/lyfter",
    date: 2023,
  },
  {
    title: "Pdf-2-mp3",
    description: "Convert long text and pdf files to mp3",
    github: "https://github.com/JohnZolton/pdf-2-mp3-two",
    date: 2023,
  },
  {
    title: "Portfolio-mk1",
    description:
      "Portfolio with vanilla javascript, html, css, art by stablediffusion",
    github: "https://github.com/JohnZolton/johnzolton.github.io",
    date: 2023,
  },
  {
    title: "Freebay",
    description: "Auction website",
    github: "https://github.com/JohnZolton/freebay",
    date: 2023,
  },
  {
    title: "Crypto-tracker",
    description:
      "Privacy-centered SPA portfolio tracker using coingecko and local storage",
    github: "https://github.com/JohnZolton/crypto-tracker",
    date: 2023,
  },
  {
    title: "Myfitnessbuddy",
    description:
      "Diet and acitivity tracking web-app integrating smart watch data and USDA api",
    github: "https://github.com/JohnZolton/fitness",
    date: 2023,
  },
  {
    title: "Floppy bird",
    description: "Flappy bird browser game clone",
    github: "https://github.com/JohnZolton/flobby-bird",
    date: 2023,
  },
  {
    title: "CS50-Web",
    description: "Web Programming with Python and JavaScript",
    github: "https://github.com/JohnZolton/CS50-Web",
    date: 2023,
  },
  {
    title: "Advent of Code 2022",
    description: "AoC 2022 with Python",
    github: "https://github.com/JohnZolton/Adventofcode2022",
    date: 2022,
  },
  {
    title: "Scribe",
    description: "Real time speech to text with Python and Whisper",
    github: "https://github.com/JohnZolton/scribe",
    date: 2022,
  },
  {
    title: "Stanford Algorithms Specialization",
    description:
      "Divide and Conquer, Sorting and Searching, and Randomized Algorithms by Stanford University ",
    github: "https://github.com/JohnZolton/Stanford_Algos_Specialization",
    date: 2022,
  },
  {
    title: "Flashcards",
    description: "Flashcard desktop app with Python and tkinter",
    github: "https://github.com/JohnZolton/flashcards",
    date: 2022,
  },
  {
    title: "Harvard CS50 - Python",
    description: "Intro to Programming with Python",
    github: "https://github.com/JohnZolton/CS50_Python",
    date: 2022,
  },
  {
    title: "Harvard CS50",
    description: "Intro to Computer Science",
    github: "https://github.com/JohnZolton/Stanford_Algos_Specialization",
    date: 2022,
  },
  {
    title: "Sentiment Analysis",
    description: "Analyze sentiment of tweets with python",
    github: "https://github.com/JohnZolton/Sentiment-analysis",
    date: 2022,
  },
];
