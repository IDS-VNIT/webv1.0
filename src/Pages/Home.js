import React from "react";
import Hero from "../Comps/Home/Hero";
import WhatWeDo from "../Comps/Home/WhatWeDo";
import ShowProjects from "../Comps/Home/ShowProjects";

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatWeDo />
      <ShowProjects />
    </div>
  );
}

export default Home;
