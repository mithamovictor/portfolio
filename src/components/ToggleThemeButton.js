import { useState } from "react";

const ToggleThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const bodyClassList = document.querySelector("body").classList;

  const toggleTheme = (e) => {
    e.preventDefault();
    if (bodyClassList?.contains("dark")) {
      localStorage.removeItem("kttheme");
      isDarkTheme && setIsDarkTheme(!isDarkTheme);
      localStorage.setItem("kttheme", "light");
      bodyClassList?.remove("dark");
    } else {
      localStorage.removeItem("kttheme");
      !isDarkTheme && setIsDarkTheme(!isDarkTheme);
      localStorage.setItem("kttheme", "dark");
      bodyClassList?.add("dark");
    }
  };
  return (
    <button onClick={toggleTheme}>
      <i
        className={
          isDarkTheme
            ? "text-chocolate dark:text-cream fa-solid fa-sun"
            : "text-chocolate dark:text-cream fa-solid fa-moon"
        }
      ></i>
    </button>
  );
};

export default ToggleThemeButton;
