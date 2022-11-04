import React from "react";
import "./Talk_to_us.css";
import { Link } from "react-router-dom";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import desktop from "../images/Desktop.png";
import EnhancePatients from "../images/EnhancePatients.png";
import EnhancePerformance from "../images/EnhancePerformance.png";
const Talk_to_us = () => {
  return (
    <div className="talkTo_us">
   
      <div className="textShap">
        <p>TALK TO US</p>
        <br />
        <br />
        <p className="howCanIHelpYou">Interested in how we can help you?</p>
      </div>

      <div>
        <Link
          to="Smart_Tools_detail"
          className="flex items-center text-primary-lightgreen"
        >
          <ArrowSmRightIcon className="w-12  ml-7" />
          <p className="link_text">Contact Us</p>
        </Link>
      </div>



        <div className="other_section">
        <div>
          <img className="disktop" src={desktop} alt="" />
          <p>
          Data Care Solutions
Products, Services and Training
          </p>
        </div>
        <div>
          <img src={EnhancePatients} alt="" />
          <p>
          Enhance Patient
access and care
          </p>
        </div>
        <div>
          <img src={EnhancePerformance}alt="" />
          <p>
          Enhance Performance and reduce workload
          </p>
        </div>
      </div>
    </div>
  );
};

export default Talk_to_us;
