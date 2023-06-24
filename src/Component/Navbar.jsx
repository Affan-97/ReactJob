import React from "react";
import { Link, Redirect } from "react-router-dom";
const Navbar = () => {
    
  return (
   <div className="navbar top-0 sticky bg-base-100">
  <div className="navbar-start">
    
    <Link to="/" className="btn btn-ghost normal-case text-xl">ReactJob.</Link>
  </div>

  <div className="navbar-end">
    <Link to="/dashboard" className="btn">Dashboard</Link>
  </div>
</div>
  );
};
export default Navbar;
