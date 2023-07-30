import StackDisplay from "./stackdisplay";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";


interface ProtjectTileProps {
  title: string;
  description: string;
  picture?: string;
  url?: string;
  repo?: string;
  stars?: number;
  forks?: number;
  stack?: string;
  hovered?: string;
  page?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ProjectDisplay({
  title,
  description,
  picture,
  url,
  repo,
  stars,
  forks,
  page,
  stack,
  hovered,
  onMouseEnter,
  onMouseLeave,
}: ProtjectTileProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`my-1 w-full rounded-2xl border border-transparent bg-cyan-950  px-3 py-1 transition duration-300 ${
        hovered ? (hovered === title ? "border-white" : "opacity-50") : ""
      }`}
    >
      <div className="flex flex-col items-center sm:flex-row">
        {picture && (
          <div
            className={`h-28 w-44    ${
              hovered === title ? "  brightness-125   " : ""
            }`}
          >
            <Image
              className="h-full w-full object-fill"
              src={`/${picture}`}
              alt={title}
              width={300}
              height={200}
            />
          </div>
        )}
        <div className="ml-3 w-full">
          <div className="text-xl font-semibold">
            {page ? (
              <div className="flex flex-row items-center">
                <div className="group-hover:underline">{title}</div>
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
                    clipRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
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
            {(stars || forks) &&
            (<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>)
            }
            {stars && (
              <div className="transtion flex flex-row items-center duration-300 hover:text-orange-300">
                <div className="px-1 font-semibold">{stars}</div>
                <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={['fab', 'github']} className="w-4 h-4  opacity-0"/>
              </div>
            )}
            {forks && (
              <div className="flex flex-row items-center transition duration-300 hover:text-blue-500">
                <div className="px-1 font-semibold">{forks}</div>
                <FontAwesomeIcon icon={faCodeBranch} />
                        <FontAwesomeIcon icon={['fab', 'github']} className="w-4 h-4  opacity-0"/>
              </div>
            )}
            {stack && (
              <div className="">
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

interface ContentWrapperProps {
  page?: string;
  children: React.ReactNode;
}

const ContentWrapper = ({ page, children }: ContentWrapperProps) => {
  if (page) {
    return (
      <Link legacyBehavior href={page} className="">
        <div className="group hover:cursor-pointer">{children}</div>
      </Link>
    );
  }

  return <>{children}</>;
};

function ProjectTile({
  title,
  description,
  picture,
  url,
  repo,
  stars,
  forks,
  stack,
  hovered,
  page,
  onMouseEnter,
  onMouseLeave,
}: ProtjectTileProps) {
  return (
    <ContentWrapper page={page}>
      <ProjectDisplay
        title={title}
        description={description}
        picture={picture}
        url={url}
        repo={repo}
        stars={stars}
        forks={forks}
        stack={stack}
        hovered={hovered}
        page={page}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </ContentWrapper>
  );
}
