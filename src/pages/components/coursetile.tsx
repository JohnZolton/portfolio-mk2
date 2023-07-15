interface CourseTileProps {
  title: string;
  description?: string;
  institution: string;
  repo?: string;
}

export function CourseTile({
  title,
  description,
  repo,
  institution,
}: CourseTileProps) {
  return (
    <div className="m-1 max-w-xl bg-cyan-950 rounded-2xl px-5 py-3">
      <div className="flex flex-row">
        <div className="ml-3">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-lg">{institution}</div>
          <div>{description}</div>
          <div className="mt-1 flex flex-row items-center">
            {repo && (
              <div className="mr-1">
                <a href={repo} className="">
                  <i className="fab fa-github fa-2x text-white transition duration-300 hover:text-red-500"></i>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseTile;
