"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === "pl" ? "en" : "pl")}
      className="px-4 py-2 rounded-xl bg-white text-indigo-600 font-medium
                 shadow-[0_2px_10px_rgba(99,102,241,0.3)]
                 hover: transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {language === "pl" ? "EN" : "PL"}
    </motion.button>
  );
};

export default LanguageSwitch;
