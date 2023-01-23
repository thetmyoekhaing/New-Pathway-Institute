import { IconButton } from "@material-tailwind/react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import logo from "../assets/logo1.jpg

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li tabIndex={0}>
                <Link to="./Courses">Courses</Link>
              </li>

              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <img
            className="md:w-52 pl-5 w-40"
            src={logo}
            alt="NPI Logo"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-indigo-900 text-xl font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li tabIndex={0}>
              <Link to="./Courses">Courses</Link>
            </li>

            <li>
              <Link to="/Contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <IconButton className="text-indigo-800">
            <a href="https://www.facebook.com">
              <i className="fa-brands fa-square-facebook text-2xl mr-2" />
            </a>
          </IconButton>
          <IconButton className=" text-black">
            <a href="">
              <i className="fa-solid fa-envelope text-2xl" />
            </a>
          </IconButton>
        </div>
      </div>

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Navbar;
