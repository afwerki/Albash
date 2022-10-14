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
import bgimg from "../images/cyber-bg.png";
import "./Herostyle.css";
// import {useNavigate } from "react-router-dom";

const Smart_Tools_detail = () => {
  // const navigate= useNavigate();

  return (
    <div>
      <div
        name="home"
        className="w-full h-screen bg-zinc-200 flex flex-col justify-between font-sans-serif"
      >
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto font-sans-serif">
          <div className="">
            {/* <p className='text-2xl'>Unique sequencing & production</p> */}
            <h1 className="py-3 text-5xl md:text-4xl text-primary-lightgreen">
              Products
            </h1>
            <p>
            Our healthcare system is one of the most essential functions in modern
society. The multifarious hurdles that it currently faces such as a growing
and ageing population along with insufficient funding has made delivering
high quality healthcare challenging. What if we could all work together
to achieve our dream of providing the best for our patients?
Data Care Solutions (DCS) has a vision to improve patients’ wellbeing by assisting organisations to deliver high quality healthcare. We have extensive experience working with providers and commissioners whilst ensuring we are
fully compliant with all regulatory frameworks.
DCS has great insight into the multiple areas within healthcare and can help navigate organisations through their challenges. DCS uses a wide range of
tools but more importantly help to embed change in behaviour amongst the
team members. DCS has run a number of successful workshops with leaders
and staff members and helped them reach a consensus whereby their purpose has a shared vision and goals.
            </p>
          </div>
          <div className="">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="/"
            />
          </div>
        </div>
      </div>
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
                <FolderAddIcon className="w-16 p-4 bg-primary-lightgreen text-white rounded-lg mt-[-4rem]" />
                <h3 className=" text-2xl my-6 ">File Away</h3>
                <p className="text-gray-600 text-base ">
                  Did you know that an average GP would spend nearly five hours
                  per week filing documents? Would you like to change the
                  process in your practice to free up GP time whilst filing your
                  documents safely?
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
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
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
                  programme, AutoReviewer, is able to ensure the reporting that
                  is provided to practices is as accurate as possible.
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
                <p className="flex items-center text-primary-lightgreen">
                  Read more <ArrowSmRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart_Tools_detail;
