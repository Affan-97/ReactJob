import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Detail = () => {
  const { state, functions } = useContext(GlobalContext);
  let {} = functions;
  let { SingleData } = state;
  function formatRupiah(angka) {
    var rupiah = "";

    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
      if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  }
  function JobStatus(value) {
    if (value === 1) {
      return (
        <div className="bg-green-500 py-1 px-2 rounded text-white text-sm">
          Open
        </div>
      );
    } else {
      return (
        <div className="bg-red-700  py-1 px-2 rounded text-white text-sm">
          Closed
        </div>
      );
    }
  }
  return (
    <div className="container min-h-screen bg-gray-50 rounded mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="bg-white p-3 border-t-4 border-green-400">
            <div className="image overflow-hidden">
              <img
                className="h-auto w-full mx-auto"
                src={SingleData.company_image_url}
                alt=""
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              {SingleData.title}
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              {SingleData.company_name}
            </h3>
            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              {SingleData.job_description}
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto">
                  <span className="">{JobStatus(SingleData.job_status)}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-9/12 mx-2 h-64">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Detail</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Company Name</div>
                  <div className="px-4 py-2">{SingleData.company_name}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Company City</div>
                  <div className="px-4 py-2">{SingleData.company_city}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Job Type</div>
                  <div className="px-4 py-2">{SingleData.job_type}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Job Tenure</div>
                  <div className="px-4 py-2">{SingleData.job_tenure}</div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Min Salary</div>
                  <div className="px-4 py-2">
                    {formatRupiah(SingleData.salary_min)}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Max Salary</div>
                  <div className="px-4 py-2">
                    {formatRupiah(SingleData.salary_max)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4" />
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">Qualification</span>
            </div>
            <div className="text-gray-700">{SingleData.job_qualification}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
