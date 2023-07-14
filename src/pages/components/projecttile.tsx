import StackDisplay from "./stackdisplay";
import Image from "next/image";
import Link from "next/link";

interface ProtjectTileProps {
  title: string;
  description: string;
  picture?: string;
  url?: string;
  repo?: string;
  stars?: number;
  forks?: number;
  stack?: string;
}

export function ProjectTile({
  title,
  description,
  picture,
  url,
  repo,
  stars,
  forks,
  stack,
}: ProtjectTileProps) {
  return (
    <div className="m-1 w-full max-w-xl rounded-2xl border border-transparent bg-slate-600 px-5 py-3 transition duration-300 hover:border-white hover:bg-slate-500">
      <div className="flex flex-col items-center sm:flex-row">
        {picture && (
          <Image src={`/${picture}`} alt={title} width={300} height={200} />
        )}
        <div className="ml-3">
          <div className="text-xl font-semibold">{title}</div>
          <div>{description}</div>
          <div className="mt-1 flex flex-row items-center">
            {repo && (
              <div className="mr-1">
                <Link legacyBehavior href={repo}>
                <a 
                target="_blank"
                rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-2x text-white transition duration-300 hover:text-red-500"></i>
                </a>
                </Link>
              </div>
            )}
            {stars && (
              <div className="transtion flex flex-row items-center duration-300 hover:text-orange-300">
                <div className="px-1 font-semibold">{stars}</div>
                <i className="fas fa-star"></i>
              </div>
            )}
            {forks && (
              <div className="flex flex-row items-center transition duration-300 hover:text-blue-500">
                <div className="px-1 font-semibold">{forks}</div>
                <i className="fas fa-code-branch"></i>
              </div>
            )}
            {url && (
              <Link href={url} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-blue-400"
              >
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                />
                <i className="fas fa-globe fa-2x"></i>
              </a>
              </Link>
            )}
            {stack && (
              <div className="ml-1">
                <StackDisplay stack={stack} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;
