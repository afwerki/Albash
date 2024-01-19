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
  
  return(
    <div name='hero_main' className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
    <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
      <svg
        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none slice"
      >
        <path d="M50 0H100L50 100H0L50 0Z" />
      </svg>
      <img
        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        src="https://media.istockphoto.com/id/1634669289/photo/african-little-girls-during-the-class-east-africa.jpg?s=612x612&w=0&k=20&c=8ayH4aet6SMNlnLNQZiGnZlo3H0rog2aKF-JaxzuiHg="
        alt=""
      />
    </div>
    <div className="relative flex flex-col mt-5 items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
      <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        አልባሽ 
          <br className="hidden md:block" />
          ዋናው አላማችን {' '}
          <span className="inline-block text-deep-purple-accent-400">
          የቻልነውን ማድረግ ነው።
          </span>
        </h2>
        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
        እኛ ለሻ የምናጠፋትን ብናጠራቅም የአንድ ህፃን የመኖር ተስፋውን እናለምንማለን።
        </p>
        <div className="flex items-center">
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-sky-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more about what we do
          </a>
        </div>
      </div>
    </div>
  </div>

)
};

export default HeroSlieceTwo;
