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
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-lg mb-2 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Introduction
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>
        <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-20 items-center">
          {/* Profile Image */}
          <div className="w-64 sm:w-80 rounded-3xl max-w-none">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={288}
              height={320}
              className="w-72 h-96 object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div className="flex-1">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center lg:text-left">
                I&apos;m a software engineer with 2.5+ years of experience,
                passionate about building scalable applications and innovative
                solutions across the full stack. I specialize in React,
                TypeScript, and modern technologies, with a focus on writing
                maintainable code and crafting great user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col gap-3 border border-gray-400 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <FaCode className="w-8 h-8" />
                <div className="mb-2 text-xl font-semibold">Languages</div>
                <div className="text-gray-700 dark:text-gray-300 text-base">
                  JavaScript, TypeScript, ReactJs, NextJs, NodeJs, ExpressJs,
                  SQL
                </div>
              </div>
              <div className="flex flex-col gap-3 border border-gray-400 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <RiGraduationCapLine className="w-8 h-8" />
                <div className="mb-2 text-xl font-semibold">Education</div>
                <div className="text-gray-700 dark:text-gray-300 text-base">
                  BSc in Computer Science and Engineering, Daffodil
                  International University
                </div>
              </div>
              <div className="flex flex-col gap-3 border border-gray-400 dark:border-gray-700 rounded-xl p-6 shadow-sm">
                <FaProjectDiagram className="w-8 h-8" />
                <div className="mb-2 text-xl font-semibold">Projects</div>
                <div className="text-gray-700 dark:text-gray-300 text-base">
                  Built 5+ projects, including some industrial projects
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                Tools I use frequently
              </p>

              <div className="flex gap-4 mb-8">
                <div className="relative group p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <TbBrandTailwind className="w-8 h-8 text-cyan-500" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    Tailwind CSS
                  </span>
                </div>
                <div className="relative group p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiJavascript className="w-8 h-8 text-yellow-400" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    JavaScript
                  </span>
                </div>
                <div className="relative group p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiTypescript className="w-8 h-8 text-blue-600" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    TypeScript
                  </span>
                </div>
                <div className="relative group p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiReact className="w-8 h-8 text-blue-500" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    React
                  </span>
                </div>
                <div className="relative group p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    Next.js
                  </span>
                </div>
                <div className="relative group p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiNodedotjs className="w-8 h-8 text-green-600" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    Node.js
                  </span>
                </div>
                <div className="relative group p-3 rounded-lg border border-gray-400 dark:border-gray-700 cursor-pointer">
                  <SiExpressColor className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                    Express.js
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                href="#"
                className="flex items-center justify-center w-full gap-2 border rounded-full px-8 py-3 mt-5 text-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
