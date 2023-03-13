import { IconButton } from "@material-tailwind/react";
import React from "react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center bg-gray-200 dark:bg-slate-600 p-3 rounded font-mono mb-2 m-2 md:w-auto">
        <div className="icon pr-2">
          <IconButton className=" dark:text-white dark:hover:text-warning text-gray-600 hover:text-warning">
            <a href="">
              <i className="fa-solid fa-location-pin text-4xl" />
            </a>
          </IconButton>
        </div>
        <div className="info">
          <p className="dark:text-white">
            NO(669) Thiri Street ၊ Peinnegone Quarter Insein Township Yangon
          </p>
        </div>
      </div>
      <div className="flex items-center bg-gray-200 dark:bg-slate-600 p-3 rounded font-mono mb-2 m-2 md:w-auto">
        <div className="icon pr-2">
          <IconButton className=" text-gray-600 hover:text-white">
            <a href="tel:+959252511414">
              <i className="fa-solid fa-phone text-4xl dark:text-white dark:hover:text-info" />
            </a>
          </IconButton>
        </div>
        <div className="info">
          <a href="tel:+959252511414">
            <p className="dark:text-white">09252511414</p>
          </a>
        </div>
      </div>

      <div className="flex items-center bg-gray-200 dark:bg-slate-600 p-3 rounded font-mono mb-2 m-2 md:w-auto">
        <div className="icon pr-2">
          <IconButton className=" text-gray-600 hover:text-secondary">
            <a href="mailto:newpathwaymyanmar@outlook.com?subject = Feedback&body = Message">
              <i className="fa-solid fa-envelope text-4xl dark:text-white dark:hover:text-secondary" />
            </a>
          </IconButton>
        </div>
        <div className="info">
          <a href="mailto:newpathwaymyanmar@outlook.com?subject = Feedback&body = Message">
            <p className="dark:text-white">newpathwaymyanmar@outlook.com</p>
          </a>
        </div>
      </div>

      <div className="flex items-center bg-gray-200 dark:bg-slate-600 p-3 rounded font-mono m-2 md:w-auto">
        <div className="icon pr-2">
          <IconButton className=" text-gray-600 hover:text-primary">
            <a href="https://www.facebook.com/NPIMyanmar123">
              <i className="fa-brands fa-facebook text-4xl dark:text-white dark:hover:text-blue-600" />
            </a>
          </IconButton>
        </div>
        <div className="info">
          <a href="https://www.facebook.com/NPIMyanmar123">
            <p className="dark:text-white">New Pathway Institute</p>
          </a>
        </div>
      </div>
    </div>
  );
}
