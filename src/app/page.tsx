"use client";

import React from "react";
import { motion } from "framer-motion";
import PageAnimation from "@/components/ui/page-animation";
import HeroSection from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects";
import TechnologyCard from "@/components/technology-card";
import ExperienceTimeline from "@/components/experience-timeline";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
const Layout = () => {
  const { t } = useLanguage();

  return (
    <PageAnimation>
      <Analytics />
      <SpeedInsights />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
        </motion.div>

        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              {t("about.title")}
            </h2>
            <div className="h-1 w-20 bg-[#512bd4] dark:bg-[#6d48ff] mx-auto rounded-full mb-8" />
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden relative group">
                  <Image
                    src={t("about.image")}
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {t("about.description")}
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-white dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              {t("experience.title")}
            </h2>
            <div className="h-1 w-20 bg-[#512bd4] dark:bg-[#6d48ff] mx-auto rounded-full mb-8" />
            <ExperienceTimeline positions={t("experience.positions")} />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FeaturedProjects projects={t("projects.list")} />
          </motion.div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-16 bg-white dark:bg-gray-900">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              {t("technologies.title")}
            </h2>
            <div className="h-1 w-20 bg-[#512bd4] dark:bg-[#6d48ff] mx-auto rounded-full mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t("technologies.list").map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TechnologyCard tech={tech} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer Section */}
        <Footer />
      </div>
    </PageAnimation>
  );
};

export default Layout;
