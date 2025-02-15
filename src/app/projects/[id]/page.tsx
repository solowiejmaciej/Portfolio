"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Github,
  Code,
  Database,
  Server,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import SQLAnimation from "@/components/ui/sql-animation";
import config from "@/config";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

const ProjectPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();
  const project = t("projects.list").find((project) => project.id == id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.notFound")}
          </h1>
          <button
            onClick={() => router.back()}
            className="text-[#512bd4] dark:text-[#6d48ff] hover:underline"
          >
            {t("projects.goBack")}
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (project.images?.length || 0) - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (project.images?.length || 0) - 1 : prev - 1
    );
  };

  return (
    <>
      <SQLAnimation
        sequence={config.projectssql.sequence}
        textColor={config.projectssql.textColor}
        speed={config.projectssql.speed}
        showTime={config.projectssql.showTime}
        fadeTime={config.projectssql.fadeTime}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pt-16 pb-12">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => router.replace("/?isBackRequest=true")}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#512bd4] dark:hover:text-[#6d48ff] transition-colors mb-8"
            >
              <ChevronLeft className="w-5 h-5" />
              {t("projects.goBack")}
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </motion.div>
          </div>

          {/* Image Gallery */}
          {project.images && project.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`Project screenshot ${currentImageIndex + 1}`}
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? "bg-white"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-16">
            {/* Left Column - Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* Project Overview */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t("projects.overview")}
                </h2>
                <div className="prose dark:prose-invert max-w-none">
                  {project.details?.overview?.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-600 dark:text-gray-300 mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Key Features */}
              {project.details?.features && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {t("projects.features")}
                  </h2>
                  <div className="grid gap-6">
                    {project.details.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                      >
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>

            {/* Right Column - Technical Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Project Links */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {t("projects.links")}
                </h3>
                <div className="space-y-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[#512bd4] dark:hover:text-[#6d48ff] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      {t("projects.sourceCode")}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-[#512bd4] dark:hover:text-[#6d48ff] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Technical Stack */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {t("projects.technicalDetails")}
                </h3>
                <div className="space-y-6">
                  {project.details?.technical?.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mt-1">
                        {detail.type === "frontend" && (
                          <Code className="w-5 h-5" />
                        )}
                        {detail.type === "backend" && (
                          <Server className="w-5 h-5" />
                        )}
                        {detail.type === "database" && (
                          <Database className="w-5 h-5" />
                        )}
                      </span>
                      <div>
                        <span className="font-medium">{detail.title}:</span>
                        <br />
                        {detail.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#512bd4]/10 dark:bg-[#6d48ff]/20 text-[#512bd4] dark:text-[#6d48ff] rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
