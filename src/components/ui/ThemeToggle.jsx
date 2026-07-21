import { motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";
import {BiSun} from "react-icons/bi";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className=" relative w-12 h-7 rounded-full transition-colors duration-300 bg-slate-300 dark:bg-slate-700
        flex items-center px-1"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className={`
          absolute
          w-5
          h-5
          rounded-full
          bg-white
          shadow-lg

          flex
          items-center
          justify-center

          ${theme === "dark" ? "translate-x-5" : "translate-x-0"}
        `}
      >
        {theme === "dark" ? (
          <FaMoon className="text-slate-700 text-sm" />
        ) : (
          <BiSun className="text-yellow-500 text-xl" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;