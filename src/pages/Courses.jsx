import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { CourseDetails } from "../Course/CourseDetails";

const Courses = (props) => {
  const [loadmore, setLoadmore] = useState(3);

  function handleLoadmore() {
    setLoadmore((prev) => prev + 3);
  }

  const { cOutline } = CourseDetails;

  return (
    <div className=" bg-slate-700 py-5">
      <h1 className="text-center text-3xl text-gray-200 font-bold p-20">
        Our Available Courses
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CourseDetails.slice(0, loadmore).map((cDetail) => (
          <div className="mx-auto" key={cDetail.id}>
            <div className="card w-96 shadow-xl bg-gray-800 text-gray-300">
              <figure>
                <img src={cDetail.src} alt="Course Photo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cDetail.cTitile}</h2>
                <span className="badge badge-secondary">{cDetail.cType}</span>
                <p>{cDetail.cDesc}</p>

                <ul>
                  {cDetail.cOutlines.map((outline, idx) => {
                    return (
                      <li key={idx}>
                        <IconButton>
                          <i className="fa-solid fa-list mr-2" />
                        </IconButton>
                        {outline.outline}
                      </li>
                    );
                  })}
                </ul>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className={
            loadmore < 9 ? "btn btn-block btn-primary mt-10" : "hidden"
          }
          onClick={handleLoadmore}>
          Loadmore
        </button>
      </div>
    </div>
  );
};

export default Courses;
