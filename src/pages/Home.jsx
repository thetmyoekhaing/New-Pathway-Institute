import React from "react";

import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        id="Home"
        className={`bg-white w-full h-screen bg-center bg-cover flex flex-col justify-center items-center md:p-28 dark:bg-gray-600 `}>
        <div className="text-white font-serif">
          <span className="ml-2 p-2 border-4 rotate-3 inline-block border-warning dark:border-info font-bold text-xs">
            Welcome to New Pathway Institute
          </span>
          <h2 className="md:text-4xl p-4 text-3xl font-bold">
            Invest your future at New Pathway Institute right now
          </h2>
          <p className="p-4 md:text-xl">
            We offer you IT Diploma Courses ,Certificate Courses and Language
            Proficiency Courses
            <strong className="text-warning dark:text-info">
              {" "}
              available both On Campus and Online
            </strong>
          </p>

          <div className="m-4 flex text-center">
            <a href="#Courses">
              <button className="btn btn-warning md:w-32 w-28 hover:bg-opacity-80 dark:btn-info text-white text-xs">
                Our Courses
              </button>
            </a>
            {/* &nbsp;
            <a href="#Courses">
              <button
                className="btn bg-white dark:bg-neutral dark:text-white text-black hover:bg-opacity-70 hover:bg-white md:w-36 w-28
            ">
                View Courses
              </button>
            </a> */}
          </div>
        </div>
      </div>
      {/* Home */}

      {/* about */}
      <About />

      {/* Course */}

      <Courses />
      <Contact />
    </>
  );
};

export default Home;
