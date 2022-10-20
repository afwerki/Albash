import React from "react";


export const File_Away = () => {
  return (
    <div className="lg:pl-[19.5rem]">
      <div className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <div className="relative z-20">
          <p className="mb-2 text-sm leading-6 font-semibold text-primary-olivedrab ">
            Concepts
          </p>
          <h1 className="inline-block text-2xl sm:text-3xl text-slate-900 tracking-tight dark:text-slate-200">
            File Away
          </h1>
          <div className="flex items-center">
            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 ">
              <img
                class="w-24 h-24 md:w-48 md:h-auto md:rounded-md rounded-full mx-auto"
                src="https://images.unsplash.com/photo-1581782834895-b2a5347d0db8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZpbGUlMjBmb2xkZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                width="384"
                height="512"
              ></img>
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p class="text-black text-1xl">
                    Did you know that an average GP would spend nearly five
                    hours per week filing documents? Would you like to change
                    the process in your practice to free up GP time whilst
                    filing your documents safely?
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
        </div>

        <div
          id="content-wrapper"
          className="relative z-20 prose prose-slate mt-8 dark:prose-dark"
        >
          <ul
            role="list"
            class="list-disc pl-5 space-y-3 text-slate-500"
          >
            <li>
              DCS will provide training and support tools to minimise GP time
              spent on filing documents
            </li>
            <li>
              Designed in collaboration with experts in risk management in the
              airline and the financial industry
            </li>
            <li>
              Learn how to ensure quality assurance and clinical safety are met
            </li>
            <li>
              Reduce time (approximately 240 hours for 1 FTE GP per year) and
              cost by working through a safe, effective and proven process
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
