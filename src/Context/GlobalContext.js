import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export const GlobalContext = createContext();

export const DataProvider = (props) => {
  let history = useHistory();
  const [dataJob, SetDataJob] = useState([]);
  const [SingleData, setSingledata] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [display, setDisplay] = useState(false);

  const [displayAlerts,setDisplayAlerts] = useState(false);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    job_type: "",
    job_tenure: "",
    company_city: "",
  });
  const [currentId, setCurrentId] = useState(null);
  const [inputJob, setInputJob] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: null,
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: null,
    salary_max: null,
  });

  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });

  const [inputRegister, setInputRegister] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const handleChangeFilter = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setFilter({ ...filter, [name]: value });
  };
  const handleFilter = (event) => {
    event.preventDefault();
    let getitem = async () => {
      setDisplay(true);
      let { data } = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy`
      );

      let array = data.data;
      console.log(array);
      let filterData = array.filter((res) => {
        return (res.job_type).toLowerCase() === (filter.job_type).toLowerCase() ||
          (res.job_tenure).toLowerCase() === (filter.job_tenure).toLowerCase() ||
          (res.company_city).toLowerCase() === (filter.company_city).toLowerCase()
        
      });
      console.log(filterData);
      setDisplay(false);
      SetDataJob([...filterData]);
      console.log(dataJob);
    };
    getitem();
  };
  const handleChangeSearch = (event) => setSearch(event.target.value);

  const handleSearch = (event) => {
    console.log(search);
    event.preventDefault();
    let fetchdata = async () => {
      setDisplay(true);
      let { data } = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy`
      );

      let array = data.data;
      console.log(array);
      let searchData = array.filter((res) => {
        return Object.values(res)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      console.log(searchData);
      setDisplay(false);
      SetDataJob([...searchData]);
      console.log(dataJob);
    };
    fetchdata();
  };
  const handleChangeRegister = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputRegister({ ...inputRegister, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    let { name, image_url, email, password } = inputRegister;

    axios
      .post(`https://dev-example.sanbercloud.com/api/register `, {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        let { token } = res.data;
        Cookies.set("token", token);
        history.push("/login");
       
      });
      setDisplayAlerts(true)
  };
  const handleChangeLogin = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInputLogin({ ...inputLogin, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    let { email, password } = inputLogin;

    axios
      .post(`https://dev-example.sanbercloud.com/api/login `, {
        email,
        password,
      })
      .then((res) => {
        let { token } = res.data;

        Cookies.set("token", token);
        history.push("/dashboard");
        setInputLogin = {
          email: "",
          password: "",
        };
      });
      
  };

  let getData = async () => {
    try {
      setDisplay(true);
      let array = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy`
      );
      // let {data} = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)

      let data = array.data.data;
      console.log(typeof data,array)
      let result = data.map((res) => {
        let {
          id,
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        } = res;

        return {
          id,
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        };
      });
      SetDataJob(result);
      setTimeout(() => {
        setDisplay(false);
      }, 1000);
    } catch (err) {
      alert("Data Failed To Read");
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = inputJob;
    if (currentId === null) {
      axios
        .post(
          `https://dev-example.sanbercloud.com/api/job-vacancy`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then(() => {
          setFetchStatus(true);
        })
        .catch((err) => {
          console.log(err);
        });
        setDisplayAlerts(true)
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then(() => {
          setFetchStatus(true);
        })
        .catch((err) => {
          console.log(err);
        });
        setDisplayAlerts(true)
    }
    setInputJob({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: null,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: null,
      salary_max: null,
    });
    setCurrentId(null);
  };
  const handleChange = (event) => {
    let { value, name } = event.target;
    setInputJob({ ...inputJob, [name]: value });
  };

  const handleEdit = (event) => {
    let value = parseInt(event.target.value);
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${value}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        let { data } = res;
        setInputJob({
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        });
     
        history.push("/dashboard/list-job-vacancy/edit/".concat(value));
        setCurrentId(data.id);
      });
     
  };

  const handleDelete = (event) => {
    let value = parseInt(event.target.value);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${value}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then(() => {
        setFetchStatus(true);
      })
    setDisplayAlerts(true)
  };
  let handleSingleData = async (event) => {
    let value = parseInt(event.target.value);
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${value}`, )
      .then((res) => {
        let { data } = res;
        
        setSingledata({
          id:data.id,
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        });
        console.log(data);
        history.push("/landing/job-vacancy/detail/".concat(value));
        setCurrentId(data.id);
      });
  };


  let functions = {
    handleRegister,
    getData,
    handleChangeRegister,
    handleChangeLogin,
    handleLogin,
    handleSubmit,
    handleChange,
    handleEdit,
    handleDelete,
    handleChangeSearch,
    handleSearch,
    handleChangeFilter,
    handleFilter,
    handleSingleData
  };
  let state = {
    dataJob,
    SetDataJob,
    SingleData, setSingledata,
    fetchStatus,
    setFetchStatus,
    display,
    setDisplay,
    inputLogin,
    setInputLogin,
    inputRegister,
    setInputRegister,
    inputJob,
    setInputJob,
    currentId,
    setCurrentId,
    displayAlerts,
    setDisplayAlerts,
    search,
    setSearch,
    filter,
    setFilter,
  };

  return (
    <GlobalContext.Provider value={{ state, functions }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
