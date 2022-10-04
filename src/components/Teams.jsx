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
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-2xl rounded-full mx-auto"
          src={Jay}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          
        <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
          <blockquote>
            <p class="text-lg font-medium">
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
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={Sukin}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
          <blockquote>
            <p class="text-lg font-medium">
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
      </figure>
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
      </tbody>
       
    
  </table>
</div>
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-2xl rounded-full mx-auto"
          src={darrel}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
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
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={sasha}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
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
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
       */}
      
     
    </div>
  );
};

export default Teams;
