import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "MoMagic Bangladesh Limited",
      location: "Dhaka, Bangladesh",
      period: "May 2024 - Present",
      description:
        "Developed full-stack web applications using React, TypeScript, and modern development practices.",
      achievements: [
        " Built and maintained scalable frontend applications using React.js, Next.js, TypeScript, and Redux Toolkit with performance optimization.",
        "Developed and maintained RESTful APIs using Node.js, Express.js, and TypeScript for seamless communication between frontend and backend services.",
        "Designed and implemented CMS features with complex state management using Redux Toolkit and RTK Query.",
        "Optimized application performance and SEO using Next.js Server-Side Rendering (SSR) and Static Site Generation (SSG).",
        "Implemented secure authentication using JWT, OTP verification, and role-based authorization.",
        "Designed and optimized relational database schemas, wrote efficient SQL queries, and improved backend performance through query optimization.",
        "Integrated third-party services including payment gateways, Direct Carrier Billing (DCB), and SMS providers.",
        "Implemented API caching, centralized error handling, request validation, and logging to improve application reliability.",
        "Enhanced user experience through responsive UI, animations, and micro-interactions using Framer Motion.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "NodeJs",
        "ExpressJs",
        "MySQL",
      ],
    },
    {
      title: "Software Engineer",
      company: "Idlewild Digital",
      location: "Dhaka, Bangladesh",
      period: "Dec 2023 - Apr 2024",
      description:
        "Developed responsive web applications for various startup clients. Collaborated closely with designers and backend developers.",
      achievements: [
        "Developed 5+ client projects from concept to deployment, working with diverse startup requirements and tight deadlines.",
        "Created reusable component libraries and design systems to accelerate development across multiple client projects.",
        "Implemented advanced form validation and error handling systems using React Hook Form and Yup validation schemas.",
        "Built custom dashboard interfaces with real-time data visualization using Chart.js libraries.",
        "Optimized web applications for mobile-first responsive design, achieving 95%+ mobile compatibility scores.",
        "Collaborated with UI/UX designers to implement pixel-perfect designs and ensure brand consistency across applications.",
        "Reduced application bundle size by 40% through code splitting and lazy loading optimization techniques.",
      ],
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "Sass",
        "REST APIs",
        "Git",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
              Experience
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey in software development
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Desktop Only */}
            <div className="block absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-4 md:space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-8 h-8 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <div className="w-4 h-4 md:w-8 md:h-8 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-900 p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="mt-2 sm:mt-3 space-y-1">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <FiCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm ml-2">
                            {exp.period}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <FiMapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm ml-2">
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-sm sm:text-base">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
