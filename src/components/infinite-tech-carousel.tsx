import React from "react";
import Image from "next/image";
import config from "@/config";

const InfiniteTechCarousel = () => {
  const logoSet = (key) => (
    <div className="flex shrink-0 items-center" key={key}>
      {config.techLogos.map((tech, index) => (
        <div key={`${key}-${index}`} className="flex items-center mx-8">
          <div className="relative h-6 w-12">
            <Image
              src={tech.url}
              alt={tech.name}
              fill
              className="object-contain transition-all duration-200 hover:scale-110"
              sizes="48px"
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div
        className="flex animate-infinite-scroll"
        style={{
          width: "fit-content",
        }}
      >
        {logoSet("set1")}
        {logoSet("set2")}
        {logoSet("set3")}
      </div>
    </div>
  );
};

export default InfiniteTechCarousel;
