import React, { useState, useEffect } from "react";
import SQLAnimation from "@/components/ui/sql-animation";
import config from "@/config";
import { useSearchParams } from "next/navigation";

const PageAnimation = ({ children }) => {
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

export default PageAnimation;
