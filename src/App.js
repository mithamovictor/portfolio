import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Main from "./components/Main";
import SidebarRight from "./components/SidebarRight";

const App = () => {
  useEffect(() => {
    const theme = localStorage.getItem("kttheme");
    const body = document.querySelector("body");
    if (!theme && body.classList.contains("dark"))
      return body.classList.remove("dark");
    if (theme && theme === "light" && body.classList.contains("dark"))
      return body.classList.remove("dark");
    return body.classList.add("dark");
  }, []);
  const logo = {
    url: "/img/logo.svg",
    width: "100%",
    height: "auto",
    lazyLoading: true,
    alt: "Karungaru Mithamo",
  };
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen grow-1 mx-auto">
      <ToastContainer />
      <SidebarRight logo={logo} />
      <Main />
    </div>
  );
};

export default App;
