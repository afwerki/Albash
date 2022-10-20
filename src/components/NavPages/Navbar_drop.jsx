import React from "react";
import "./Navbar_drop.css";

const Navbar_drop = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="navbar">
      <div class="topnav" id="myTopnav">
        <a href="logo">DCS</a>
        <a href="#home" class="flex items-center cursor-pointer">
          Home
        </a>
        {/* <a href="#contact">Contact</a> */}
        <div class="dropdown">
          <button class="dropbtn">
          About Us
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Company history</a>
            <a href="#">Team bio</a>
            
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
          Product
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Smart Searches</a>
            <a href="#">Smart Flow</a>
            <a href="#">Population health management</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
          Services
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#"> Office Support Function</a>
            <a href="#">Asthma and COPD management</a>
            <a href="#">Diabetes management</a>
            <a href="#">DocFiler</a>
            <a href="#">Consultancy</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
          Training
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Medical Terminology</a>
            <a href="#">Medical Coding</a>
            <a href="#">Interpreting blood results</a>
            <a href="#">File Away</a>
            <a href="#">Safe Prescribing</a>
            <a href="#">Workflow optimisation</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
          Case Study
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Brent CCG</a>
            <a href="#">Health Direct Federation</a>
            <a href="#">Medicspot</a>
            <a href="#">The Health Foundation</a>
            <a href="#">The British Heart Foundation</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">
        Resoruces
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Free (Cheat sheets)</a>
            <a href="#">CPCS Cheat sheet</a>
            <a href="#">Safe prescribing sheet</a>
          </div>
        </div>
        <a href="#home" class="flex items-center cursor-pointer">
          Contact
        </a>
        
      </div>
    </div>
  );
};

export default Navbar_drop;
