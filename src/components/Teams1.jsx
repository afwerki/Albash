import React from "react";
import Jay from "../images/Jay.jpg";
import Sukin from "../images/Sukin.jpg";
import Bavana from "../images/Buvana.jpg";
import sasha from "../images/Sascha.jpg";
import darrel from "../images/Darrell.jpg";
import me from "../images/me.jpg";
const Teams1 = () => {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-primary-lightgreen text-3xl text-center font-normal pb-3">
            Our Team
          </p>
          {/* <h1 className="xl:text-3xl text-2xl text-center text-gray-800  pb-6 sm:w-4/6 w-5/6 mx-auto">
          Our Team
          </h1> */}
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
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={darrel}
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className=" text-3xl text-center pb-1">
                    Darrel
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Operations Manager
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Darrell is a passionate believer in the NHS and especially
                    around patient care and how the NHS can better deliver their
                    services in an ever changing environment and deliver the
                    services to all.
                  </p>
                  {/* <div className="w-full flex justify-center pt-5 pb-5">
                    
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="text-3xl text-center pb-1">
                    Tariq
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Product Design Head
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    The emphasis on innovation and technology in our companies
                    has resulted in a few of them establishing global benchmarks
                    in product design and development.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={Bavana}
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className=" text-3xl text-center pb-1">
                    Bhuvana Dhruva
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    AI Engineer
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Bhuvana has a passion for problem solving and believes in
                    working to help improve patient care through her work.
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={sasha}
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className=" text-3xl text-center pb-1">
                    Sascha
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Data Scientist
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Sasha works with DCS on the application of machine learning
                    techniques in identifying asthma patients, as part of a
                    project funded by the Health Foundation
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={me}
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className=" text-3xl text-center pb-1">
                  Afwerki Ghirmay
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                  Software Developer
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                  Afwerki Ghirmay graduated from London South bank
                      University with a Computer Science degree. he recently
                      joined the data care solutions as software developer.
                      <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className=" text-3xl text-center pb-1">
                  Sarah Rees
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Product Design Head
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    The emphasis on innovation and technology in our companies
                    has resulted in a few of them establishing global benchmarks
                    in product design and development.
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className=" text-3xl text-center pb-1">
                  Rob Farrow
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Product Design Head
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    The emphasis on innovation and technology in our companies
                    has resulted in a few of them establishing global benchmarks
                    in product design and development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams1;
