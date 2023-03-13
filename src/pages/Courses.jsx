import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CourseDetails } from "../Course/CourseDetails";

const Courses = (props) => {
  const [loadmore, setLoadmore] = useState(3);

  function handleLoadmore() {
    setLoadmore((prev) => prev + 3);
  }

  return (
    <div className=" dark:bg-slate-700 bg-gray-100 py-5" id="Courses">
      <h1 className="text-center text-3xl dark:text-info text-primary font-bold p-20">
        Our Available Courses
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CourseDetails.slice(0, loadmore).map((cDetail) => (
          <div className="mx-auto" key={cDetail.id}>
            <div className="card md:w-96 w-80 shadow-xl dark:bg-gray-800 bg-gray-300 text-gray-800 dark:text-gray-100">
              <figure>
                <img
                  src={cDetail.src}
                  alt="Course Photo"
                  className=" object-"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cDetail.cTitile}</h2>
                <span className="badge badge-secondary dark:badge-warning">
                  {cDetail.cType}
                </span>
                <p>{cDetail.cDesc}</p>

                <ul>
                  {cDetail.cOutlines.map((outline, idx) => {
                    return (
                      <li key={idx}>
                        <IconButton>
                          <i className="fa-solid fa-list mr-2 text-black dark:text-white" />
                        </IconButton>
                        {outline.outline}
                      </li>
                    );
                  })}
                </ul>

                <div className="card-actions justify-end">
                  <Link
                    to="Contact"
                    className="btn btn-primary dark:btn-info dark:text-gray-50">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className={
            loadmore < 9
              ? "btn btn-block btn-primary dark:btn-info mt-10"
              : "hidden"
          }
          onClick={handleLoadmore}>
          Load more Courses
        </button>
      </div>
    </div>
  );
};

export default Courses;
