"use client";

import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";
import { useTheme } from "next-themes";

const ToggelTheme = () => {
  const { theme, setTheme } = useTheme();

  const themeFn = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <button onClick={themeFn} className="flex items-center">
        <FiSun
          className="rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0"
          size={36}
        />
        <FaMoon
          className="rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100 absolute"
          size={36}
        />
      </button>
    </>
  );
};

export default ToggelTheme;
