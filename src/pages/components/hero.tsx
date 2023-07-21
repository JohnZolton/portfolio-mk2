import React from "react";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export const HeroSection = () => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("jgz6@uakron.edu")
      .then(() => toast("Email copied to clipboard!"))
      .catch((error) => console.error("Copy failed", error));
  };

  return (
    <div className="w-full max-w-lg p-10">
      <div className="pb-3 text-5xl font-semibold">John Zolton</div>
      <div className="text-2xl">Software Engineer</div>
      <div className="flex flex-row items-center gap-4 py-2  ">
        <Link href="https://github.com/JohnZolton" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x text-slate-200 hover:text-white"></i>
          </a>
        </Link>
        <button onClick={copyToClipboard} className=" hover:text-white">
          <MdEmail className="mr-1" size="2em" />
        </button>

        <Link legacyBehavior href="">
          <a
            href="JohnZolton_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="text-slate-300 hover:text-white text-lg hover:underline"
          >
            Resum&eacute;
          </a>
        </Link>
      </div>
      <ToastContainer
        hideProgressBar={true}
        position="top-right"
        autoClose={1000}
      />
    </div>
  );
};

export default HeroSection;
