import React from "react";
import { Github, Linkedin } from "lucide-react";
import InfiniteTechCarousel from "@/components/infinite-tech-carousel";
import { useLanguage } from "@/contexts/language-context";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-16">
      <div className="bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <h3 className="text-lg font-medium text-[#512bd4] dark:text-[#6d48ff] mb-4">
                {t("footer.contact")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t("footer.description")}
              </p>
              <div className="flex space-x-4">
                <a
                  href={t("hero.social.github")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#512bd4] dark:text-gray-400 dark:hover:text-[#6d48ff] transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={t("hero.social.linkedin")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#512bd4] dark:text-gray-400 dark:hover:text-[#6d48ff] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#512bd4] dark:text-[#6d48ff] mb-4">
                {t("footer.quickLinks")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-[#512bd4] dark:text-gray-400 dark:hover:text-[#6d48ff] transition-colors"
                  >
                    {t("footer.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-gray-600 hover:text-[#512bd4] dark:text-gray-400 dark:hover:text-[#6d48ff] transition-colors"
                  >
                    {t("footer.experience")}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-600 hover:text-[#512bd4] dark:text-gray-400 dark:hover:text-[#6d48ff] transition-colors"
                  >
                    {t("footer.projects")}
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    className="text-gray-600 hover:text-[#512bd4] dark:text-gray-400 dark:hover:text-[#6d48ff] transition-colors"
                  >
                    {t("footer.technologies")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#512bd4] dark:text-[#6d48ff] mb-4">
                {t("footer.location")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("footer.locationDetails")}
                <br />
                <span className="text-sm">{t("footer.remoteWork")}</span>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <br />
          <InfiniteTechCarousel />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
