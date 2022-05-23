import React from "react";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="flex flex-col justify-between max-h-screen overflow-scroll w-full h-full bg-white dark:bg-slate-800 grow-1">
      <div className="flex flex-col p-4 grow-1">
        <section id="about">
          <h2 className="text-center text-2xl capitalize font-bold text-chocolate dark:text-cream mt-16 mb-4">
            About Me
          </h2>
        </section>
        <section id="skillset">
          <h2 className="text-center text-2xl capitalize font-bold text-chocolate dark:text-cream mt-16 mb-4">
            Skills
          </h2>
        </section>
        <section id="portfolio">
          <h2 className="text-center text-2xl capitalize font-bold text-chocolate dark:text-cream mt-16 mb-4">
            Portfolio
          </h2>
        </section>
        <section id="contact">
          <h2 className="text-center text-2xl capitalize font-bold text-chocolate dark:text-cream mt-16 mb-4">
            Hire Me
          </h2>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
