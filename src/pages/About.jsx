import React from "react";

const About = () => {
  return (
    <div className=" bg-slate-600 p-20">
      <div className="md:max-w-6xl p-2 sm:max-w-3xl sm:m-auto sm:p-12 bg-white">
        <div className="flex flex-col pb-10 border-b-2 md:flex-row">
          <div className="flex flex-col justify-center max-w-md md:w-1/2">
            <div className="text-2xl font-black uppercase md:text-5xl text-primary">
              <span>About Us</span>
            </div>
            <div className="mt-4 md:text-xl text-gray-700 font-bold">
              New Pathway Institute is founded in 2019 just before global
              pandemic.Our institute aims to give modern advanced technological
              subjects, useful language profiency courses and applied management
              courses to today's youths with affordable costs.
            </div>
          </div>

          <div className="flex w-full -mt-5 md:justify-end md:w-1/2">
            <div className="bg-dots">
              <div className="z-10 max-w-md mt-6 ml-4 rounded-full shadow-2xl">
                <img
                  alt="card img"
                  className="rounded-t"
                  src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-1/325329684_721196352682692_2981520830821771524_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=c6021c&_nc_ohc=3QUkw8ETYKgAX99haGi&_nc_ht=scontent-lga3-2.xx&oh=00_AfDGASWYR8AOTcnoWsgfhj3n80nryd1L4HqrOghglnmNPQ&oe=63D3206F"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
