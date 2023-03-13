import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div>
      <div className="bg-gray-400 p-10 md:p-20" id="About">
        <div className="md:max-w-6xl p-2 sm:max-w-3xl sm:m-auto sm:p-12 bg-gray-200 dark:bg-slate-600">
          <div className="flex flex-col pb-10 border-b-2 md:flex-row">
            <div className="flex flex-col justify-center max-w-md md:w-1/2">
              <div className="text-2xl font-black uppercase md:text-5xl text-primary dark:text-info p-3">
                <span>About Us</span>
              </div>
              <div className="mt-4 md:text-xl p-3 text-black dark:text-gray-50">
                New Pathway Institute is founded in 2019 just before global
                pandemic.Our institute aims to give modern advanced
                technological subjects, useful language profiency courses and
                applied management courses to today's youths with affordable
                costs.
              </div>
            </div>

            <div className="flex w-full -mt-5 md:justify-end md:w-1/2">
              <div className="bg-dots">
                <div className="z-10 max-w-md mt-6 ml-4 rounded-full shadow-2xl">
                  <img alt="card img" className="rounded-t" src={about}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
