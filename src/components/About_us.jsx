import React from "react";
import { Link } from 'react-router-dom';
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
    <div className="bg-gray-100 min-h-screen">
    {/* Navigation */}
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">
        <Link to="/" className="text-2xl font-bold">
          Your Company Name
        </Link>
      </div>
    </nav>

    {/* About Us Section */}
    <section className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Our Story</h1>
      <p className="text-gray-700 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula justo eu diam malesuada, vel cursus est
        sodales. Proin vitae arcu vel mi convallis vulputate vitae eget nunc. Quisque ut fringilla odio. Nulla facilisi.
        Vestibulum auctor, orci vitae eleifend dictum, urna quam placerat urna, a convallis nisi enim vel justo.
      </p>

      <p className="text-gray-700 mb-8">
        Integer cursus dapibus leo, eget cursus massa vestibulum sit amet. Sed non risus sit amet ligula aliquet
        scelerisque. Quisque tincidunt, augue id scelerisque aliquet, urna felis accumsan lacus, eget consequat ligula
        elit eu justo.
      </p>

      <p className="text-gray-700 mb-8">
        Curabitur vel arcu in elit ullamcorper convallis. Suspendisse potenti. Nunc tincidunt libero eu interdum
        vulputate. Sed cursus, sapien eu accumsan fermentum, nisl sem ullamcorper nunc, sit amet ultricies ipsum elit
        in lectus.
      </p>

      <p className="text-gray-700 mb-8">
        In hac habitasse platea dictumst. Sed tristique, justo vel fermentum ultrices, turpis lacus tincidunt turpis,
        ut accumsan leo leo non elit. Phasellus euismod ullamcorper semper.
      </p>
    </section>
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
