import React from "react";
import Jay from "../images/Jay.jpg";
import Sukin from "../images/Sukin.jpg";
import Bavana from "../images/Buvana.jpg";
import sasha from "../images/Sascha.jpg";
import darrel from "../images/Darrell.jpg";
import me from "../images/me.jpg";

const Teams = () => {
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-12 md:p-0 text-primary-lightgreen">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src={Jay}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <div class="text-primary-lightgreen font-sans-serif">
              Dr. Jay Verma
            </div>
            <div class="text-slate-700 dark:text-slate-500 font-sans-serif">
              Chief Executive Officer
            </div>
          </figcaption>
          <blockquote>
            <p class="text-md font-light font-sans-serif">
              Jay is a partner at Shakespeare Health Centre and the Chief
              Executive Officer of Data Care Solutions. He enjoys redesigning
              clinical services to improve patients’ well-being. He believes
              sharing knowledge and collaborative work are fundamental to
              improving patients’ well-being. He is actively involved in various
              programmes to help improve primary care workload, so patients
              achieve better health outcomes. Working as a practising GP helps
              him understand the barriers in primary care well and thus can
              address the solutions effectively. His team has won several awards
              illustrating best practices. He is always happy to hear from
              individuals and organisations with similar views.
            </p>
          </blockquote>
        </div>
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src={Sukin}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <div class="text-primary-lightgreen font-sans-serif">
              Dr. Sukin Natarajan
            </div>
            <div class="text-slate-700 dark:text-slate-500 font-sans-serif">
              Chief Technology Officer
            </div>
          </figcaption>
          <blockquote>
            <p class="text-md font-light font-sans-serif">
              A partner at Heathrow Medical Centre, Sukin has extensive
              experience in helping Hillingdon CCG with the roll out of IT
              programmes for local practices. He was instrumental in helping
              their local federation, Clover Health (CH) navigate its way
              through IT and clinical governance issues. His input was
              invaluable and helped CH win the General Practice Awards in 2017
              for the Clinical Team of the Year for Paediatrics. Sukin has over
              20 years of experience in finance management within the NHS. After
              gaining a PhD from Brunel University in medical engineering, Sukin
              was also a lecturer in Biomedical Sciences in the Masters
              programme at Brunel. His IT knowledge has been instrumental in
              connecting all of the local practices together.
            </p>
          </blockquote>
        </div>
      </figure>
      <div className="pb-16 font-sans-serif">
        {/* Code block starts */}
        <dh-component>
          <section className="max-w-8xl mx-auto container bg-white pt-16">
            <div>
              <div
                role="contentinfo"
                className="flex items-center flex-col px-4"
              ></div>
              <div
                tabIndex={0}
                aria-label="group of cards"
                className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
              >
                <div
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                    <div class="w-24 h-24 rounded-full mx-auto">
                      <img src={darrel} alt="drawer" width="384" height="512" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                    >
                      Darrel
                    </h2>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Darrell Clamp is the new Operations Manager for
                      Datacaresolutions and joined in August 2022. He have come
                      from a varied background starting with 22 years in the
                      British Army from the age of 18, to the past 10 years of
                      working in the Oil and Gas Industry. Darrell is a
                      passionate believer in the NHS and especially around
                      patient care and how the NHS can better deliver their
                      services in an ever changing environment and deliver the
                      services to all.
                    </p>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  aria-label="card 2"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src={Bavana} alt="check" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Bhuvana Dhruva
                    </h2>
                    <span>AI Engineer</span>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Bhuvana Dhruva holds a master's degree in Advanced
                      Computer Science from the University of Reading. As a
                      machine learning engineer, she helps translate business
                      problems to AI solutions. She has been instrumental in
                      developing machine learning models to help identify asthma
                      patients in primary care for the Health Foundation
                      project. She has worked on many natural language
                      processing (NLP) projects and also has a publication in
                      her portfolio. Bhuvana has a passion for problem solving
                      and believes in working to help improve patient care
                      through her work. Has been a solutions developer in the
                      past providing reporting solutions to clients
                    </p>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  aria-label="card 3"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src={sasha} alt="html tag" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Sascha
                    </h2>
                    <span>Data Scientist</span>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Sascha started my his career as a researcher in
                      computational materials science, where he was modelling
                      materials exposed to the extreme conditions experienced in
                      a fusion reactor. Subsequently he spent 10 years in the
                      financial services, primary in roles focussed on
                      processing and analysing financial data. During this time,
                      he became qualified as a Professional Risk Manager (PRM)
                      in finance. In 2020 Sascha started working with DCS on the
                      application of machine learning techniques in identifying
                      asthma patients, as part of a project funded by the Health
                      Foundation
                    </p>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  aria-label="card 4"
                  className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                >
                  <div className="w-20 h-20 relative mr-5">
                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                    <div className="absolute text-white bottom-0 left-0 bg-indigo-700 rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img src={me} alt="monitor" />
                    </div>
                  </div>
                  <div className="w-10/12">
                    <h2
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                    >
                      Afwerki Ghirmay
                    </h2>
                    <span>Software Developer</span>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                    >
                      Afwerki Ghirmay graduated from London South bank
                      University with a Computer Science degree. he recently
                      joined the data care solutions as software developer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </dh-component>
      </div>
    </div>
  );
};

export default Teams;
