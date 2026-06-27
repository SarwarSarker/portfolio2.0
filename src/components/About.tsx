import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress as SiExpressColor,
} from "react-icons/si";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <p className="text-base sm:text-lg mb-2 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Introduction
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          {/* Profile Image */}
          <div className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-3xl max-w-none mx-auto lg:mx-0">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={288}
              height={320}
              className="w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div className="flex-1 w-full">
            <div>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 mb-6 sm:mb-8 text-center lg:text-left">
                Full-Stack Software Engineer with 4+ years of experience
                designing and developing scalable web applications. Experienced
                in React, Next.js, TypeScript, Node.js, and modern development
                practices, with a passion for building reliable, maintainable,
                and user-centric products. Committed to writing clean, efficient
                code and delivering high-quality software that drives business
                value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex flex-col gap-2 sm:gap-3 border border-gray-400 dark:border-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
                <FaCode className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold">
                  Languages
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  JavaScript, TypeScript, ReactJs, NextJs, NodeJs, ExpressJs,
                  SQL
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 border border-gray-400 dark:border-gray-700 rounded-xl p-4 sm:p-6 shadow-sm">
                <RiGraduationCapLine className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold">
                  Education
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  BSc in Computer Science and Engineering, Daffodil
                  International University
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 border border-gray-400 dark:border-gray-700 rounded-xl p-4 sm:p-6 shadow-sm sm:col-span-2 lg:col-span-1">
                <FaProjectDiagram className="w-6 h-6 sm:w-8 sm:h-8" />
                <div className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold">
                  Projects
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Delivered 10+ web applications, including enterprise
                  solutions, CMS platforms, and payment-integrated systems.
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Tools I use frequently
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="relative group p-2 sm:p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <TbBrandTailwind className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 sm:px-3 py-1 rounded bg-gray-800 text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    Tailwind CSS
                  </span>
                </div>
                <div className="relative group p-2 sm:p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiJavascript className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 sm:px-3 py-1 rounded bg-gray-800 text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    JavaScript
                  </span>
                </div>
                <div className="relative group p-2 sm:p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiTypescript className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 sm:px-3 py-1 rounded bg-gray-800 text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    TypeScript
                  </span>
                </div>
                <div className="relative group p-2 sm:p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 sm:px-3 py-1 rounded bg-gray-800 text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    React
                  </span>
                </div>
                <div className="relative group p-2 sm:p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiNextdotjs className="w-6 h-6 sm:w-8 sm:h-8 text-black dark:text-white" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 sm:px-3 py-1 rounded bg-gray-800 text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    Next.js
                  </span>
                </div>
                <div className="relative group p-2 sm:p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiNodedotjs className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 sm:px-3 py-1 rounded bg-gray-800 text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    Node.js
                  </span>
                </div>
                <div className="relative group p-2 sm:p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiExpressColor className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800 dark:text-gray-200" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 sm:px-3 py-1 rounded bg-gray-800 text-white text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    Express.js
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="#"
                className="flex items-center justify-center w-full sm:w-auto gap-2 border rounded-full px-6 sm:px-8 py-3 mt-3 sm:mt-5 text-base sm:text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                My Story & Tech Stack
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
