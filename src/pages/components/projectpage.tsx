import React, { Children, PropsWithChildren, useEffect } from "react";

interface ProjectPageProps {
  title: string;
  youtube?: string;
  description: string;
  url?: string,
}
export function Project({ title, description, youtube, url }: ProjectPageProps) {
  return (
    <div>
      {youtube && <div>{youtube}</div>}
      <div className="font-semibold text-3xl">{title}</div>
      {url && <div>Try it live!</div>}
      <div>{description}</div>
    </div>
  );
}

export default function ProjectPage(props: PropsWithChildren) {
  return (
    <main className="max-w-screen mx-auto flex min-h-screen flex-col items-center">
      {props.children}
    </main>
  );
}
