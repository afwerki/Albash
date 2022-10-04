import React from "react";

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

import supportImg from "../images/support.jpeg";
import ReadMoreReact from "read-more-react";

const SmartTools = () => {
  return (
    <div name="support" className="w-full mt-24">
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
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right Service
          </h3>
          <p className="py-4 text-1xl text-slate-300">
            We often run facilitated workshops with the team and implement
            bespoke training methods. DCS will also work with your organisation
            to help you identify the key principles of process, risk and quality
            management. Through the use of these established methodologies, DCS
            is able to help improve efficiency by eliminating waste without
            impacting productivity. We listen to our client’s requirements and
            diligently explore the limitations they face so we are able to
            roadmap their journey better. We work with the client’s team to
            ensure they are engaged throughout the entire process. We
            strategically advise the client on what best actions to undertake
            after having explored the risks and benefits of all available
            approaches. We align local strategic vision with that of the
            national agenda which helps when trying to attract funding
            opportunities. We have an experienced team behind us who deliver
            high impact workshops and informative training sessions to the
            client’s team. DCS has profound insight into the world of integrated
            healthcare as well as the aviation industry. DCS has also engaged
            with the financial sector to learn more about risk management. The
            cross industry experience has enabled us to advise our clients from
            a different view point that we would not have traditionally used in
            the medical sector on how to identify and mitigate risks
            appropriately with minimal impact on productivity. Cumulatively
            speaking, the team at DCS has a knowledge bank of over 75 years’
            experience in the healthcare and aviation industry. DCS prioritise
            on ensuring there is a culture for change and working with the
            leaders of the organisation, we will help to deliver training,
            workshops, and coach trainers to deliver the best for their
            patients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <FolderAddIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">File Away</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi provident iure placeat
                blanditiis ea sint earum hic iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Read more <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <DatabaseIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">SMART SEARCH</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi provident iure placeat
                blanditiis ea sint earum hic iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Read more <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <ServerIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">
                DEMAND & CAPACIY MODELLING
              </h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Excepturi provident iure placeat
                blanditiis ea sint earum hic iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
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
