import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);
  const background = `${theme} ${
    theme == "dark" ? "bg-black" : null
  } min-h-[100vh] transition-all ease-in-out duration-300`;

  const handleChangeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleChangeTheme }}>
      <div className={background}>{children}</div>
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
