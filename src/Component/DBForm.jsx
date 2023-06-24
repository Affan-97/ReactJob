import React, { useContext, useEffect } from "react";
import { AlertSubmit } from "../Alert/Alerts";
import { GlobalContext } from "../Context/GlobalContext";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";

const DBForm = () => {
  let history = useHistory();
  if (!Cookies.get("token")) {
    history.push("/login");
  }
  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/login");
  };
  const { state, functions } = useContext(GlobalContext);
  let { handleSubmit, handleChange } = functions;
  let { inputJob, displayAlerts, setDisplayAlerts } = state;
  useEffect(() => {
    if (displayAlerts) {
      setTimeout(() => {
        setDisplayAlerts(false);
      }, 3000);
    }
  });
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




      <div className="container w-full bg-white px-6 py-6 mx-auto">
      <h1>Add New Data</h1>
      <hr />
      <form onSubmit={handleSubmit} method="post">
        <div className="form-control w-full grid grid-cols-2 ">
          <div className="p-6">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={inputJob.title}
              onChange={handleChange}
              placeholder="Input Job Title"
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <input
              type="text"
              name="job_type"
              value={inputJob.job_type}
              onChange={handleChange}
              placeholder="Input Job Type"
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Job Tenure</span>
            </label>
            <input
              type="text"
              name="job_tenure"
              value={inputJob.job_tenure}
              onChange={handleChange}
              placeholder="git commit"
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company_name"
              value={inputJob.company_name}
              onChange={handleChange}
              placeholder="Input Company Name"
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Company City</span>
            </label>
            <input
              type="text"
              name="company_city"
              value={inputJob.company_city}
              onChange={handleChange}
              placeholder="Input Comapany City"
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Company Image</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 w-full resize-none"
              placeholder="Image_url"
              name="company_image_url"
              value={inputJob.company_image_url}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2">
              <div>
                <label className="label">
                  <span className="label-text">Min Salary</span>
                </label>
                <input
                  type="number"
                  name="salary_min"
                  value={inputJob.salary_min}
                  onChange={handleChange}
                  placeholder="Input Min Salary"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="ml-3">
                <label className="label">
                  <span className="label-text">Max Salary</span>
                </label>
                <input
                  type="number"
                  name="salary_max"
                  value={inputJob.salary_max}
                  onChange={handleChange}
                  placeholder="Input Max Salary"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <label className="label">
              <span className="label-text">
                Status (1 for Open, 0 for Closed)
              </span>
            </label>
            <input
              type="number"
              name="job_status"
              value={inputJob.job_status}
              onChange={handleChange}
              placeholder="Input Job Sttus"
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 w-full resize-none"
              placeholder="Description"
              name="job_description"
              value={inputJob.job_description}
              onChange={handleChange}
            ></textarea>
            <label className="label">
              <span className="label-text">Job Qualification</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 w-full resize-none"
              placeholder="Qualification"
              name="job_qualification"
              value={inputJob.job_qualification}
              onChange={handleChange}
            ></textarea>
            <button className="btn btn-success w-full mt-14">Submit</button>
          </div>
        </div>
      </form>
      {displayAlerts && <AlertSubmit />}
    </div>



        
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
export default DBForm;
