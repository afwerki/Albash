import React, { useState } from "react";

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import {
  ChipIcon,
  SupportIcon,
  CloudUploadIcon,
  FolderAddIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import supportImg from "../images/dcs_template.png";
// support.jpeg
import ReadMoreReact from "read-more-react";
import Smart_Tools_detail from "./Smart_Tools_detail";
import bgimg from "../images/support.jpeg";
import demandAndcapacity from "../images/arrow.png";
import fileAway from "../images/fileAway.jpg";
import SmartSearch from "../images/SmartSearch.png";
import './Herostyle.css'
import { Link } from "react-router-dom";
// import {useNavigate } from "react-router-dom";

const SmartTools = () => {
  // const navigate= useNavigate();

  return (

    <div name="smartTools" className="w-full mt-24 font-sans-serif">
    <div className="w-full h-[700px] bg-gray-900/90 absolute">
      <img
        className="w-full h-full object-cover mix-blend-overlay"
        src={bgimg}
        alt="/"
      />
    </div>

    <div className="max-w-[1240px] mx-auto text-white relative">
      <div className="px-4 py-12">
        <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
          Smart Tools
        </h2>
        <hr />
        {/* <h3 className="text-5xl font-bold py-6 text-center ">
        Finding the right Service
      </h3> */}
        <p className="py-4 text-3xl text-slate-300 ">
          Our Consultancy, Smart Tools and training improve patient care and
          optimise processes whilst reducing workload and costs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            {/* <FolderAddIcon className="w-16 p-4 bg-primary-lightgreen text-white rounded-lg mt-[-4rem]" /> */}
            <h3 className=" text-2xl my-6 ">File Away</h3>
            <img src={fileAway} alt="" />
            <p className="text-gray-600 text-base ">
              Did you know that an average GP would spend nearly five hours
              per week filing documents? Would you like to change the
              process in your practice to free up GP time whilst filing your
              documents safely?
              <br />
              <ul className="list-disc">
                <li class="flex items-center">
                  
                  <p class="ml-4">
                    DCS will provide training and support tools to minimise
                    GP time spent on filing documents
                  </p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">
                    Designed in collaboration with experts in risk
                    management in the airline and the financial industry
                  </p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">
                    Learn how to ensure quality assurance and clinical
                    safety are met
                  </p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">
                    Reduce time (approximately 240 hours for 1 FTE GP per
                    year) and cost by working through a safe, effective and
                    proven process
                  </p>
                </li>
                <br />
              </ul>
            </p>
            <br />
          <br />
          </div>
          
          <div className="bg-slate-100 pl-8 py-4">
            <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
              Read more <ArrowSmRightIcon className="w-5 ml-2" />
            </Link>
            
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            {/* <DatabaseIcon className="w-20 p-4  bg-primary-lightgreen text-white rounded-lg mt-[-4rem]" /> */}
            <h3 className=" text-2xl my-6 ">
              <var>
                SMART SEARCH<sup>FM</sup>
              </var>
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={SmartSearch} alt="" />
            </h3>

            <p className="text-gray-600 text-base">
              Coding correctly is vital if we are to see improved patient
              care. DCS has developed hundreds of searches with high
              sensitivity and specificity identifying patients who are not
              detected by your system and thus receiving suboptimal care.
              Unlike other commercial providers, our uniquely designed
              programme, AutoReviewer, is able to ensure the reporting that
              is provided to practices is as accurate as possible.
              <br />
              <ul className="list-disc">
                <li class="flex items-center">
                 
                  <p class="ml-4">
                   
                    Proactively identify patients with chronic diseases who
                    are being missed from regular reviews
                  </p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">
                    More accurate picture of the health needs in your
                    locality
                  </p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">
                    Those previously not identified by the system will now
                    become visible to the clinicians
                  </p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Reduction in unplanned admissions</p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">
                    Prevent avoidable morbidities and mortalities
                  </p>
                </li>
              </ul>
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4">
            <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
              Read more <ArrowSmRightIcon className="w-5 ml-2" />
            </Link>
            
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            {/* <ServerIcon className="w-20 p-4 bg-primary-lightgreen text-white rounded-lg mt-[-4rem]" /> */}
            <h3 className=" text-2xl my-6 ">DEMAND & CAPACIY MODELLING</h3>
            <p className="text-gray-600 text-base">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={demandAndcapacity} alt="" />
              Do you often feel that you offer enough appointments, but
              patients still feel discontent? Do you feel your workplace
              needs significant change to improve patient access? DCS could
              change the way you work and provide better patient access.
              <br />
              <ul className="list-disc">
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">
                    Analyse your demand and capacity data through our suite
                    of searches.
                  </p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">
                    Identify options on how you may want to handle patient
                    requests to free up face to face appointments.
                  </p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">
                    Improve both clinical and administrative staff work /
                    life balance.
                  </p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Help practices improve their registers</p>
                </li>

                <br />
                <br />
                <br />
                <br />
                <br />
              </ul>
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4">
            <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
              Read more <ArrowSmRightIcon className="w-5 ml-2" />
            </Link>
            
          </div>
        </div>
      </div>
      </div>
      </div>
   
  );
};

export default SmartTools;
