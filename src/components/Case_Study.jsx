import React from "react";
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
import './Herostyle.css'

const Case_Study = () => {
  return (
    <div>
       <div
      name="Case_Study"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between font-sans-serif"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto font-sans-serif">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          {/* <p className='text-2xl'>Unique sequencing & production</p> */}
          <h1 className="py-3 text-5xl md:text-4xl text-primary-lightgreen">
            Clean Data Safe Patient
          </h1>
          <h1 className="text-2xl"> DATA CARE SOLUTIONS </h1>
          <button className="py-3 px-6 sm:w-[60%] my-4 bg-black text-primary-lightgreen">Learn More</button>
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
        <div className="">
          <img className="w-full" src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
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
              <PaperAirplaneIcon className="h-10 text-primary-lightgreen" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
    <div name="about" className="w-full my-32  font-sans-serif">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <p className="text-2xl text-primary-lightgreen">About Us</p>
          <h2 className="text-2xl text-primary-lightgreen">
            DATA CARE SOLUTIONS
          </h2>
          <p className="text-base py-6 ml-1 mr-2 sm:m-2  text-primary-naveyblack ">
            {/* Our healthcare system is one of the most essential functions in
            modern society. The multifarious hurdles that it currently faces
            such as a growing and ageing population along with insufficient
            funding has made delivering high quality healthcare challenging.
            What if we could all work together to achieve our dream of providing
            the best for our patients? Data Care Solutions (DCS) has a vision to
            improve patients’ wellbeing by assisting organisations to deliver
            high quality healthcare. We have extensive experience working with
            providers and commissioners whilst ensuring we are fully compliant
            with all regulatory frameworks. DCS has great insight into the
            multiple areas within healthcare and can help navigate organisations
            through their challenges. DCS uses a wide range of tools but more
            importantly help to embed change in behaviour amongst the team
            members. DCS has run a number of successful workshops with leaders
            and staff members and helped them reach a consensus whereby their
            purpose has a shared vision and goals.
            <br /> */}
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

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-primary-naveyblack">100%</p>
            <p className="text-gray-400 mt-2">Patient satisfaction</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-primary-naveyblack">99%</p>
            <p className="text-gray-400 mt-2">Primary care Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-primary-naveyblack ">5K</p>
            <p className=" text-gray-400 mt-2">Patients supported every day</p>
          </div>
        </div>
      </div>
      <section id="sponsors" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mx-auto max-w-2xl text-center font-display text-4xl font-medium
          tracking-tighter sm:text-5xl "
          >
            Companies
          </h2>
          <hr/>
          {/* <span className="text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
            nobis.
          </span> */}
          <div
            className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center
          gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32"
          >
            <div className="flex items-center justify-center">
              <img
                src={british}
                alt="sponcer"
                class="w-24 h-24 rounded-full mx-auto"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 ">
                  British Heart Foundation{" "}
                </p>
                {/* <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  aperiam maiores minima veritatis cum aut, vel non
                  reprehenderit at fugiat harum illo nisi quibusdam consequatur?
                  Provident suscipit illo aspernatur!
                </p> */}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={Hillingdon}
                alt="sponcer"
                class="w-24 h-24 rounded-full mx-auto"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Hillingdon Hospital{" "}
                </p>
                {/* <p className="text-sm text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  aperiam maiores minima veritatis cum aut, vel non
                  reprehenderit at fugiat harum illo nisi quibusdam consequatur?
                  Provident suscipit illo aspernatur!
                </p> */}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={brunel}
                alt="sponcer"
                class="w-24 h-24 rounded-full mx-auto"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 ">
                  Brunel University{" "}
                </p>
                {/* <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  aperiam maiores minima veritatis cum aut, vel non
                  reprehenderit at fugiat harum illo nisi quibusdam consequatur?
                  Provident suscipit illo aspernatur!
                </p> */}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={brent}
                alt="sponcer"
                class="w-24 h-24 rounded-full mx-auto"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Brent </p>
                {/* <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  aperiam maiores minima veritatis cum aut, vel non
                  reprehenderit at fugiat harum illo nisi quibusdam consequatur?
                  Provident suscipit illo aspernatur!
                </p> */}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={health_bridge}
                alt="sponcer"
                class="w-24 h-24 rounded-full mx-auto"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Health Bridge Direct
                </p>
                {/* <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  aperiam maiores minima veritatis cum aut, vel non
                  reprehenderit at fugiat harum illo nisi quibusdam consequatur?
                  Provident suscipit illo aspernatur!
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Case_Study;
