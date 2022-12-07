import React, { useRef,useState,useEffect } from 'react'
import './style.scss'
import Logo from '../../assets/images/Youtube logo.png'
import Creat from '../../assets/images/create.png'
import API from '../../API/API'
import context from '../../context/Context'
const index = () => {
  const activeSerach = useRef()
  const activeBorder = useRef()
  const [inputValue, setInputValue] = useState("world of tank")

  return (
    <>
      <context.Provider value={{inputValue}}>
        <header className="header">
          <nav className="navbar navbar-light ">
            <div className="container-fluid p-0">
              <div className="element-wrapper w-100">
                <div className="el-content-left d-flex align-items-center">
                  <div className="logo">
                    <i className="bi bi-list "></i>
                  </div>
                  <a className="navbar-brand" href="#">
                    <img
                      src={Logo}
                      className="ms-2 logo_youtube"
                      height="20"
                      alt="MDB Logo"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="el-content-center" ref={activeBorder}>
                  <form className="el-input-content d-flex align-content-center">
                    <div className="activSerach">
                      <i
                        className="bi bi-search active-serach fs-6"
                        ref={activeSerach}
                      ></i>
                    </div>
                    <input
                      type="text"
                      placeholder="search"
                      className="serach"
                      onChange={(e) => {
                        // activeSerach.current.classNameList.add('opacity')
                        setInputValue(e.target.value);
                      }}
                      // onClick={() => {
                      //   activeBorder.current.classNameList.add('active-border')
                      // }}
                    />
                    <div className="searchIcon">
                      <i className="bi bi-search"></i>
                    </div>
                  </form>
                </div>
                <div className="el-content-right d-flex  justify-content-between align-items-center">
                  <div className="dropdown">
                    <a
                      className="text-reset me-3 dropdown-toggle hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-camera-video fs-4"></i>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <i className="bi bi-file-play fs-6"></i>{" "}
                          <span className="ms-2">Upload video</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item d-flex align-items-center"
                          href="#"
                        >
                          <i className="bi bi-activity fs-6"></i>{" "}
                          <span className="ms-2">Go live</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown d-flex align-items-center">
                    <a
                      className="text-reset me-3 dropdown-toggle hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-bell fs-5"></i>
                      <span className="badge rounded-pill badge-notification bg-danger">
                        1
                      </span>
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end p-2 bshsdj12"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <div className="dropdown-menu-top">
                        <div className="w-100 d-flex justify-content-between align-items-center drop-top-title">
                          <h4>Notifications</h4>
                          <span>
                            <i className="bi bi-gear"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle d-flex align-items-center hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuAvatar"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-circle"
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          My profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </context.Provider>
    </>
  );
}

export default index
