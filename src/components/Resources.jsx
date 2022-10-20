import React from "react";
import { CheckIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import {
  CloudUploadIcon,
  FolderAddIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import bgimg from "../images/AI_healthCare.jpeg";
import "./Herostyle.css";

const AllInOne = () => {
  return (
    <div>
      <div
        name="home"
        className="w-full h-screen bg-zinc-200 flex flex-col justify-between font-sans-serif"
      >
        <div className=" static grid md:grid-cols-2 max-w-[1240px] m-auto font-sans-serif">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            {/* <p className='text-2xl'>Unique sequencing & production</p> */}
            <h1 className="py-3 text-5xl md:text-4xl text-primary-lightgreen">
              Resuroces in Data care solutions
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ducimus.
            </p>
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
          <div className=" inline-block">
            <img className=" w-full" src={bgimg} alt="/" />
          </div>
          {/* <div
            className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%]
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
                <PaperAirplaneIcon className="h-10 text-primary-lightgreen" />{" "}
                API
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div name="resources" className="w-full my-32 font-sans-serif">
        <div className="max-w-[1240px] mx-auto px-2">
          <h2 className="text-4xl  text-center text-primary-lightgreen ">
            Resources
          </h2>
          <p className="py-4 text-2xl text-black text-center ">
            We have so many resource both public and private...
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="flex ">
              <div>
                <CheckIcon className="w-4 mr-3 text-primary-lightgreen" />
              </div>
              <div className=" ">
                <h3 className=" text-lg ">QOF Recognised Codes</h3>
                <p className="text-sm pt-2 pb-4">
                  Quick reference to complete list of Read Codes recognised by
                  QOF and summary of the indicators.
                </p>

                <div className="">
                  <p className="flex items-center  text-primary-lightgreen">
                    <a
                      href="https://www.datacaresolutions.co.uk/qof-codes"
                      target="_blank"
                    >
                      Read more
                    </a>
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-4 mr-3 text-primary-lightgreen" />
              </div>
              <div className="">
                <h3 className=" text-lg">
                  Transforming a Poor Performance Practice.
                </h3>
                <p className="text-sm pt-2 pb-4">
                  Presentation by Dr. Jay Verma (GP partner at Shakespere Health
                  Centre and clinical governance lead for Data Care Solutions
                  Ltd) on how he transformed a poor performance practice at the
                  Managment in practice conference held in Olympia, London.
                </p>
                <div className="">
                  <p className="flex items-center  text-primary-lightgreen">
                    <a
                      href="https://www.datacaresolutions.co.uk/qof-codes"
                      target="_blank"
                    >
                      Read more
                    </a>
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-4 mr-3 text-primary-lightgreen" />
              </div>
              <div className="">
                <h3 className=" text-lg ">LEAD Summer School Workshop 4</h3>
                <p className="text-sm pt-2 pb-4">
                  LEAD Summer School Workshop 4 – Turbo charging QOF and other
                  Enhanced Services” held at the London wide Medical Committee
                  (LMC).
                </p>
                <div className="">
                  <p className="flex items-center  text-primary-lightgreen">
                    <a
                      href="https://www.datacaresolutions.co.uk/qof-codes"
                      target="_blank"
                    >
                      Read more
                    </a>
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-4 mr-3 text-primary-lightgreen" />
              </div>
              <div className="">
                <h3 className=" text-lg">Influenza Vaccination Protocol</h3>
                <p className="text-sm pt-2 pb-4">
                  Download a simple but effective EMIS web Protocol for
                  recording influenza vaccination.
                </p>
                <div className="">
                  <p className="flex items-center  text-primary-lightgreen">
                    <a
                      href="https://www.datacaresolutions.co.uk/qof-codes"
                      target="_blank"
                    >
                      Read more
                    </a>
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-4 mr-3 text-primary-lightgreen" />
              </div>
              <div className="">
                <h3 className=" text-lg">Data Quality Searches</h3>
                <p className="text-sm pt-2 pb-4">
                  Find patients with poor data quality is EMISweb and fix them.
                  Male patients with female codes, Female patients with male
                  codes, inappropriate problem titles by user, patients with no
                  NHS number, patients with non-standard mobile numbers etc.
                </p>
                <div className="">
                  <p className="flex items-center  text-primary-lightgreen">
                    <a
                      href="https://www.datacaresolutions.co.uk/qof-codes"
                      target="_blank"
                    >
                      Read more
                    </a>
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-4 mr-3 text-primary-lightgreen" />
              </div>
              <div className="">
                <h3 className=" text-lg">NHS Health Check Searches</h3>
                <p className="text-sm pt-2 pb-4">
                  Download a set of EMIS searches specially made to maximise the
                  NHS Health Check enhanced service claims. Ensure your data is
                  clean before you submit so that all your claims will be
                  approved.
                </p>
                <div className="">
                  <p className="flex items-center  text-primary-lightgreen">
                    <a
                      href="https://www.datacaresolutions.co.uk/qof-codes"
                      target="_blank"
                    >
                      Read more
                    </a>
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <CheckIcon className="w-4 mr-3 text-primary-lightgreen" />
              </div>
              <div className="">
                <h3 className="text-lg">LEAD Summer School Workshop 3</h3>
                <p className="text-sm pt-2 pb-4">
                  “LEAD Summer School Workshop 3 – Understanding payment methods
                  and improving practice efficiency” held at the London wide
                  Medical Committee (LMC).
                </p>
                <div className="">
                  <p className="flex items-center  text-primary-lightgreen">
                    <a
                      href="https://www.datacaresolutions.co.uk/qof-codes"
                      target="_blank"
                    >
                      Read more
                    </a>
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div>
                <CheckIcon className="w-4 mr-3 text-primary-lightgreen" />
              </div>
              <div className="">
                <h3 className=" text-lg">Tracking Enhanced Services</h3>
                <p className="text-sm pt-2 pb-4">
                  Excel file to help practices track enhanced services.
                </p>
                <div className="">
                  <p className="flex items-center  text-primary-lightgreen">
                    <a
                      href="https://www.datacaresolutions.co.uk/qof-codes"
                      target="_blank"
                    >
                      Read more
                    </a>
                    <ArrowSmRightIcon className="w-5 ml-2" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
