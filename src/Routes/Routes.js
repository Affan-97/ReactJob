import React from "react";

import {
  Switch,
  Route,
  BrowserRouter as Router,
  
} from "react-router-dom";
import { Login } from "../AuthComponent/Login";
import { Register } from "../AuthComponent/Register";
import ChangeForm from "../Component/ChangeForm";
import DBForm from "../Component/DBForm";
import Detail from "../Component/Detail";
import { Footer } from "../Component/Footer";
import Hero from "../Component/Hero";
import JobList from "../Component/JobList";
import JobListLP from "../Component/JoblistLP";
import Navbar from "../Component/Navbar";
import { Nopage } from "../Component/Nopage";
import { Profile } from "../Component/Profile";
import TableComp from "../Component/TableComp";
import { DataProvider } from "../Context/GlobalContext";
import Dashboard from "../Page/Dashboard";


const Routes = () => {
  return (
    <Router>
      <DataProvider>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Hero />
            <JobListLP />
            <Footer />
          </Route>
          <Route exact path="/landing">
            <Navbar />
            <Hero />
            <JobListLP />
            <Footer />
          </Route>
          <Route exact path="/landing/job-vacancy">
            <Navbar />
            <JobList />
            <Footer />
          </Route>

          <Route exact path="/landing/job-vacancy/detail/:slug">
            <Navbar />
            <Detail />
            <Footer />
          </Route>

          <Route  exact path="/dashboard">
            <Dashboard/>
        </Route>

        <Route   exact path="/dashboard/list-job-vacancy">
          <TableComp/>
        </Route>
        <Route exact path="/dashboard/list-job-vacancy/create">
          <DBForm />
        </Route>
        <Route path="/dashboard/list-job-vacancy/edit/:slug">
          <DBForm />
        </Route>
        <Route   path="/dashboard/change-password">
          <ChangeForm/>
        </Route>
        <Route   path="/dashboard/profile">
          <Profile/>
        </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route>
            <Nopage />
          </Route>
        </Switch>
      </DataProvider>
    </Router>
  );
};
export default Routes;
