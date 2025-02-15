"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ThemeSwitch from "./theme-switch";
import LanguageSwitch from "./language-switch";
import { useLanguage } from "@/contexts/language-context";

const HeaderControls = () => {
  const handleDownloadCV = () => {
    window.open("/cv.pdf", "_blank");
  };

  const { t } = useLanguage();

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 flex items-center gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.button
        onClick={handleDownloadCV}
        className="flex items-center gap-2 px-4 py-2 rounded-xl
                   bg-indigo-600 hover:bg-indigo-700
                   text-white font-medium 
                   shadow-[0_2px_10px_rgba(99,102,241,0.3)]
                   transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-4 h-4" />
        <span>{t("headers.resume")}</span>
      </motion.button>
      <LanguageSwitch />

      <ThemeSwitch />
    </motion.div>
  );
};

export default HeaderControls;
