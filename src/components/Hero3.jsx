import React from "react";
import dcs_pic from "../images/dcs_pic.png";
// import "./Hero3.css";

const Hero3 = () => {
  return (
    <div>
      <section id="hero-area" class="bg-blue-100 pt-48 pb-10">
      <div class="container">
        <div class="flex justify-between">
          <div class="w-full text-center">
            <h2 class="text-4xl font-bold leading-snug text-gray-700 mb-10 wow fadeInUp" data-wow-delay="1s">Startup and SaaS Landing Page
              <br class="hidden lg:block"/> Built with TailwindCSS</h2>
            <div class="text-center mb-10 wow fadeInUp" data-wow-delay="1.2s">
              <a href="#"
                rel="nofollow"
                class="btn">Download Now</a>
            </div>
            <div class="text-center wow fadeInUp" data-wow-delay="1.6s">
              <img class="img-fluid mx-auto" src={dcs_pic} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
       
    </div>
  );
};

export default Hero3;
