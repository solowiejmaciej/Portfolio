"use client";
import React, { useState, useEffect, Suspense } from "react";
import SQLAnimation from "@/components/ui/sql-animation";
import config from "@/config";
import { useSearchParams } from "next/navigation";

// Komponent wewnętrzny z logiką useSearchParams
const PageAnimationContent = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const searchParams = useSearchParams();
  const isBackRequest = searchParams.get("isBackRequest") === "true";

  useEffect(() => {
    if (isBackRequest) {
      setShowContent(true);
      return;
    }

    const timer = setTimeout(() => {
      setShowContent(true);
    }, config.mainPagessql.showTime);

    return () => clearTimeout(timer);
  }, [isBackRequest]);

  return (
    <>
      {!isBackRequest && (
        <SQLAnimation
          sequence={config.mainPagessql.sequence}
          textColor={config.mainPagessql.textColor}
          speed={config.mainPagessql.speed}
          showTime={config.mainPagessql.showTime}
          fadeTime={config.mainPagessql.fadeTime}
        />
      )}

      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

const PageAnimation = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          {/* Możesz tu dodać loader */}
          <div>Loading...</div>
        </div>
      }
    >
      <PageAnimationContent>{children}</PageAnimationContent>
    </Suspense>
  );
};

export default PageAnimation;
