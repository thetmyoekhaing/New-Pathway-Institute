import React from "react";

import About from "./About";
import Courses from "./Courses";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div
        id="Home"
        className="w-full h-screen bg-center bg-cover flex flex-col justify-center items-center text-center md:p-28">
        <div className="text-white font-serif">
          <h2 className="md:text-4xl text-center p-2 text-lg">
            Invest your future at New Pathway Institute right now
          </h2>
          <p className="p-4 md:text-xl">
            We offer you IT Diploma Courses ,Certificate Courses and Language
            Proficiency Courses
            <strong> available both On Campus and Online</strong>
          </p>

          <div className="flex flex-row justify-center text-center items-center">
            <a href="">
              <button className="btn btn-warning md:w-36 w-28 hover:bg-opacity-80">
                Learn More
              </button>
            </a>
            &nbsp;
            <a href="">
              <button
                className="btn bg-white text-black hover:bg-opacity-70 hover:bg-white md:w-36 w-28
            ">
                View Courses
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Home */}

      {/* about */}
      <About />

      {/* Course */}

      <Courses />
    </>
  );
};

export default Home;
