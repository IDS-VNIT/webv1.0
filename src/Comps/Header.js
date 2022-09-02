import React,{useState} from "react";

function Header() {
  
  return (
    <section>
      {/* <div className="flex justify-between py-3 items-center"> */}
      <nav className="sm:relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"></div>
        <div>institute development society</div>
        <div className="flex justify-between space-x-8 items-center">
          <a href="/" className="p-3 border-b-idsBlue border-b-4">
            home
          </a>
          <a href="/projects">projects</a>
          <a href="/resources">resources</a>
          <a href="team">team</a>
        </div>
        <div className="bg-idsBlue px-6 py-3 relative">
          <a href="/contact" className="text-white">
            get in touch
          </a>
        </div>
      </div>
      </nav>
    </section>
  );
}

export default Header;
