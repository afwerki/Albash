import React from "react";

const Hero = () => {
    return (
        <div className="dark:bg-gray-900">
            <div className="container mx-auto py-9 md:py-12 lg:py-24">
                <div className="relative mx-4">
                    <img src="https://i.ibb.co/q5k5j57/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" className="w-full h-full hidden lg:block" />
                    <img src="https://i.ibb.co/94jQFsV/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" className="hidden sm:block lg:hidden w-full h-full" />
                    <img src="https://i.ibb.co/cJz8LZ2/bench-accounting-nvzv-OPQW0gc-unsplash-1-1.png" alt="A work table with house plants" className="sm:hidden w-full h-full" />

                    <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 sm:w-8/12"> Clean Data Safe Patient</h1>
                        <p className="text-base leading-normal text-gray-800 mt-4 sm:mt-5 sm:w-5/12">Our Consultancy, Smart Tools and training
improve patient care and optimise processes whilst reducing workload and costs.</p>
                        <button className="hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                    </div>
                    <button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;



// import React from "react";
// import {
//   CloudUploadIcon,
//   FolderAddIcon,
//   DatabaseIcon,
//   PaperAirplaneIcon,
//   ServerIcon,
// } from "@heroicons/react/solid";
// import bgimg from "../images/cyber-bg.png";
// import './Herostyle.css'

// const Hero = () => {
//   return (
//     <div
//       name="home"
//       className="w-full h-screen bg-zinc-200 flex flex-col justify-between font-sans-serif"
//     >
//       <div className="grid md:grid-cols-2 max-w-[1240px] m-auto font-sans-serif">
//         <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
//           {/* <p className='text-2xl'>Unique sequencing & production</p> */}
//           <h1 className="py-3 text-5xl md:text-4xl text-primary-lightgreen">
//             Clean Data Safe Patient
//           </h1>
//           <h1 className="text-2xl"> DATA CARE SOLUTIONS </h1>
//           <button className="py-3 px-6 sm:w-[60%] my-4 bg-black text-primary-lightgreen">Learn More</button>
//         </div> 
//         <div className="">
//           <img className="w-full" src={bgimg} alt="/" />
//         </div>
//         <div
//           className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
//             mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 
//             rounded-xl text-center shadow-xl"
//         >
//           <h2 className="py-3 text-4xl md:text-3xl">
//             Data Care Solutions Smart Tools
//           </h2>
//           <div className="flex justify-between flex-wrap px-4">
//             <p className="flex px-4 py-2 text-primary-black">
//               <FolderAddIcon className="h-10 text-primary-lightgreen" />
//               File Away
//             </p>
//             <p className="flex px-4 py-2 text-primary-black">
//               <DatabaseIcon className="h-10 text-primary-lightgreen" />
//               SMART SEARCH
//             </p>
//             <p className="flex px-4 py-2 text-primary-black">
//               <ServerIcon className="h-10 text-primary-lightgreen" />
//               DEMAND & CAPACIY MODELLING
//             </p>
//             <p className="flex px-4 py-2 text-primary-black">
//               <PaperAirplaneIcon className="h-10 text-primary-lightgreen" /> API
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
