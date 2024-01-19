import React from "react";
import "./Teams_cardFlip.scss";
import jay from "../images/Jay.jpg";
import sukin from "../images/Sukin.jpg";
import Bavana from "../images/Buvana.jpg";
import sasha from "../images/Sascha.jpg";
import darrel from "../images/Darrell.jpg";
import me from "../images/me.jpg";

const Teams_cardFlip = () => {
  return (
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex flex-col lg:flex-row justify-between gap-8">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">
                    Alabsh Ethiopia is a recently established charitable organization committed to transforming the lives of underprivileged children in Ethiopia by providing them with the essential learning materials they need to thrive academically. Our mission is rooted in the belief that 
                    education is a powerful tool for breaking the cycle of poverty, 
                    and every child deserves the opportunity to learn and grow.</p>
                    <br></br>
                    <h3 className="text-3xl">Building Futures through Education</h3>

                       At Albash Ethiopia, we envision a future where every child in Ethiopia has access to quality education, 
                       regardless of their socio-economic background. We believe that education is the key to unlocking a brighter 
                       and more prosperous future for individuals, families, and communities. By focusing on providing learning materials, 
                       we aim to address a critical barrier that many children face in pursuing their education.

                </div>
                
                <div class="w-full lg:w-8/12">
                    <img class="w-full h-full" src={me}alt="A group of People" />
                </div>
            </div>
    
            <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Story</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
            </div>
        </div>
  );
};

export default Teams_cardFlip;
