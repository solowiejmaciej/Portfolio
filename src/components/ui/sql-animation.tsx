import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const SQLAnimation = ({
  sequence,
  textColor = "#ff79c6",
  speed = 35,
  showTime = 4500,
  fadeTime = 6000,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, showTime);

    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, fadeTime);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, [showTime, fadeTime]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-gray-900 z-50 flex items-center justify-center transition-all duration-1500 ${
        showContent ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
    >
      <div className="w-full max-w-2xl p-6 rounded-lg bg-[#282a36] border border-gray-700 shadow-2xl transition-transform duration-1500">
        <div className="flex items-center mb-4 space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-gray-400 text-sm font-mono">
            portfolio_database.sql
          </div>
        </div>
        <div className="font-mono text-lg bg-[#282a36] rounded-lg p-4">
          <TypeAnimation
            sequence={sequence}
            wrapper="pre"
            speed={speed}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              color: textColor,
            }}
            repeat={0}
          />
        </div>
      </div>
    </div>
  );
};

export default SQLAnimation;
