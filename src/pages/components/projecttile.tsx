
interface ProtjectTileProps {
    title: string,
    description: string,
    picture: string,
    url?: string,
    repo?: string,
    stars?: number,
    forks?: number,
}

export function ProjectTile({title, description, picture, url, repo, stars, forks}: ProtjectTileProps) {
  return (
    <div className="bg-slate-600 py-3 px-5 m-1 max-w-xl">
        <div className="flex flex-row">
        <div className="w-24 h-24 bg-black">{picture}</div>
        <div className="ml-3">
        <div className="font-semibold text-xl">{title}</div>
        <div>{description}</div>
        <div className="flex flex-row items-center mt-1">
        {repo && <div className="mr-1">
        <a href={repo} className="">
            <i className="fab fa-github fa-2x text-white hover:text-red-500 transition duration-300"></i>
        </a>
    </div>}
        {stars && 
            <div className="flex flex-row items-center hover:text-orange-300"><div className="font-semibold px-1">{stars}</div>
                <i className="fas fa-star"></i>
                </div>
                }
        {forks && 
            <div className="hover:text-blue-700 flex flex-row  items-center">
            <div className="font-semibold px-1">{forks}</div>
                <i className="fas fa-code-branch"></i>
            </div>
            }
        {url && 
        <a href={url} className="hover:text-blue-400">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
            <i className="fas fa-globe fa-2x"></i>
</a>

        }

        </div>
        </div>

        </div>
    </div>
  );
};

export default ProjectTile;
