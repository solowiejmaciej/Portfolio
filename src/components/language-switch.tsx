"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
      className="px-4 py-2 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-md 
                 hover:bg-white/50 dark:hover:bg-gray-800/50 
                 text-gray-800 dark:text-white 
                 font-medium transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {language === "pl" ? "EN" : "PL"}
    </motion.button>
  );
};

export default LanguageSwitch;
