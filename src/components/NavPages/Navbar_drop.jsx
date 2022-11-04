import React, { useState } from "react";
import "./Navbar_drop.css";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../styles/dcsLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faCoffee,
  faDatabase,
  faBrain,
  faCheckSquare,
  faRectangleAd
} from "@fortawesome/free-solid-svg-icons";
const Navbar_drop = () => {
  return (
    <div className="navbar">
      <div class="topnav" id="myTopnav">
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-10 w-auto" src={logo} alt="DATA CARE SOLUTIONS" />
          {/* <h1 className='text-1xl font-bold mr-4 sm:text-4xl'>Data Care Solutions</h1> */}
{/* 
          <a href="#home">Home</a> */}
          {/* <a href="#contact">Contact</a> */}
          <div class="dropdown">
            <button class="dropbtn">About Us</button>
            <div class="dropdown-content">
              <a href="#">Company history</a>
              <a href="#">Team bio</a>
            </div>
          </div>
          {/* About Us */}

          <div class="dropdown">
            <button class="dropbtn">
              Solutions
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">
                <FontAwesomeIcon className="dropdownIcons" icon={faBrain} />
                Smart Searches
              </a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faRectangleAd}/>
                Smart Flow
              </a>
              <a href="#">
                <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Population health management
              </a>
            </div>
          </div>
          {/* Solutions */}
          <div class="dropdown">
            <button class="dropbtn">
              Case Studies
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Office Support Function</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Asthma and COPD management
              </a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Diabetes management</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                DocFiler</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Consultancy</a>
            </div>
          </div>
          {/* Case Studies */}
          <div class="dropdown">
            <button class="dropbtn">
              Resources
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Medical Terminology</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Medical Coding</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Interpreting blood results</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                File Away</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Safe Prescribing</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Workflow optimisation</a>
            </div>
          </div>
          {/* Resources */}
          
          {/* <div class="dropdown">
            <button class="dropbtn">
              Case Study
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Brent CCG</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Health Direct Federation</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Medicspot</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                The Health Foundation</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                The British Heart Foundation</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              Resoruces
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />
                Free (Cheat sheets)</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />CPCS Cheat sheet</a>
              <a href="#">
              <FontAwesomeIcon className="dropdownIcons" icon={faDatabase} />Safe prescribing sheet</a>
            </div>
          </div> */}
          <a href="#home" class="flex items-center cursor-pointer">
            Contact Us
          </a>
          {/* <div className='md:hidden' onClick={handleClick}>
                {!nav?<MenuIcon className='w-5'/>:<XIcon className='w-5'/>}

        
            </div> */}
        </div>
      </div>
      
    </div>
  );
};

export default Navbar_drop;
