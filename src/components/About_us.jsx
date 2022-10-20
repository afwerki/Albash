import React from "react";
import dcsTeamMeeting from "../images/dcsTeamMeeting.jpg";
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
import History from "./dcs/History";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      {/* <History/> */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <br />
          <br />
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our History
          </h1>
          <p className="font-normal text-base  leading-6 text-gray-600 ">
            The directors and the management team have considerable experience
            in providing clinical and administrative services on behalf of
            Commissioners. Through their work as senior directors of Clover
            Health Ltd, a federation of 15 practices looking after 90,000
            patients, multiple successful projects have been deployed
            demonstrating excellent quality healthcare services yet being
            economical for the commissioners. One such project won a national
            award. DCS was established to spread and promote the excellent work
            that had been done at a local level. The current directors are also
            partners in their own practices and fully understand the pressures
            that are experienced in the healthcare sector. They have used
            innovative methods such as lean principles to pilot projects that
            will reduce administrative workload for GPs thereby freeing up
            clinical capacity. They have also succeeded in establishing a
            workforce to help GPs manage their workload better in primary care.
            DCS fervently believes in better coding as being the bedrock of any
            healthcare project, and they developed Smart Searches™ to aid
            primary care understand their workload better and help them to
            organize their workforce to meet the future challenges. DCS believes
            that better health outcomes can be achieved if we improve our data
            capturing methods. This will act as a key enabler to ensure better
            health outcomes are achieved as the information collected will
            translate to more appropriate mapping of clinical services in the
            area.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src={dcsTeamMeeting}
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Team
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Alexa
              </p>
              <span>software developer</span>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Olivia
              </p>
              
              <span>software developer</span>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Liam
              </p>
              
              <span>software developer</span>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Elijah
              </p>
              
              <span>software developer</span>
            </div>
          </div>
        </div>
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
