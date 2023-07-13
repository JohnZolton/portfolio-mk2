interface CourseTileProps {
    title: string,
    description?: string,
    institution: string,
    repo?: string,
}

export function CourseTile({title, description, repo, institution}: CourseTileProps) {
  return (
    <div className="bg-slate-600 py-3 px-5 m-1 max-w-xl">
        <div className="flex flex-row">
        <div className="ml-3">
        <div className="font-semibold text-xl">{title}</div>
        <div>{institution}</div>
        <div>{description}</div>
        <div className="flex flex-row items-center mt-1">
        {repo && <div className="mr-1">
        <a href={repo} className="">
            <i className="fab fa-github fa-2x text-white hover:text-red-500 transition duration-300"></i>
        </a>
    </div>}

        </div>
        </div>

        </div>
    </div>
  );
};

export default CourseTile;
