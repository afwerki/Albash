import React from "react";

const Demand = () => {
  return (
    <div className="flex flex-col p1-0 w-full lg:p1-2">
      <main className="pt-24 pb-1 md:px-4 lg:px-6 2xl:px-80">
        <div className="flex flex-wrap mt-12 2xl:mt-32">
          <div className="p-2 w-full md:w-6/12">
            <h1 className="text-primary-olivedrab font-inter text-2xl lg:text-3xl">
              Demand & Capacity Modelling
            </h1>
            <div className="text-gray-700 text-lg">
              <h2 className="mb-4 mt-12">
                Do you often feel that you offer enoughappointments, but
                patients still feel discontent? <br />
                Do you feel your workplace needs significant change to improve
                patient access?
                <br />
                DCS could change the way you work and provide better patient
                access.
              </h2>
              <h3 className="">
                Analyse your demand and capacity data through our suite of
                searches. Identify options on how you may want to handle patient
                requests to free up face to face appointments. Improve both
                clinical and administrative staff work / life balance. Help
                practices improve their registers
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Demand;
