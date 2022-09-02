import React from "react";

import Coding from "../../Assets/coding.png";
import Webinar from "../../Assets/webinar.png";
import Pizza from "../../Assets/pizza.png";

function WhatWeDO() {
  return (
    <section className="px-20">
      {/* <a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Pizza icons created by Freepik - Flaticon</a> */}

      <h1 className="text-center text-5xl font-bold underline my-20">
        what we do?
      </h1>
      <div className="sm:flex justify-between">
        <div className="w-72 h-72 bg-idsBlue relative">
          <div className="w-72 h-72 bg-[#e6f3ff] bottom-2 right-2 absolute p-8">
            <div className="w-20 h-20 rounded-full bg-idsBlue mb-8 flex justify-center items-center">
              <img className="w-3/5" src={Coding} alt="a person with laptop" />
            </div>
            <p className="text-idsBlue">
              build awesome products in hackathons together
            </p>
          </div>
        </div>
        <div className="w-72 h-72 bg-idsGreen relative">
          <div className="w-72 h-72 bg-[#ebfefc] bottom-2 right-2 absolute p-8">
            <div className="w-20 h-20 rounded-full bg-idsGreen mb-8 flex justify-center items-center">
              <img className="w-3/5" src={Webinar} alt="video call" />
            </div>
            <p className="text-idsGreen">
              organize events to help student learn latest technologies
            </p>
          </div>
        </div>
        <div className="w-72 h-72 bg-idsBlue relative">
          <div className="w-72 h-72 bg-[#e6f3ff] bottom-2 right-2 absolute p-8">
            <div className="w-20 h-20 rounded-full bg-idsBlue mb-8 flex justify-center items-center">
              <img className="w-3/5" src={Pizza} alt="yummy pizza!" />
            </div>
            <p className="text-idsBlue">eat pizza together on weekends</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDO;
