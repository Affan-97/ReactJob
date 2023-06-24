import Cookies from "js-cookie";
import React, { useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
export const Login = () => {
  const { state, functions } = useContext(GlobalContext);
  let { inputLogin } = state;
  let { handleChangeLogin, handleLogin } = functions;
  let history = useHistory();
  if (Cookies.get("token")) {
    history.push("/dashboard");
  }
  
  return (
    <>
    <div className="navbar bg-base-100">
  <Link to="/" className="btn btn-ghost normal-case text-xl">ReactJob.</Link>
</div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    value={inputLogin.email}
                    onChange={handleChangeLogin}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    value={inputLogin.password}
                    onChange={handleChangeLogin}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover"
                    >
                      Need Account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-green-500 hover:bg-green-400 border-none">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
