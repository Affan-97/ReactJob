import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const JobList = () => {
  const { state, functions } = useContext(GlobalContext);
  let {
    dataJob,

    fetchStatus,
    setFetchStatus,
    display,

    filter,
  } = state;
  let {
    getData,
    handleChangeSearch,
    handleSearch,
    handleChangeFilter,
    handleFilter,
    handleSingleData,
  } = functions;
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
    <div className="grid grid-cols-4">
      <div className="px-3">
        <div className="bg-white mx-5 my-3 rounded-md ">
          <div>
            <form onSubmit={handleSearch}>
              <div className="form-control  w-full my-2">
                <div className="input-group w-full">
                  <input
                    type="search"
                    onChange={handleChangeSearch}
                    placeholder="Search…"
                    className="input  w-full input-bordered"
                  />
                  <button className="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-white mx-5 my-3 rounded-md ">
          <div className="text-xl font-medium">Filter</div>
          <div className=" ">
            <form onSubmit={handleFilter}>
              <label className="label">
                <span className="label-text">Job Type</span>
              </label>
              <input
                type="text"
                name="job_type"
                value={filter.job_type}
                onChange={handleChangeFilter}
                placeholder="Filter Type"
                className="input input-bordered w-full "
              />
              <label className="label">
                <span className="label-text">Job Tenure</span>
              </label>
              <input
                type="text"
                name="job_tenure"
                value={filter.job_tenure}
                onChange={handleChangeFilter}
                placeholder="Input Job Tenure"
                className="input input-bordered w-full "
              />
              <label className="label">
                <span className="label-text">Company City</span>
              </label>
              <input
                type="text"
                name="company_city"
                value={filter.company_city}
                onChange={handleChangeFilter}
                placeholder="Input Job Tenure"
                className="input input-bordered w-full "
              />
              <button className="btn btn-success w-full my-3">Filter</button>
            </form>
            <button
              onClick={() => setFetchStatus(true)}
              className="btn btn-warning btn-square"
            >
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-3 w-full  bg-gray-200 flex flex-col text-center justify-items-start ">
        <div className="flex flex-col container min-h-screen  mx-auto w-full items-center justify-center bg-green-300  rounded-lg shadow">
          <ul className="flex flex-col divide-y w-full mt-8 p-6">
            {display ? (
              <li>
                <progress className="progress w-full"></progress>
              </li>
            ) : (
              <>
                {dataJob.length > 0 ? (
                  dataJob.map((data) => (
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
                  <li>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-40 w-40 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        />
                      </svg>

                      <h1 className="text-9xl text-gray-500">Data Kosong</h1>
                    </div>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default JobList;
