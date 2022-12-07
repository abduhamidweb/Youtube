import { Router } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Routere from "./router/Routere";
import Navbar from "./UI/Navbar";
import context from "./context/Context";
import API from "./API/API";

const App = () => {
  return (
    <>
      <context.Provider value={""}>
        <div className="container-fluid">
          <Navbar />
          <div className="row">
            <div className="col-lg-2 col-md-3">
              <Sidebar />
            </div>
            <div className="col-lg-10 col-md-9  RouterWrapper">
              <Routere />
            </div>
          </div>
        </div>
      </context.Provider>
    </>
  );
};

export default App;
