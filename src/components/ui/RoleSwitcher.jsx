import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = ["Electrical Engineer", "Web Designer", "STEM Educator"];

function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-12 lg:h-14 overflow-hidden"  >
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -30,
          }}
          transition={{
            duration: 0.5,
          }}
          className=" text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 ">
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}

export default RoleSwitcher;
