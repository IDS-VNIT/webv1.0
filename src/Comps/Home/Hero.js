import React from "react";
import BG from "../../Assets/bg.jpg";

function Hero() {
  return (
    <div className="grid grid-cols-2 mt-20 px-20">
      <div className="flex flex-col">
        <h1 className="font-extrabold text-8xl z-50">web.</h1>
        <div className="bg-gradient-to-r from-idsBlue to-idsGreen w-60 h-6 -mt-8 z-10 mb-6"></div>
        <h1 className="font-extrabold text-8xl z-50">app.</h1>
        <div className="bg-gradient-to-r from-idsBlue to-idsGreen w-60 h-6 -mt-8 z-10 mb-6"></div>
        <h1 className="font-extrabold text-8xl z-50">game.</h1>
        <div className="bg-gradient-to-r from-idsBlue to-idsGreen w-80 h-6 -mt-8 z-10 mb-6"></div>
        <p className="mt-10 text-gray-700 pr-20">
          a club dedicated to bring out{" "}
          <span className="underline">developer inside you</span>. a club
          dedicated to bring out developer inside you.
        </p>
      </div>
      <div>
        <img className="w-4/5 -mt-12" src={BG} alt="ids team having fun" />
      </div>
    </div>
  );
}

export default Hero;
