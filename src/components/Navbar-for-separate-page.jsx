
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../images/dcsLogo.png";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-10 bg-primary-50 fixed drop-shadow-lg font-sans-serif">
      {/* w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg font-sans-serif */}
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-8 w-auto" src={logo} alt="DATA CARE SOLUTIONS" />
          {/* <h1 className='text-1xl font-bold mr-4 sm:text-4xl'>Data Care Solutions</h1> */}
        </div>
        <div className="flex items-center cursor-pointer ">
          <ul className="hidden md:flex">
            <li class="relative group px-3 py-2  hover:opacity-50">
              {/* <Link to="home" smooth={true} duration={500}>
                Home
              </Link> */}
            </li>
            <li class="relative group px-3 py-2 hover:opacity-50">
              {/* <Link to="about" smooth={true} offset={-200} duration={500}>
                  About Us
                </Link> */}
              <li className="">
                <Link to="about" smooth={true} duration={500}>
                  About Us
                </Link>

                <div class="absolute top-1 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-white  rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-black transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="https://tailwind-elements.com/docs/standard/navigation/navbar/"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Company history
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Team bio
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </li>
            <li class="relative group px-3 py-2 hover:opacity-50">
              {/* <Link to="about" smooth={true} offset={-200} duration={500}>
                  About Us
                </Link> */}
              <li className="">
                <Link to="home" smooth={true} duration={500}>
                Products
                </Link>

                <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-black rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-black transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="https://tailwind-elements.com/docs/standard/navigation/navbar/"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Smart Searches
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Demand and capacity analysis
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Population health management
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </li>
            <li class="relative group px-3 py-2 hover:opacity-50">
              {/* <Link to="about" smooth={true} offset={-200} duration={500}>
                  About Us
                </Link> */}
              <li className="">
                <Link to="home" smooth={true} duration={500}>
                Services
                </Link>

                <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-black rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-black transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="https://tailwind-elements.com/docs/standard/navigation/navbar/"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Front of Office Support Function
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                            Asthma/COPD management
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Diabetes management
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Optimising your locally enhanced service
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           DocFiler
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Consultancy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </li>
            <li class="relative group px-3 py-2 hover:opacity-50">
              {/* <Link to="about" smooth={true} offset={-200} duration={500}>
                  About Us
                </Link> */}
              <li className="">
                <Link to="home" smooth={true} duration={500}>
                Training
                </Link>

                <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-black rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-black transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="https://tailwind-elements.com/docs/standard/navigation/navbar/"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Medical Terminology
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Medical Coding
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Interpreting blood results
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           File Away
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                         Safe Prescribing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Workflow optimisation
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </li>
            <li class="relative group px-3 py-2 hover:opacity-50">
              {/* <Link to="about" smooth={true} offset={-200} duration={500}>
                  About Us
                </Link> */}
              <li className="">
                <Link to="home" smooth={true} duration={500}>
                Case studies
                </Link>

                <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-black rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-black transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="https://tailwind-elements.com/docs/standard/navigation/navbar/"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Brent CCG
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Hillingdon CCG
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           Health Direct Federation
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </li>
            <li class="relative group px-3 py-2 hover:opacity-50">
              {/* <Link to="about" smooth={true} offset={-200} duration={500}>
                  About Us
                </Link> */}
              <li className="">
                <Link to="home" smooth={true} duration={500}>
                Resources
                </Link>

                <div class="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div class="relative top-6 p-6 bg-black rounded-xl shadow-xl w-full">
                    <div class="w-10 h-10 bg-black transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div class="relative z-10">
                      <ul class="mt-3 text-[15px]">
                        <li>
                          <a
                            href="https://tailwind-elements.com/docs/standard/navigation/navbar/"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                          Free (Cheat sheets)
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                           CPCS Cheat sheet
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="bg-transparent bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-primary-lightgreen via-blue-500 font-semibold hover:from-blue-600 hover:to-indigo-600 hover:via-pink-400 py-1 block"
                          >
                          Safe prescribing sheet
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </li>

            {/* <li>
              <Link to="smartTools" smooth={true} offset={-50} duration={500}>
                Smart Tools
              </Link>
            </li>
            <li>
              {" "}
              <Link to="smartTools" smooth={true} offset={-100} duration={500}>
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link to="Training" smooth={true} offset={-100} duration={500}>
                Training
              </Link>
            </li>
            <li>
              {" "}
              <Link to="Case_Study" smooth={true} offset={-100} duration={500}>
                Case Study
              </Link>
            </li>
            <li>
              {" "}
              <Link to="resources" smooth={true} offset={-50} duration={500}>
                Resoruces
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="hidden md:flex md:flex pr-4">
          <button className="border-none bg-transparent  text-black mr-4">
            Login
          </button>
          <button className="px-8 py-3 bg-primary-50 text-black">
            Contact Us
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li>
          {" "}
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          {" "}
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          {" "}
          <Link
            onClick={handleClose}
            to="smartTools"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Smart Tools
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          {" "}
          <Link
            onClick={handleClose}
            to="smartTools"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Services
          </Link>
        </li>

        <li className="border-b-2 border-zinc-300 w-full">
          {" "}
          <Link
            onClick={handleClose}
            to="Training"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Training
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          {" "}
          <Link
            onClick={handleClose}
            to="Case_Study"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Case Study
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          {" "}
          <Link
            onClick={handleClose}
            to="resources"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Resources
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-primary-lightgreen px-8 py-3 mb-4">
            Login
          </button>
          <button className="px-8 py-3">Contact Us</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
