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

import "../components/styles/smartTools.css";
import { File_Away } from "./products/File_Away";
import Sidemenu from "./products/Sidemenu";
import Demand from "./products/Demand";
import Blog from "./Blog";
import SmartSearch from "./products/SmartSearch";
import Vision from "./dcs/Vision";

// import Planet_role from "./dcs/Planet_role";
// import {useNavigate } from "react-router-dom";

const Smart_Tools_detail = () => {
  // const navigate= useNavigate();

  return (
    <div>
       
      <Sidemenu />
      <Vision/>
    
      
      {/* <Planet_role/> */}
      
  
      {/* <SmartSearch/> */}
     
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <br />
        <br />
        <br />

        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <div class="uppercase tracking-wide text-sm text-primary-olivedrab font-semibold">
                Products
              </div>
              <img
                class="w-24 h-24 md:w-48 md:h-auto md:rounded-md rounded-full mx-auto"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Modern building architecture"
              ></img>
            </div>
            <div class="p-8">
               <p class="  text-lg text-black">
                Our healthcare system is one of the most essential functions in
                modern society. The multifarious hurdles that it currently faces
                such as a growing and ageing population along with insufficient
                funding has made delivering high quality healthcare challenging.
                <br /><br/>
                
              </p>
            </div>
          </div>
          <div className="p-8">
            <p  class="  text-lg text-black">
          What if we could all work together to achieve our dream of
                providing the best for our patients? Data Care Solutions (DCS)
                has a vision to improve patients’ wellbeing by assisting
                organisations to deliver high quality healthcare. We have
                extensive experience working with providers and commissioners
                whilst ensuring we are fully compliant with all regulatory
                frameworks.<br/><br/>
                 DCS has great insight into the multiple areas within
                healthcare and can help navigate organisations through their
                challenges. DCS uses a wide range of tools but more importantly
                help to embed change in behaviour amongst the team members. DCS
                has run a number of successful workshops with leaders and staff
                members and helped them reach a consensus whereby their purpose
                has a shared vision and goals.
            </p >
          </div>
          <hr />
         
          {/* <File_Away /> */}
          
          
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <figcaption class="font-medium">
              <div class="text-blackb text-primary-olivedrab  text-3xl font-sans-serif">
                Our Smart Searches™ improve clinical care – case study
              </div>
              <div class="text-slate-700 dark:text-slate-500 font-sans-serif">
                Background
              </div>
            </figcaption>
            <blockquote>
              <p class="text-md font-light font-sans-serif">
                Background A group of five practices with a combined list size
                of over 26,000 patients were keen to work more collaboratively
                with the prospect of a potential merger in the not so distant
                future. However, they struggled on how to do this and where they
                should start first. Time was spent with the leaders of the
                practices and learning their requirements and very soon a
                pattern emerged that they were all facing common issues which
                was largely related to variation in administrative and clinical
                practice, inadequate workforce and difficulty to recruit.
              </p>
              <p>Key themes identified while brainstorming with the GPs</p>
              <p>
                • Empower patients and staff • Manage workload better • Reduce
                variation in healthcare • Make change resilient • Align best
                practice
              </p>
              <p>Implement solution</p>
              <p>
                We identified their current workforce issues and agreed that
                they may want to focus on what works best in one practice may
                not work well in another. After a period of due diligence, we
                identified common themes that could be applied across the five
                practices but still allow some variability to take place within
                the practice. We concentrated our efforts on creating their
                vehicle by which they could mobilise their vision and then
                started to work with aligning back room functions first. We
                helped the group appoint an operational director with some
                mid-level managers to help with key administrative
                functionalities. We designed and deployed bespoke products to
                help manage their clinical workload and developed a project plan
                to when they could look to merge contracts.
              </p>
              <p>Findings</p>
              <p>
                The group of practices are revered in their locality as they are
                seen as quite forward thinking by their CCG and nearby
                practices. They attracted some funding to help them establish
                themselves but more importantly they were eager to make change
                happen at a faster pace and so contributed additional funds from
                their personal accounts. We set up key milestones and internal
                KPIs to ensure the group’s objectives were on target. Creating
                the vehicle, including the paperwork for CQC, were our first
                priority which then followed with the appointment of personnel.
                The GPs were very much keen to manage their workload better and
                so we helped the practices with the training of Clinical
                Administrators through our File Away programme. We helped
                develop tools to help them hold virtual diabetes clinics and
                then provided bespoke training and education for them as well to
                ensure that the pharmacists were up-to-date. After the change
                had taken place, the practices showed an increase in income from
                the DES and LES components compared to the previous years.
              </p>
            </blockquote>
          </div>
        </div>
       
      </div>
      {/* <Blog/> */}
      <Demand/>
     
    </div>
  );
};

export default Smart_Tools_detail;
