import image from "../assets/img/logo.png";
import * as React from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

const Header: React.FC<any> = () => {
  const navigate: NavigateFunction = useNavigate();

  const loadHomePage = () => {
    return navigate("/", { replace: true });
  };

  return (
    <header className={"flex justify-between w-full p-4"}>
      <nav className="flex flex-col md:flex-row items-center justify-between w-full">
        <img
          className={"w-20 mb-6 md:mb-0"}
          src={image}
          alt="Logo"
          onClick={loadHomePage}
        />

        {/*<button*/}
        {/*  className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get*/}
        {/*  my CV*/}
        {/*</button>*/}
        <ul className={"flex flex-row gap-4 text-gray-500 text-lg "}>
          <Link to={"/blog"} className={"font-semibold"}>
            Blog
          </Link>
          <Link to={"/projects"} className={"font-semibold"}>
            Projects
          </Link>
          <Link to={"/contact"} className={"font-semibold"}>
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
