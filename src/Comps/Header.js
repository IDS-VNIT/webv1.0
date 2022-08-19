import React from "react";

function Header() {
  return (
    <section>
      <div className="flex justify-between py-3 items-center">
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
    </section>
  );
}

export default Header;
