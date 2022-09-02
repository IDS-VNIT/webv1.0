import React from "react";
import Dashboard from "../../Assets/dashboard.png";
import URL from "../../Assets/url.jpg";

function ShowProjects() {

  return (
    <section>
      <h1 className="text-center text-5xl font-bold underline my-20">
        projects
      </h1>
      <div className="sm:flex h-screen px-20 my-20">
        <div className="sm:w-1/5 bg-gradient-to-b from-idsGreen to-idsBlue flex flex-col items-center justify-center">
          <p className="lg:-rotate-90 text-9xl font-black text-white">web</p>
        </div>
        <div className="flex border flex-col justify-center items-center">
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <img
                className="w-4/5"
                src={Dashboard}
                alt="dashboard by elon musk"
              />
              <p className="font-bold text-lg mt-2 mb">dashboard</p>
              <p className="italic text-sm text-idsBlue">by elon musk</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-4/5"
                src={Dashboard}
                alt="dashboard by elon musk"
              />
              <p className="font-bold text-lg mt-2 mb">dashboard</p>
              <p className="italic text-sm text-idsBlue">by elon musk</p>
            </div>
          </div>
          <div className="-mb-20 mt-20 -ml-40">
            <div className="bg-idsBlue absolute">
              <a
                href="/"
                className="bg-[#e6f3ff] px-8 py-3 flex items-center relative bottom-2 right-2"
              >
                explore more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
}

export default ShowProjects;
