import React from "react";
import Logo from "../Assets/logo.png";

function Footer() {
  return (
    <section className="flex flex-col">
      <div className="px-6 py-3 grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-56"
            src={Logo}
            alt="institute development society, vnit nagpur: logo"
          />
          <a className="text-idsBlue" href="mailto:contact@idsvnit.org">
            contact@idsvnit.org
          </a>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-black text-lg my-2">menu</h2>
            <a link href="http://">
              home
            </a>
            <a link href="http://">
              projects
            </a>
            <a link href="http://">
              resources
            </a>
            <a link href="http://">
              team
            </a>
            <a link href="http://">
              contact
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-black text-lg my-2">projects</h2>
            <a link href="http://">
              web
            </a>
            <a link href="http://">
              app
            </a>
            <a link href="http://">
              game
            </a>
            <a link href="http://">
              blockchain
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-black text-lg my-2">social</h2>
            <a link href="http://">
              discord
            </a>
            <a link href="http://">
              instagram
            </a>
            <a link href="http://">
              linkedin
            </a>
            <a link href="http://">
              github
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-center my-4">
        &copy; institute development society, vnit nagpur 2022
      </p>
    </section>
  );
}
export default Footer;
