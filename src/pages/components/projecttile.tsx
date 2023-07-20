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
    <div className="m-1 w-full max-w-xl rounded-2xl border border-transparent bg-cyan-950  px-3 py-1 transition duration-300 hover:border-white hover:bg-cyan-900">
      <div className="flex flex-col items-center sm:flex-row">
        {picture && (
          <Image
            className="h-28 w-36 object-cover"
            src={`/${picture}`}
            alt={title}
            width={300}
            height={200}
          />
        )}
        <div className="ml-3">
          <div className="text-xl font-semibold">
            {url ? (
              <Link legacyBehavior href={url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center hover:underline"
                >
                  <div>{title}</div>
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    width="1em"
                    className="transform transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-[-1px] group-hover:scale-125"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </Link>
            ) : (
              <div className="flex items-center">
                <div>{title}</div>
              </div>
            )}
          </div>
          <div>
            <div>{description}</div>
          </div>
          <div className="mt-1 flex flex-row items-center">
            {repo && (
              <div className="mr-1">
                <Link legacyBehavior href={repo}>
                  <a target="_blank" rel="noopener noreferrer">
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
