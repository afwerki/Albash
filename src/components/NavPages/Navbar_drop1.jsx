import React, { useState } from "react";
import "./Navbar_drop1.css";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../styles/dcsLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCoffee,
  faDatabase,
  faBrain,
  faCheckSquare,
  faRectangleAd,
} from "@fortawesome/free-solid-svg-icons";
const Navbar_drop1 = () => {
  const [nav, setNav] = useState(false);
  const handleClickv = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  return (
    <nav>
      <div class="wrapper">
        <div class="logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul class="nav-links">
          <label for="close-btn" class="btn close-btn">
            <i class="fas fa-times"></i>
          </label>

          <li>
            <a href="#" class="desktop-item">
              About us
            </a>

            <input type="checkbox" id="showDrop" />
            <label for="showDrop" class="mobile-item">
               About us
            </label>
            <ul class="drop-menu">
              <li>
                <a href="#">Company history</a>
              </li>
              <li>
                <a href="#">Team bio</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="desktop-item">
              Solutions
            </a>
            <input type="checkbox" id="showMega" />
            <label for="showMega" class="mobile-item">
              Solutions
            </label>
            <div class="mega-box">
              <div class="content">
                <div class="row">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                </div>
                <div class="row">
                  <header>Products</header>
                  <ul class="mega-links">
                    <li>
                      <a href="#">Smart Searches</a>
                    </li>
                    <li>
                      <a href="#">Smart Flow</a>
                    </li>
                    <li>
                      <a href="#">Population Health Management</a>
                    </li>
                  </ul>
                </div>
                <div class="row">
                  <header>Services</header>
                  <ul class="mega-links">
                    <li>
                      <a href="#">Office Support </a>
                    </li>
                    <li>
                      <a href="#">Asthma and COPD manage</a>
                    </li>
                    <li>
                      <a href="#">Diabetes management</a>
                    </li>
                    <li>
                      <a href="#">Doc Filer</a>
                    </li>
                    <li>
                      <a href="#">Consultancy</a>
                    </li>
                  </ul>
                </div>
                <div class="row">
                  <header>Training</header>
                  <ul class="mega-links">
                    <li>
                      <a href="#">media Terminology</a>
                    </li>
                    <li>
                      <a href="#">Investigating blood results</a>
                    </li>
                    <li>
                      <a href="#">File Away</a>
                    </li>
                    <li>
                      <a href="#">Safe prescribing </a>
                    </li>
                    <li>
                      <a href="#">Medical coding </a>
                    </li>
                    <li>
                      <a href="#">Workflow Optimisation </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" class="desktop-item">
              Case Studies
            </a>
            <input type="checkbox" id="showDrop" />
            <label for="showDrop" class="mobile-item">
              Dropdown Menu
            </label>
            <ul class="drop-menu">
              <li>
                <a href="#">Brent CCG</a>
              </li>
              <li>
                <a href="#">Health Direct Federation</a>
              </li>
              <li>
                <a href="#">Medicspot</a>
              </li>
              <li>
                <a href="#">The Health Foundation</a>
              </li>
              <li>
                <a href="#">The British Heart Foundation</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" class="desktop-item">
              Resources
            </a>
            <input type="checkbox" id="showDrop" />
            <label for="showDrop" class="mobile-item">
              Dropdown Menu
            </label>
            <ul class="drop-menu">
              <li>
                <a href="#">Free (Cheat sheets)</a>
              </li>
              <li>
                <a href="#">CPCS Cheat sheet</a>
              </li>
              <li>
                <a href="#">Safe prescribing sheet</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <label for="menu-btn" class="btn menu-btn">
          <i class="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};

export default Navbar_drop1;
