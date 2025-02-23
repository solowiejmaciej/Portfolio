"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Github, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const FeaturedProjects = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const router = useRouter();
  const { t } = useLanguage();

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveProject(
      (prev) => (prev + newDirection + projects.length) % projects.length
    );
  };

  const handleViewProject = () => {
    router.push(`/projects/${projects[activeProject].id}`);
  };

  const NavigationArrow = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        direction === "left" ? "left-6 md:left-4" : "right-6 md:right-4"
      } z-10 p-3 md:p-4 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white 
        hover:bg-[#512bd4] hover:text-white dark:hover:bg-[#6d48ff] transition-all duration-200
        shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700`}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
      ) : (
        <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
      )}
    </button>
  );

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.title")}
          </h2>
          <div className="h-1 w-20 bg-[#512bd4] dark:bg-[#6d48ff] mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="relative h-[600px] md:h-[600px] overflow-hidden">
          <div className="hidden md:block">
            <NavigationArrow direction="left" onClick={() => paginate(-1)} />
            <NavigationArrow direction="right" onClick={() => paginate(1)} />
          </div>

          {/* Swipe Indicator - Mobile Only */}
          {showSwipeHint && (
            <motion.div
              className="md:hidden absolute inset-0 z-20 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  x: [-30, 30, -30],
                }}
                transition={{
                  duration: 2.5,
                  repeat: 2,
                  ease: "easeInOut",
                  onComplete: () => setShowSwipeHint(false),
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: 2,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-gray-600 dark:text-gray-300"
                    >
                      <path
                        d="M14 5L21 12M21 12L14 19M21 12H3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <span className="text-sm text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {t("projects.swipeHint")}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeProject}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 h-full">
                <div
                  className="h-[300px] md:h-full relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={handleViewProject}
                >
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="flex flex-col justify-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-4 cursor-pointer hover:text-[#512bd4] dark:hover:text-[#6d48ff] transition-colors"
                    onClick={handleViewProject}
                  >
                    {projects[activeProject].title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600 dark:text-gray-300 mb-6"
                  >
                    {projects[activeProject].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {projects[activeProject].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-[#512bd4]/10 dark:bg-[#6d48ff]/20 text-[#512bd4] dark:text-[#6d48ff] rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4"
                  >
                    {projects[activeProject].github && (
                      <a
                        href={projects[activeProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-[#512bd4] dark:hover:bg-[#6d48ff] hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {projects[activeProject].demo && (
                      <a
                        href={projects[activeProject].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-[#512bd4] dark:hover:bg-[#6d48ff] hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={handleViewProject}
                      className="px-6 py-2 bg-[#512bd4] dark:bg-[#6d48ff] text-white rounded-full hover:bg-[#4119b0] dark:hover:bg-[#5a3ad9] transition-colors"
                    >
                      {t("projects.view")}
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeProject ? 1 : -1);
                setActiveProject(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeProject
                  ? "w-8 bg-[#512bd4] dark:bg-[#6d48ff]"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
