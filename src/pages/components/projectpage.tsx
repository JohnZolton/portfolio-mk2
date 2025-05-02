import React, { Children, PropsWithChildren, useEffect } from "react";
import Link from "next/link";
import YouTube from "react-youtube";

interface ProjectPageProps {
  title: string;
  youtube?: string;
  description?: string;
  url?: string;
  paragraphs: string[];
  repo?: string;
}

export default function ProjectPage(props: PropsWithChildren) {
  return (
    <main className="max-w-screen mx-auto flex min-h-screen flex-col items-center bg-gray-50">
      {props.children}
    </main>
  );
}

export function Project({
  title,
  repo,
  description,
  youtube,
  url,
  paragraphs,
}: ProjectPageProps) {
  const options = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <div className="m-3 text-6xl font-semibold">{title}</div>

      {youtube && (
        <div className="flex items-center">
          <YouTube videoId={youtube} opts={options} className="h-full w-4/5" />
        </div>
      )}
      <div className="flex flex-row items-center gap-2">
        {url && (
          <div className="m-2">
            <Link href={url} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <button className="rounded-lg bg-black px-3 py-2 font-semibold text-white ">
                  Try it live!
                </button>
              </a>
            </Link>
          </div>
        )}
        {repo && (
          <Link legacyBehavior href="">
            <a
              href={repo}
              rel="noopener noreferrer"
              target="_blank"
              className=""
            >
              <button className="flex flex-row items-center gap-2 rounded-lg bg-slate-700 px-3 py-2 font-semibold text-white shadow-md hover:bg-slate-600 focus:outline-none focus:ring focus:ring-blue-200">
                View Source
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </a>
          </Link>
        )}
      </div>
      <div className="w-1/2 pb-10">
        {paragraphs &&
          paragraphs.map((paragraph, index) => (
            <div key={index} className="my-2">
              {paragraph}
            </div>
          ))}
      </div>
    </>
  );
}
