import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeVisible = window.scrollY < 100;
      setIsVisible(shouldBeVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 10, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.2 },
            y: { repeat: Infinity, duration: 2 },
          }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown className="w-8 h-8 text-[#512bd4] dark:text-[#6d48ff] hover:text-[#3f1fa8] dark:hover:text-[#8161ff] transition-colors" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollArrow;
