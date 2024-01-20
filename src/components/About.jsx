import React from "react";
import dcsTeamMeeting from "../images/dcsTeamMeeting.jpg";
import aboutus from "../images/AI_healthCare.jpeg";
import Hillingdon from "../images/Hillingdon hosptial_logo.jpeg";
import british from "../images/british heart foundation.jpeg";
import brent from "../images/brent_logo.jpeg";
import brunel from "../images/brunel logo.jpeg";
import health_bridge from "../images/health_bridge_dirct_logo.jpeg";
import {
  CloudUploadIcon,
  FolderAddIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgimg from "../images/cyber-bg.png";
import "./Herostyle.css";
import Teams from "./Teams";
import { Link } from "react-router-dom";
import Vision from "./dcs/Vision";
// import { Button } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
  return (
    <div>
  <div name="hero_main" className="relative flex flex-col-reverse py-10 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://media.istockphoto.com/id/1634669289/photo/african-little-girls-during-the-class-east-africa.jpg?s=612x612&w=0&k=20&c=8ayH4aet6SMNlnLNQZiGnZlo3H0rog2aKF-JaxzuiHg="
          alt=""
        />
      </div>
      <div className="relative flex flex-col mt-5 items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 animate__animated animate__fadeIn animate__delay-1s">
          {/* Add animation classes to the container */}
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Who are we(Alabsh/አልባሽ)
            <br className="hidden md:block" />
           
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Alabsh Ethiopia is a recently established charitable organization committed to transforming the lives
                   of underprivileged children in Ethiopia by providing them with the essential learning materials 
                   they need to thrive academically. Our mission is rooted in the belief that education is a powerful tool for
                   breaking the cycle of poverty, and every child deserves the opportunity to learn and grow.
          </p>
          <div className="flex items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-sky-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none animate__animated animate__fadeIn animate__delay-2s"
            >
            Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        


        <Teams />
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import Hillingdon from "../images/Hillingdon hosptial_logo.jpeg";
// import british from "../images/british heart foundation.jpeg";
// import brent from "../images/brent_logo.jpeg";
// import brunel from "../images/brunel logo.jpeg";
// import health_bridge from "../images/health_bridge_dirct_logo.jpeg";
// import dcsTeamMeeting from "../images/dcsTeamMeeting.jpg";
// import {
//   CloudUploadIcon,
//   FolderAddIcon,
//   DatabaseIcon,
//   PaperAirplaneIcon,
//   ServerIcon,
// } from "@heroicons/react/solid";
// import bgimg from "../images/cyber-bg.png";
// import './Herostyle.css'
// import Teams from "./Teams";

// const About = () => {
//   return (
//     <div>
// <div class="py-16 bg-white">
//   <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//       <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//         <div class="md:5/12 lg:w-5/12">
//           <img src={dcsTeamMeeting} alt="image" loading="lazy" width="" height=""></img>
//         </div>
//         <div class="md:7/12 lg:w-6/12">
//           <br />
//           <span>About Us</span>
//           <h2 class="text-2xl text-gray-900  md:text-4xl">DATA CARE SOLUTIONS</h2>
//           <p class="mt-6 text-gray-600">The directors and the management team have considerable experience
//             in providing clinical and administrative services on behalf of
//             Commissioners. Through their work as senior directors of Clover
//             Health Ltd, a federation of 15 practices looking after 90,000
//             patients, multiple successful projects have been deployed
//             demonstrating excellent quality healthcare services yet being
//             economical for the commissioners. One such project won a national
//             award. DCS was established to spread and promote the excellent work
//             that had been done at a local level. The current directors are also
//             partners in their own practices and fully understand the pressures
//             that are experienced in the healthcare sector. They have used
//             innovative methods such as lean principles to pilot projects that
//             will reduce administrative workload for GPs thereby freeing up
//             clinical capacity. </p>
//           <p class="mt-4 text-gray-600"> They have also succeeded in establishing a
//             workforce to help GPs manage their workload better in primary care.
//             DCS fervently believes in better coding as being the bedrock of any
//             healthcare project, and they developed Smart Searches™ to aid
//             primary care understand their workload better and help them to
//             organize their workforce to meet the future challenges. DCS believes
//             that better health outcomes can be achieved if we improve our data
//             capturing methods. This will act as a key enabler to ensure better
//             health outcomes are achieved as the information collected will
//             translate to more appropriate mapping of clinical services in the
//             area.</p>
//         </div>
//       </div>
//   </div>
// </div>

//       <section id="sponsors" className="py-20 sm:py-32">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <h2
//             className="mx-auto max-w-2xl text-center font-display text-4xl font-medium
//           tracking-tighter sm:text-5xl "
//           >
//             Companies
//           </h2>
//           <hr/>
//           <div
//             className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center
//           gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32"
//           >
//             <div className="flex items-center justify-center">
//               <img
//                 src={british}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900 ">
//                   British Heart Foundation{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src={Hillingdon}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">
//                   Hillingdon Hospital{" "}
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src={brunel}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900 ">
//                   Brunel University{" "}
//                 </p>

//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src={brent}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">Brent </p>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src={health_bridge}
//                 alt="sponcer"
//                 class="w-24 h-24 rounded-full mx-auto"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-900">
//                   Health Bridge Direct
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Teams/>
//     </div>
//   );
// };

// export default About;
