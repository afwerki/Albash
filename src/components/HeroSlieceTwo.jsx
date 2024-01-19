import React from "react";
import "./HeroSlieceTwo.scss";
import AI_healthCare from "../images/AI_healthCare.jpeg";
import brent from '../images/brent.png'
import rounded_hero from '../images/two_girls_one_boy.jpeg'
import img2 from '../images/image_2.png'
import {ArrowSmRightIcon} from '@heroicons/react/outline'
import british_heart from '../images/biritsh_heart.png'

import { Link } from "react-router-dom";

const HeroSlieceTwo = () => {
  return (
    <div className="hero_main">
        <div className="moto">
        
          <h1> አልባሽ </h1>
          <h1> ዋናው አላማችን</h1><br />
          <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">Supporting kids</p> 
            </Link>


            <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">creating supproting platform</p> 
            </Link>
            <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">Engage with a greter good </p> 
            </Link>
            <img className="rounded-full hero_img" src={rounded_hero} alt="" />
        </div>
        {/* <div className="hero_image">
          <img src={rounded_hero} alt="" />
          </div> */}

        {/*<div className="small_logos">
          <div className="imagesandtext">
            <img className="imgBrent" src={brent}alt="" />
            <p className="companies_text">Delivering training in  
              best coding practices</p>
             <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">Read more</p> 
            </Link>
          </div>


          <div>
            <img src={img2}alt="" />
            <p className="companies_text">Improving efficiency in
                 working practices of medicspot</p>
             <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">Read more</p> 
            </Link>
          </div>
          <div>
            <img src={british_heart}alt="" />
            <p className="companies_text">Improving efficiency in
                                  working practices of medicspot</p>
             <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">Read more</p> 
            </Link>
          </div>
          <div>
            <img src={british_heart}alt="" />
            <p className="companies_text">Improving efficiency in
                                  working practices of medicspot</p>
             <Link to="Smart_Tools_detail" className="flex items-center text-primary-lightgreen">
               <ArrowSmRightIcon className="w-10  ml-7" /><p className="link_text">Read more</p> 
            </Link>
          </div>
        </div>
        <div className="service_ad">
          <h1 className="">Our Services to cater for the needs of the practice</h1>
          <p className="practis_ad">
          We have taylor made solutions to deal with practice needs on a day to day basis which can help enhance practice 
          performances while at the same time improve care given to the patients.
          </p>
          </div>*/}
      </div>
  );
};

export default HeroSlieceTwo;
