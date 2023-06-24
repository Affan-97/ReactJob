import Cookies from "js-cookie";
import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AlertDelete } from "../Alert/Alerts";
import { GlobalContext } from "../Context/GlobalContext";
const TableComp = () => {
  let history = useHistory();
  if (!Cookies.get("token")) {
    history.push("/login");
  }
  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/login");
  };

  const { state, functions } = useContext(GlobalContext);
  let {
    dataJob,
    fetchStatus,
    setFetchStatus,
    display,
    displayAlerts,
    setDisplayAlerts,
    filter,
  } = state;
  let {
    getData,
    handleEdit,
    handleDelete,
    handleChangeSearch,
    handleSearch,
    handleChangeFilter,
    handleFilter,
    
  } = functions;
  useEffect(() => {
    if (fetchStatus) {
      getData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  useEffect(() => {
    if (displayAlerts) {
      setTimeout(() => {
        setDisplayAlerts(false);
      }, 3000);
    }
  });
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
      return <div className="badge badge-success gap-2">Open</div>;
    } else {
      return <div className="badge badge-error gap-2">Closed</div>;
    }
  }
  return (
    <>
    <div className="navbar bg-emerald-500">
        <div className="navbar-start">
          <label
            tabIndex={0}
            className="md:hidden btn btn-ghost btn-circle drawer-button "
            htmlFor="sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>

        <div className="navbar-center">
          <p className="font-bold text-white normal-case text-xl">ReactJob.</p>
        </div>
        <div className="navbar-end">
          <Link to="/" className="btn btn-square btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-emerald-500 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard/profile"className="justify-between">
                  Profile
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow bg-base-200 drawer drawer-mobile ">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center   drawer-content">


      <div className="container relative overflow-x-auto   w-full px-6 py-6 mx-auto">
        <form onSubmit={handleSearch}>
          <div className="form-control  w-full my-2">
            <div className="input-group w-full">
              <input
                type="search"
                onChange={handleChangeSearch}
                placeholder="Search…"
                className="input ml-5 w-1/2 input-bordered"
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

        <div className="collapse collapse-arrow w-1/2 bg-white shadow-sm mx-5 my-3 rounded-md ">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Filter</div>
          <div className="collapse-content ">
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
        <table className="w-full text-sm text-left text-gray-500 mx-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Logo
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Qualification
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Tenure
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Min Salary
              </th>
              <th scope="col" className="px-6 py-3">
                Max Salary
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {display ? (
              <tr className="">
                <td colSpan={13}>
                  <p>
                    <progress class="progress w-full"></progress>
                  </p>
                </td>
              </tr>
            ) : (
              <>
                {dataJob.length > 0 ? (
                  dataJob.map((data, index) => (
                    <tr className="bg-white border-b hover:bg-gray-50 ">
                      <td className="w-4 p-4">{index + 1}</td>
                      <td scope="row" className="w-4 px-2 py-4 ">
                        <img src={data.company_image_url} className="w-32" />
                      </td>
                      <th
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap w-65 max-w-[10px] text-ellipsis overflow-hidden"
                      >
                        {data.title}
                      </th>
                      <td
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap max-w-[10px] text-ellipsis overflow-hidden w-6"
                      >
                        {data.company_name}
                      </td>
                      <td
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap max-w-[10px] text-ellipsis overflow-hidden"
                      >
                        {data.job_description}
                      </td>
                      <td
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap max-w-[10px] text-ellipsis overflow-hidden"
                      >
                        {data.job_qualification}
                      </td>
                      <td
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap max-w-[10px] text-ellipsis overflow-hidden"
                      >
                        {data.job_type}
                      </td>
                      <td
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap max-w-[10px] text-ellipsis overflow-hidden"
                      >
                        {data.job_tenure}
                      </td>
                      <td
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap max-w-[10px] text-ellipsis overflow-hidden"
                      >
                        {data.company_city}
                      </td>
                      <td
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap max-w-[10px] text-ellipsis overflow-hidden"
                      >
                        {JobStatus(data.job_status)}
                      </td>
                      <td
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap max-w-[10px] text-ellipsis overflow-hidden"
                      >
                        {formatRupiah(data.salary_min)}
                      </td>
                      <td
                        scope="row"
                        className="px-2 py-4 font-medium text-gray-900  whitespace-nowrap max-w-[10px] text-ellipsis overflow-hidden"
                      >
                        {formatRupiah(data.salary_max)}
                      </td>

                      <td className="px-3 py-4 text-right">
                        <div>
                          <button
                            onClick={handleEdit}
                            value={data.id}
                            className="btn btn-square btn-info mx-2 "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>

                          <button
                            onClick={handleDelete}
                            value={data.id}
                            className="btn btn-square btn-error "
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={13} className="text-center text-4xl font-bold">
                      <b>No Data</b>
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
      {displayAlerts && <AlertDelete />}
      
      </div>
        <div className="drawer-side rounded-md">
          <label htmlFor="sidebar" className="drawer-overlay" />
          <ul className="menu  p-3 border  rounded-md overflow-y-auto w-80 bg-base-100 text-base-content">
            <li className="menu-title">
              <span>Menu</span>
            </li>
            <li>
              <Link to="/dashboard/list-job-vacancy" className="focus:bg-emerald-500">
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
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Data Table
              </Link>
            </li>
            <li>
              <Link to="/dashboard/list-job-vacancy/create"  className="focus:bg-emerald-500">
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Input Data
              </Link>
            </li>
            <li>
              <Link to="/dashboard/change-password"  className="focus:bg-emerald-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>
                Change Password
              </Link>
            </li>
            <li>
              <a onClick={handleLogout}  className="focus:bg-emerald-500">
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Me</p>
        </div>
      </footer>
    </>
  );
};
export default TableComp;
