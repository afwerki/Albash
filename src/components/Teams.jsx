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
      <div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
              <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                Our Team
              </h1>
              {/* <h3 class="text-xl mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3> */}
              <div class="text-center mb-10">
                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <figure class="md:flex bg-slate-100 rounded-xl p-12 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src={Jay}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400 font-sans-serif">
              {" "}
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
            <div class="text-sky-500 dark:text-sky-400 font-sans-serif">
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
            <div class="-mx-3 md:flex items-start">
              <div class="px-3 md:w-1/3">
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={darrel} alt=""></img>
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm  text-gray-600">
                      Darrell
                      </h6>
                      <p className="text-gray-800 text-sm">
                    Operations Manager
                  </p>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Darrell is a passionate believer in the NHS and especially
                    around patient care and how the NHS can better deliver their
                    services in an ever changing environment and deliver the
                    services to all.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt=""></img>
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                      Tariq
                      </h6>
                      <p className="text-gray-800 text-sm">
                      Product Design Head
                  </p>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      The emphasis on innovation and technology in our companies
                    has resulted in a few of them establishing global benchmarks
                    in product design and development.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-3 md:w-1/3">
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={Bavana} alt=""></img>
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                      Bhuvana Dhruva
                      </h6>
                      <p className="text-gray-800 text-sm">
                    AI Engineer
                  </p>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Bhuvana has a passion for problem solving and believes in
                    working to help improve patient care through her work.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={sasha} alt=""></img>
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                      Sascha
                      </h6>
                      <p className="text-gray-800 text-sm">
                    Data Scientist
                  </p>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Sasha works with DCS on the application of machine learning
                    techniques in identifying asthma patients, as part of a
                    project funded by the Health Foundation
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="px-3 md:w-1/3">
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={me} alt=""></img>
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                      Afwerki Ghirmay
                      </h6>
                      <p className="text-gray-800 text-sm">
                  Software Developer
                  </p>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Afwerki Ghirmay graduated from London South bank
                      University with a Computer Science degree. he recently
                      joined the data care solutions as software developer.
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div class="w-full flex mb-4 items-center">
                    <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=6" alt=""></img>
                    </div>
                    <div class="flex-grow pl-3">
                      <h6 class="font-bold text-sm uppercase text-gray-600">
                      Sarah Rees
                      </h6>
                      <p className="text-gray-800 text-sm">
                    Product Design Head
                  </p>
                    </div>
                  </div>
                  <div class="w-full">
                    <p class="text-sm leading-tight">
                      <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem iusto, explicabo, cupiditate quas totam!
                      <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
