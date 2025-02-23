"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import ScrollArrow from "./scroll-arrow";

import config from "@/config";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl flex flex-col sm:flex-row items-center justify-center gap-2">
            <div className="h-[40px] sm:h-[48px] md:h-[60px] min-w-[280px] flex items-center justify-center">
              <TypeAnimation
                sequence={config.hero.sequence}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
              />
            </div>
            <div>
              <span className="text-[#512bd4] dark:text-[#6d48ff]">.NET</span>{" "}
              Developer
            </div>
          </h1>
          <div className="mt-8 flex justify-center space-x-6">
            <motion.a
              href={config.hero.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ color: "#512bd4" }}
                transition={{ duration: 0.2 }}
              >
                <Github className="w-8 h-8" />
              </motion.div>
            </motion.a>
            <motion.a
              href={config.hero.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ color: "#512bd4" }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="w-8 h-8" />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
      <ScrollArrow />
    </section>
  );
};

export default HeroSection;
