import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AlertRegister } from "../Alert/Alerts";
import { GlobalContext } from "../Context/GlobalContext";
import Cookies from "js-cookie";

export const Register = () => {
  let history = useHistory();
  if (Cookies.get("token")) {
    history.push("/dashboard");
  }
  const { state, functions } = useContext(GlobalContext);
  let {
    inputRegister,
    displayAlerts,
    setDisplayAlerts,
  } = state;
  let {
    handleRegister,

    handleChangeRegister,
  } = functions;
  useEffect(() => {
    if (displayAlerts) {
      setTimeout(() => {
        setDisplayAlerts(false);
      }, 3000);
    }
  });
  return (
    <>
      <div className="navbar bg-base-100">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          ReactJob.
        </Link>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <div className="grid grid-cols-2">
                  <div className="mx-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Nama</span>
                      </label>
                      <input
                        type="text"
                        value={inputRegister.name}
                        onChange={handleChangeRegister}
                        name="name"
                        placeholder="Full Name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        value={inputRegister.email}
                        onChange={handleChangeRegister}
                        name="email"
                        placeholder="example@example.com"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo</span>
                      </label>
                      <input
                        type="text"
                        value={inputRegister.image_url}
                        onChange={handleChangeRegister}
                        name="image_url"
                        placeholder="Image_url"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        value={inputRegister.password}
                        onChange={handleChangeRegister}
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-control mt-6">
                  <label className="label">
                    <Link to="/login" className="label-text-alt link link-hover">
                      Already Have Account?
                    </Link>
                  </label>
                  <button className="btn bg-green-500 hover:bg-green-400 border-none">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          {displayAlerts && <AlertRegister />}
        </div>
      </div>
    </>
  );
};
