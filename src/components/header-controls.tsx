"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ThemeSwitch from "./theme-switch";
import LanguageSwitch from "./language-switch";
import { useLanguage } from "@/contexts/language-context";

const HeaderControls = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { t } = useLanguage();

  const handleDownloadCV = async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    try {
      const response = await fetch("/api/track-download", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      window.open("/cv.pdf", "_blank");
    } catch (error) {
      console.error("Error tracking CV download:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 flex items-center gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.button
        onClick={handleDownloadCV}
        disabled={isDownloading}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl
                   bg-indigo-600 hover:bg-indigo-700
                   text-white font-medium 
                   shadow-[0_2px_10px_rgba(99,102,241,0.3)]
                   transition-all duration-300
                   disabled:opacity-75 disabled:cursor-not-allowed`}
        whileHover={{ scale: isDownloading ? 1 : 1.05 }}
        whileTap={{ scale: isDownloading ? 1 : 0.95 }}
      >
        <Download
          className={`w-4 h-4 ${isDownloading ? "animate-spin" : ""}`}
        />
        <span>{t("headers.resume")}</span>
      </motion.button>
      <LanguageSwitch />
      <ThemeSwitch />
    </motion.div>
  );
};

export default HeaderControls;
