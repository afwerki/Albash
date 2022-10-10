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
// import {useNavigate } from "react-router-dom";

const SmartTools = () => {
  // const navigate= useNavigate();

  return (
    <div name="smartTools" className="w-full mt-24 font-sans-serif">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Smart Tools
          </h2>
          <hr/>
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
              <FolderAddIcon className="w-16 p-4 bg-primary-lightgreen text-white rounded-lg mt-[-4rem]" />
              <h3 className=" text-2xl my-6 ">File Away</h3>
              <p className="text-gray-600 text-base ">
                Did you know that an average GP would spend nearly five hours
                per week filing documents? Would you like to change the process
                in your practice to free up GP time whilst filing your documents
                safely?
                <br />
                <ul className="list-disc">
                  <li>
                    DCS will provide training and support tools to minimise GP
                    time spent on filing documents
                  </li>
                  <li>
                    Designed in collaboration with experts in risk management in
                    the airline and the financial industry
                  </li>
                  <li>
                    Learn how to ensure quality assurance and clinical safety
                    are met
                  </li>
                  <li>
                    Reduce time (approximately 240 hours for 1 FTE GP per year)
                    and cost by working through a safe, effective and proven
                    process
                  </li>
                </ul>
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-primary-lightgreen">
                Read more <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <DatabaseIcon className="w-20 p-4  bg-primary-lightgreen text-white rounded-lg mt-[-4rem]" />
              <h3 className=" text-2xl my-6 ">
                <var>
                  SMART SEARCH<sup>FM</sup>
                </var>
              </h3>

              <p className="text-gray-600 text-base">
                Coding correctly is vital if we are to see improved patient
                care. DCS has developed hundreds of searches with high
                sensitivity and specificity identifying patients who are not
                detected by your system and thus receiving suboptimal care.
                Unlike other commercial providers, our uniquely designed
                programme, AutoReviewer, is able to ensure the reporting that is
                provided to practices is as accurate as possible.
                <br />
                <ul className="list-disc">
                  <li>
                    Proactively identify patients with chronic diseases who are
                    being missed from regular reviews
                  </li>
                  <li>
                    More accurate picture of the health needs in your locality
                  </li>
                  <li>
                    Those previously not identified by the system will now
                    become visible to the clinicians
                  </li>
                  <li>Reduction in unplanned admissions</li>
                  <li>Prevent avoidable morbidities and mortalities</li>
                </ul>
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-primary-lightgreen">
                Read more <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ServerIcon className="w-20 p-4 bg-primary-lightgreen text-white rounded-lg mt-[-4rem]" />
              <h3 className=" text-2xl my-6 ">DEMAND & CAPACIY MODELLING</h3>
              <p className="text-gray-600 text-base">
                Do you often feel that you offer enough appointments, but
                patients still feel discontent? Do you feel your workplace needs
                significant change to improve patient access? DCS could change
                the way you work and provide better patient access.
                <br />
                <ul className="list-disc">
                  <li>
                    Analyse your demand and capacity data through our suite of
                    searches.
                  </li>
                  <li>
                    Identify options on how you may want to handle patient
                    requests to free up face to face appointments.
                  </li>
                  <li>
                    Improve both clinical and administrative staff work / life
                    balance.
                  </li>
                  <li>Help practices improve their registers</li>
                </ul>
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-primary-lightgreen">
                Read more <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartTools;
