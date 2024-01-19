import React from "react";
import "./Teams_cardFlip.scss";
import jay from "../images/Jay.jpg";
import sukin from "../images/Sukin.jpg";
import Bavana from "../images/Buvana.jpg";
import sasha from "../images/Sascha.jpg";
import darrel from "../images/Darrell.jpg";
import me from "../images/me.jpg";
import { CheckIcon, AcademicCapIcon } from '@heroicons/react/outline';

const Aim = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>ራእያችን/Our vesion</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        Empowering a brighter future!<br/> Your donation equips students with essential learning materials, unlocking their potential and shaping tomorrow's leaders.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <AcademicCapIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Promote Educational Equality:</h3>
              <p className='text-lg pt-2 pb-4'>
              Ensure all children, regardless of their socio-economic background, have access to quality learning materials for a level playing field in education.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AcademicCapIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Enhance Learning Experiences: </h3>
              <p className='text-lg pt-2 pb-4'>
              Provide diverse and engaging learning resources to enrich the educational experiences of children, fostering a love for learning.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AcademicCapIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Bridge the Resource Gap: </h3>
              <p className='text-lg pt-2 pb-4'>
              Address the educational resource disparities by supplying schools and communities with essential materials, narrowing the gap between privileged and underprivileged students.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AcademicCapIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Empower Educators: </h3>
              <p className='text-lg pt-2 pb-4'>
              Support teachers with the tools they need to deliver effective and dynamic lessons, empowering them to inspire and guide young minds.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AcademicCapIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Encourage Lifelong Learning: </h3>
              <p className='text-lg pt-2 pb-4'>
              Instill a culture of lifelong learning by making educational materials accessible to children, encouraging a curiosity-driven approach to knowledge.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AcademicCapIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Foster Creativity: </h3>
              <p className='text-lg pt-2 pb-4'>
              Provide materials that stimulate creativity and critical thinking, nurturing a generation of innovative thinkers and problem solvers.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AcademicCapIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Support Remote Learning: </h3>
              <p className='text-lg pt-2 pb-4'>
              Ensure that children, regardless of their location or circumstances, have the resources required for remote and online learning, especially in times of crisis.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <AcademicCapIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Build a Foundation for Success: </h3>
              <p className='text-lg pt-2 pb-4'>
              Contribute to the academic success and personal development of children by equipping them with the tools needed to build a strong educational foundation for future achievements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Aim;
