import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex max-w-full flex-wrap items-center justify-between p-3">
      <div className="flex flex-wrap gap-y-2 space-x-6">
        <Link href="/" className=" hover:underline">
          Home
        </Link>
        <Link legacyBehavior href="">
          <a
            href="John Zolton Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className=" hover:underline"
          >
            Resum&eacute;
          </a>
        </Link>
        <Link href="https://github.com/JohnZolton" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center  hover:underline">
              <div>Github</div>
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
