import React from "react";
import Hillingdon from "../images/Hillingdon hosptial_logo.jpeg";
import british from "../images/british heart foundation.jpeg";
import brent from "../images/brent logo.jpeg";
import brunel from "../images/brunel logo.jpeg";

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <p>About Us</p>
          <h2 className="text-5xl font-bold">DATA CARE SOLUTIONS</h2>
          <p className="text-2xl py-6 text-gray-500">
            We have a dedicated team with experience in innovating and
            delivering services to improve efficiency in general practice whilst
            improving patient care and reducing costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100%</p>
            <p className="text-gray-400 mt-2">completed</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">27/7</p>
            <p text-gray-400 mt-2>
              Delivery
            </p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600">100K</p>
            <p text-gray-400 mt-2>
              Transactions
            </p>
          </div>
        </div>
      </div>
      <section id="sponsors" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="mx-auto max-w-2xl text-center font-display text-4xl font-medium
          tracking-tighter text-blue-900 sm:text-5xl"
          >
            Current Companies we work with
          </h2>
          <span  className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nobis.</span>
          <div
            className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center
          gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32"
          >
            <div className="flex items-center justify-center">
              <img
                src={british}
                alt="sponcer"
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                British Heart Foundation{" "}
                </p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  aperiam maiores minima veritatis cum aut, vel non
                  reprehenderit at fugiat harum illo nisi quibusdam consequatur?
                  Provident suscipit illo aspernatur!
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={Hillingdon}
                alt="sponcer"
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                Hillingdon Hospital{" "}
                </p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  aperiam maiores minima veritatis cum aut, vel non
                  reprehenderit at fugiat harum illo nisi quibusdam consequatur?
                  Provident suscipit illo aspernatur!
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={brunel}
                alt="sponcer"
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                Brunel University{" "}
                </p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  aperiam maiores minima veritatis cum aut, vel non
                  reprehenderit at fugiat harum illo nisi quibusdam consequatur?
                  Provident suscipit illo aspernatur!
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={brent}
                alt="sponcer"
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                Brent{" "}
                </p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  aperiam maiores minima veritatis cum aut, vel non
                  reprehenderit at fugiat harum illo nisi quibusdam consequatur?
                  Provident suscipit illo aspernatur!
                </p>
              </div>
            </div>
            
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
