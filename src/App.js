import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Main from "./components/Main";
import SidebarRight from "./components/SidebarRight";

const App = () => {
  const [hasDarkTheme, setHasDarkTheme] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("kttheme");
    const body = document.querySelector("body");
    const bodyHasDarkClass = body.classList.contains("dark");
    // Check if theme is set on initial render
    if (!bodyHasDarkClass && theme !== undefined) {
      switch (theme) {
        case "dark":
          body.classList.add("dark");
          return setHasDarkTheme(true);
        case "light":
          setHasDarkTheme(false);
          return;
        default:
          return;
      }
    } else {
      setHasDarkTheme(true);
    }
  }, []);

  // const logo = {
  //   url: "/img/logo.svg",
  //   width: "100%",
  //   height: "auto",
  //   lazyLoading: true,
  //   alt: "Karungaru Mithamo",
  // };
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen grow-1 mx-auto">
      <ToastContainer />
      <SidebarRight hasDarkTheme={hasDarkTheme} />
      <Main />
    </div>
  );
};

export default App;
