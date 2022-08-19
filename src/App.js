import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Comps/Header";
import Footer from "./Comps/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Resources from "./Pages/Resources";
import Team from "./Pages/Team";

function App() {
  return (
    <div className="mx-8 my-2 px-6">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
