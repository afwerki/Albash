import React from "react";
import {
  CloudUploadIcon,
  FolderAddIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgimg from "../images/cyber-bg.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between font-sans-serif"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto font-sans-serif">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          {/* <p className='text-2xl'>Unique sequencing & production</p> */}
          <h1 className="py-3 text-5xl md:text-4xl text-primary-lightgreen">
            Clean Data Safe Patient
          </h1>
          <h1 className="text-2xl"> DATA CARE SOLUTIONS </h1>
          <button className="py-3 px-6 sm:w-[60%] my-4 bg-black text-primary-lightgreen">Learn More</button>
          {/* Click={event =>  window.location.href='./Smart_Tools_detail'}  */}
        </div> 
        {/* <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-4xl text-black">
            Helping you improve performance and deliver operational efficiency
            by using lean processes
          </h1>
          <h1 className="py-3 text-5xl md:text-4xl text-primary-lightgreen">
            Primary and secondary healthcare consultancy and tools
          </h1>

          <h1 className="text-2xl"> DATA CARE SOLUTIONS </h1>
        </div> */}
        <div className="">
          <img className="w-full" src={bgimg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 
            rounded-xl text-center shadow-xl"
        >
          <h2 className="py-3 text-4xl md:text-3xl">
            Data Care Solutions Smart Tools
          </h2>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-primary-black">
              <FolderAddIcon className="h-10 text-primary-lightgreen" />
              File Away
            </p>
            <p className="flex px-4 py-2 text-primary-black">
              <DatabaseIcon className="h-10 text-primary-lightgreen" />
              SMART SEARCH
            </p>
            <p className="flex px-4 py-2 text-primary-black">
              <ServerIcon className="h-10 text-primary-lightgreen" />
              DEMAND & CAPACIY MODELLING
            </p>
            <p className="flex px-4 py-2 text-primary-black">
              <PaperAirplaneIcon className="h-10 text-primary-lightgreen" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
