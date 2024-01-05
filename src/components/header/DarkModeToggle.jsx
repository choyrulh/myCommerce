import { useContext, useEffect } from "react";
import { ThemeContext } from "../../hooks/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { motion } from "framer-motion";

const DarkModeToggle = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
  }, [theme]);

  const iconVariants = {
    light: { scale: 1 },
    dark: { scale: 0.8, rotate: 180 },
  };

  return (
    <motion.div
      className="flex flex-row items-center gap-2 cursor-pointer transition duration-300 ease-in-out"
      onClick={() => handleChangeTheme(theme === "light" ? "dark" : "light")}
    >
      <p className="dark:text-white mr-auto">
        {theme === "light" ? "Dark" : "Light"}
      </p>
      <motion.span
        variants={iconVariants}
        initial="light"
        animate={theme}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "light" ? (
          <HiOutlineMoon className="text-gray-700 text-xl dark:text-gray-300" />
        ) : (
          <HiOutlineSun className="text-yellow-500 text-xl" />
        )}
      </motion.span>
    </motion.div>
  );
};

export default DarkModeToggle;
