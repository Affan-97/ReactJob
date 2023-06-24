import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

const JobListLP = () => {
  const { state, functions } = useContext(GlobalContext);
  let { dataJob, fetchStatus, setFetchStatus, display } = state;
  let { getData, handleSingleData } = functions;
  useEffect(() => {
    if (fetchStatus) {
      getData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

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

  return (
    <div className="w-full  flex flex-col text-center justify-items-start my-10">
      <h1 className="text-center text-4xl pt-10 mt-6 font-bold ">
        Browse Job 
      </h1>
      <p className="text-2xl py-4 font-bold text-gray-500">
       These are Our Recommended job. Feel Free to Choose a Job That You Iterested In
      </p>

      <div className="flex flex-col container  mt-10 mx-auto w-full items-center justify-center bg-green-300  rounded-lg shadow">
        <ul className="flex flex-col divide-y w-full mt-8 p-6">
          {display ? (
            <li>
              <progress className="progress w-full"></progress>
            </li>
          ) : (
            <>
              {dataJob.length > 0 ? (
                dataJob
                  .filter((data, index) => {
                    return index < 3;
                  })
                  .map((data) => (
                    <li className="w-full rounded-md my-4 bg-white">
                      <div class="grid grid-cols-5 h-[100px] gap-2 ">
                        <div className="flex flex-col text-center items-center justify-center">
                          <img
                            src={data.company_image_url}
                            className="w-28 mx-auto"
                          />
                        </div>
                        <div className=" flex flex-col text-center justify-center">
                          <h2 className="font-bold">{data.title}</h2>
                          <p>{data.company_name}</p>
                        </div>
                        <div className="flex flex-col text-center font-bold justify-center">
                          <p>{data.company_city}</p>
                        </div>
                        <div className="flex flex-col text-center font-bold justify-center">
                          <p>
                            {formatRupiah(data.salary_min)} -{" "}
                            {formatRupiah(data.salary_max)}
                          </p>
                        </div>
                        <div className="flex flex-col text-center font-bold justify-center">
                          <div className="badge mx-auto my-3 badge-accent badge-outline">
                            {data.job_type}
                          </div>

                          <hr />
                          <div className="badge mx-auto my-3 badge-accent badge-outline">
                            {data.job_tenure}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1  bg-gray-300">
                        <button
                          onClick={handleSingleData}
                          value={data.id}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded "
                        >
                          Apply Now
                        </button>
                      </div>
                    </li>
                  ))
              ) : (
                <li>Data Kosong</li>
              )}
            </>
          )}
        </ul>
        
        <Link to="/landing/job-vacancy/" className="btn btn-wide my-8"> More Job </Link>
      </div>
    </div>
  );
};
export default JobListLP;
