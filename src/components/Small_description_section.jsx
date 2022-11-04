import React from "react";
import "./Small_description_section.css";
import rounded_hero from "../images/hero_rounded.png";
import img2 from "../images/image_2.png";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import british_heart from "../images/biritsh_heart.png";
import Demand_Capacity from "../images/Demand_Capacity.png";
import improve_perfromance from "../images/improve_perfromance.png";
import LISLES from "../images/LISLES 1.png";
import { Link } from "react-router-dom";

const Small_description_section = () => {
  return (
    <div className="decriptions">

      <div className="sm_containers">
        <div className="text_shaper">
          
        <br />
        <h2 className="discription_title_two">products</h2>
        <br />
        <h1 className="discription_title_one">Smart Flow</h1>

        <br />
        <br />
        <div className="container">
          <p className="textAdd">
            Improve practice efficiency by spending GP time on patients who need
            it the most. We are able to predict with high accuracy which
            patients should have been seen by GP and which patients should have
            been seen by someone else.
            <br />
            <br />

        <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">Read more</p> 
            </Link>
          </p>
          <img className="desc_images" src={Demand_Capacity} alt="" />
        </div>
      </div>
      </div>
      
      
      
      <br />

      <div className="sm_containers">
      <div className="text_shaper">
      <br />
        <h2 className="discription_title_two">Services</h2>
        <br />
        <h1 className="discription_title_one">Consultancy</h1>
        <br />
        <div className="container">
          <p>
            We are very good at teaching you how to practice what we preach
            without actually practising what we preach however we should be able
            to do a good job with it. Tell me how we are doing and we will show
            it back in to your mouth.
            <br />
            <br />

        <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">Read more</p> 
            </Link>
          </p>
          <img className="desc_images" src={improve_perfromance} alt="" />
        </div>
      </div>
      </div>

      <br />


      <div className="sm_containers">
      <div className="text_shaper">
      <br />
        <h2 className="discription_title_two">TRAINING</h2>
        <br />
        <h1 className="discription_title_one">Medical Coding</h1>
        <br />
        <div className="container">
          <p> 
            We have held several workshops to help practices improve their
            coding practices which has led to us really improving coding. Not
            that we do it ourselves any way. You are more than welcome to come
            and see us and participate if you wish.
            <br />
            <br />

        <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">Read more</p> 
            </Link>
          </p>

          <img className="desc_images" src={LISLES} alt="" />
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Small_description_section;
