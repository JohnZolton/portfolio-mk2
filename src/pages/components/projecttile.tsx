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
            {repo && (
              <div className="mr-1">
                <Link legacyBehavior href={repo}>
                  <a target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x text-slate-200 transition duration-300 hover:text-red-500"></i>
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
                  />{" "}
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

interface ContentWrapperProps {
  page?: string;
  children: React.ReactNode;
}

const ContentWrapper = ({ page, children }: ContentWrapperProps) => {
  if (page) {
    return (
      <Link legacyBehavior href={page}>
        <a className="group">{children}</a>
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
