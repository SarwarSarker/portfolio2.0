"use client";

import Link from "next/link";
import React from "react";
import { FiChevronDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto py-8 sm:py-0">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-fade-in leading-tight">
              Software Engineer
            </h1>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 animate-fade-in-delay">
              <span className="block mb-1 sm:mb-2">
                Hi, I&apos;m
                <span className="font-semibold text-blue-600 dark:text-blue-400 ml-0.5 sm:ml-1">
                  Sarwar Sarker
                </span>
              </span>
              <span className="block text-sm sm:text-base md:text-lg">
                Building scalable software solutions and innovative applications with modern technologies
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fade-in-delay-2">
            <Link href="#project" className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 hover:from-blue-700 hover:to-purple-700 cursor-pointer text-center">
              View My Work
            </Link>
            <a href="/images/cv_sarwar_sarker.pdf" download className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-pointer text-center">
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16 animate-fade-in-delay-3">
            <a
              href="https://github.com/sarwarsarker"
              className="p-2.5 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl sm:text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarwar-sarker/"
              className="p-2.5 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl sm:text-2xl" />
            </a>
            <a
              href="https://leetcode.com/u/sarwarsarker00/"
              className="p-2.5 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LeetCode"
            >
              <SiLeetcode className="text-xl sm:text-2xl" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200"
            aria-label="Scroll to about section"
          >
            <FiChevronDown className="text-gray-600 dark:text-gray-400 text-3xl sm:text-4xl cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
