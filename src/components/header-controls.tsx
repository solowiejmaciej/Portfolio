"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu } from "lucide-react";
import ThemeSwitch from "./theme-switch";
import LanguageSwitch from "./language-switch";
import { useLanguage } from "@/contexts/language-context";

const HeaderControls = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowMenu(false);
      } else if (window.scrollY === 0) {
        setShowMenu(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    try {
      const response = await fetch("/api/track-download", {
        method: "POST",
      });

      if (!response.ok) {
        console.error("Error tracking download");
      }

      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.setAttribute("download", "cv.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CV:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-3">
        {showMenu && (
          <>
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-[0_2px_10px_rgba(99,102,241,0.3)] transition-all duration-300"
            >
              <Download
                className={`w-4 h-4 ${isDownloading ? "animate-spin" : ""}`}
              />
              <span>{t("headers.resume")}</span>
            </button>
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-xl">
              <LanguageSwitch />
            </div>
            <ThemeSwitch />
          </>
        )}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 rounded-xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-md hover:bg-white/50 dark:hover:bg-gray-800/50 text-gray-800 dark:text-white"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeaderControls;
