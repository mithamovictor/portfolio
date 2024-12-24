import image from "../assets/img/logo.png";
import * as React from "react";

const Header: React.FC<any> = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-20">
      <img className={"w-20 mb-6 md:mb-0"} src={image} alt="Logo"/>

      {/*<button*/}
      {/*  className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get*/}
      {/*  my CV*/}
      {/*</button>*/}
      <ul className={"flex flex-row gap-4 text-gray-500 text-lg "}>
        <li className={'font-semibold'}><a href="#about">About</a></li>
        <li className={'font-semibold'}><a href="#projects">Projects</a></li>
        <li className={'font-semibold'}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
