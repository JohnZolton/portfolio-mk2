import NavBar from "./components/navbar";
import PageLayout from "./components/pagelayout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectPage() {

  return (
    <PageLayout>
      <NavBar></NavBar>
      <div className="flex flex-row flex-wrap justify-center">
      Project Archive
      <div className="bg-gradient-to-r from-cyan-950 to-gray-950 p-6 rounded-md shadow-lg">
  <table className="table-auto w-full text-slate-200">
    <thead>
      <tr>
        <th className="px-4 py-2 border-b-2 border-slate-200 text-left text-sm leading-4 tracking-wider">Title</th>
        <th className="px-4 py-2 border-b-2 border-slate-200 text-left text-sm leading-4 tracking-wider">Description</th>
        <th className="px-4 py-2 border-b-2 border-slate-200 text-left text-sm leading-4 tracking-wider">Code</th>
        <th className="px-4 py-2 border-b-2 border-slate-200 text-left text-sm leading-4 tracking-wider">Date</th>
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
    title: string,
    description: string,
    github: string,
    date: number,
}

function TableRow({title, description, github, date}: ProjectInfo){
    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>
                <Link legacyBehavior href={github}>
                <a 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition duration-300 hover:text-red-500">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                </Link>
                </td>
            <td>{date}</td>
        </tr>
    )
}

const projects: ProjectInfo[] = [
    {
        title: "portfolio-mk2",
        description: "updated, modern portfolio with react and next.js",
        github: "https://github.com/JohnZolton/portfolio-mk2",
        date: 2023
},
    {
        title: "Lyfter",
        description: "workout tracker web app",
        github: "https://github.com/JohnZolton/lyfter",
        date: 2023
},
    {
        title: "pdf-2-mp3",
        description: "convert long text and pdf files to mp3",
        github: "https://github.com/JohnZolton/pdf-2-mp3-two",
        date: 2023
},
    {
        title: "portfolio-mk1",
        description: "portfolio with vanilla javascript, html, css, art by stablediffusion",
        github: "https://github.com/JohnZolton/johnzolton.github.io",
        date: 2023
},
    {
        title: "freebay",
        description: "auction website",
        github: "https://github.com/JohnZolton/freebay",
        date: 2023
},
    {
        title: "crypto-tracker",
        description: "Privacy-centered SPA portfolio tracker using coingecko and local storage",
        github: "https://github.com/JohnZolton/crypto-tracker",
        date: 2023
},
    {
        title: "myfitnessbuddy",
        description: "diet and acitivity tracking web-app integrating smart watch data and USDA api",
        github: "https://github.com/JohnZolton/fitness",
        date: 2023
},
    {
        title: "flobby bird",
        description: "flappy bird browser game clone",
        github: "https://github.com/JohnZolton/flobby-bird",
        date: 2023
},
    {
        title: "CS50-Web",
        description: "Web Programming with Python and JavaScript",
        github: "https://github.com/JohnZolton/CS50-Web",
        date: 2023
},
    {
        title: "Advent of Code 2022",
        description: "AoC 2022 with Python",
        github: "https://github.com/JohnZolton/Adventofcode2022",
        date: 2022
},
    {
        title: "Scribe",
        description: "Real time speech to text with Python and Whisper",
        github: "https://github.com/JohnZolton/scribe",
        date: 2022
},
    {
        title: "Stanford Algorithms Specialization",
        description: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms by Stanford University ",
        github: "https://github.com/JohnZolton/Stanford_Algos_Specialization",
        date: 2022
},
    {
        title: "flashcards",
        description: "Flashcard desktop app with Python and tkinter",
        github: "https://github.com/JohnZolton/flashcards",
        date: 2022
},
    {
        title: "Harvard CS50 - Python",
        description: "Intro to Programming with Python",
        github: "https://github.com/JohnZolton/CS50_Python",
        date: 2022
},
    {
        title: "Harvard CS50",
        description: "Intro to Computer Science",
        github: "https://github.com/JohnZolton/Stanford_Algos_Specialization",
        date: 2022
},
    {
        title: "Sentiment Analysis",
        description: "Analyze sentiment analysis of tweets",
        github: "https://github.com/JohnZolton/Sentiment-analysis",
        date: 2022
},

]