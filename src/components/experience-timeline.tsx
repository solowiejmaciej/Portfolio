import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ExperienceTimeline = ({ positions }) => {
  return (
    <div className="relative container mx-auto px-6 pt-8">
      <div className="absolute left-8 lg:left-[8.5rem] w-1 h-full bg-gradient-to-b from-[#512bd4] dark:from-[#6d48ff] to-[#512bd4]/20 dark:to-[#6d48ff]/20" />

      {positions.map((position) => (
        <motion.div
          key={position.id}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative pl-16 lg:pl-40 mb-12"
        >
          <div className="absolute left-[1.85rem] lg:left-[8.35rem] top-8">
            <div className="w-4 h-4 rounded-full bg-[#512bd4] dark:bg-[#6d48ff] shadow-md" />
          </div>

          <Card className="relative hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={position.logo}
                  alt={position.company}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {position.title}
                </CardTitle>
                <CardDescription className="text-base text-gray-600 dark:text-gray-400">
                  {position.company} • {position.period}
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="pt-2">
              <div className="space-y-2">
                {position.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#512bd4] dark:bg-[#6d48ff]" />
                    <p className="text-gray-700 dark:text-gray-300">{resp}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {position.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#512bd4]/10 dark:bg-[#6d48ff]/20 text-[#512bd4] dark:text-[#6d48ff] rounded-full text-sm hover:bg-[#512bd4]/20 dark:hover:bg-[#6d48ff]/30 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
