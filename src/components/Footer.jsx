import { IconButton } from "@material-tailwind/react";
import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 text-base-content rounded bg-gray-100 dark:bg-slate-900">
      <div className="grid grid-flow-col gap-4 text-black dark:text-gray-100 font-mono font-semibold">
        <a className="link link-hover">
          <Link to="New-Pathway-Institute/About">About us</Link>
        </a>
        <a className="link link-hover">
          <Link to="New-Pathway-Institute/Courses">Courses</Link>
        </a>
        <a className="link link-hover">
          <Link to="New-Pathway-Institute/Contact">Contact Us</Link>
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <IconButton className="text-gray-700 dark:text-white">
            <a href="https://www.facebook.com/NPIMyanmar123">
              <i className="fa-brands fa-square-facebook text-4xl mr-2 hover:text-primary" />
            </a>
          </IconButton>
          <IconButton className=" text-gray-700 dark:text-white">
            <a href="mailto:newpathwaymyanmar@outlook.com?subject = Feedback&body = Message">
              <i className="fa-solid fa-envelope text-4xl hover:text-secondary" />
            </a>
          </IconButton>
        </div>
      </div>
      <div>
        <p className="text-black dark:text-gray-300">
          Copyright © {date} - All right reserved by New Pathway Institute
        </p>
      </div>
    </footer>
  );
};

export default Footer;
