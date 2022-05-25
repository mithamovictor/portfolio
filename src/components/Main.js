import React from "react";
import Footer from "./Footer";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Portfolio from "./Sections/Portfolio";
import Skills from "./Sections/Skills";

const Main = () => {
  return (
    <div className="flex flex-col justify-between md:max-h-screen max-w-screen-lg bg-green overflow-none md:overflow-scroll w-full h-full grow-1 mx-auto">
      <div className="flex flex-col p-4 lg:p-16 grow-1">
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
