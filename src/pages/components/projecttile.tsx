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
      className={`my-4 w-full rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md ${
        hovered
          ? hovered === title
            ? "border-blue-200 shadow-md"
            : "opacity-70"
          : ""
      }`}
    >
      <div className="flex flex-col items-center sm:flex-row">
        {picture && (
          <div
            className={`h-28 w-44 bg-black  ${
              hovered === title ? "  brightness-125   " : ""
            }`}
          >
            <Image
              className="h-full w-full object-contain"
              src={`/${picture}`}
              alt={title}
              width={300}
              height={200}
            />
          </div>
        )}
        <div className="ml-3 w-full">
          <div className="text-xl font-bold text-gray-900">
            {page || url || repo ? (
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
            <div className="text-sm text-gray-600">{description}</div>
          </div>
          <div className="mt-3 flex flex-row items-center">
            {(stars || forks) && (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
            )}
            {stars && (
              <div className="transtion flex flex-row items-center duration-300 hover:text-orange-300">
                <div className="px-1 font-semibold">{stars}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            )}
            {forks && (
              <div className="flex flex-row items-center transition duration-300 hover:text-blue-500">
                <div className="px-1 font-semibold">{forks}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-git-fork"
                >
                  <circle cx="12" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
                  <path d="M12 12v3" />
                </svg>
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
  url?: string;
  repo?: string;
  children: React.ReactNode;
}

const ContentWrapper = ({ page, repo, url, children }: ContentWrapperProps) => {
  if (page) {
    return (
      <Link href={page} className="">
        <div className="group hover:cursor-pointer">{children}</div>
      </Link>
    );
  }
  if (!page) {
    if (url) {
      return (
        <Link legacyBehavior href={url} className="">
          <a target="_blank" rel="noopener noreferrer">
            <div className="group hover:cursor-pointer">{children}</div>
          </a>
        </Link>
      );
    }
    if (repo) {
      return (
        <Link legacyBehavior href={repo} className="">
          <a target="_blank" rel="noopener noreferrer">
            <div className="group hover:cursor-pointer">{children}</div>
          </a>
        </Link>
      );
    }
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
    <ContentWrapper page={page} repo={repo} url={url}>
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
