import React from "react";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HeroSection = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('jgz6@uakron.edu').then(
    ()=>toast("Email copied to clipboard!")
    )
    .catch((error)=> console.error("Copy failed", error))
  };

  return (
    <div className="w-full max-w-lg p-10">
      <div className="pb-3 text-5xl font-semibold">John Zolton</div>
      <div className="text-2xl">Software Engineer</div>
      <button 
        onClick={copyToClipboard} 
        className="mt-3 flex items-center hover:text-white"
      >
        <MdEmail className="mr-1" size="1.5em"/>
      </button>
      <ToastContainer 
      hideProgressBar={true}
      theme="dark"
      position="top-right" 
      autoClose={1000}
       />
    </div>
  );
};

export default HeroSection;
