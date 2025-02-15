"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (!theme || theme === "system") {
      setTheme(systemTheme);
    }
  }, [systemTheme, theme, setTheme]);

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-[4.5rem] h-10 rounded-xl bg-white dark:bg-gray-800
                 shadow-[0_2px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.3)]
                 flex items-center justify-center transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="flex items-center justify-center"
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-indigo-200" />
        ) : (
          <Sun className="w-5 h-5 text-indigo-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeSwitch;
