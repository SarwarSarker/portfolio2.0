import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "QuizMuiz",
      description:
        "An interactive quiz application where users can participate in various quizzes, track their performance, and view detailed results and analytics in a comprehensive dashboard.",
      image: "/images/quizmuiz.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
        "REST API",
        "MySQL",
        "Express",
        "Node.js",
      ],
      liveUrl: "https://quizmuiz.com/",
      featured: true,
    },
    {
      title: "Jante Chai",
      description:
        "A multimedia storytelling platform where users can listen to stories, audio, and video content. Users can submit their own stories and access AI-powered horoscope readings and love match compatibility features.",
      image: "/images/Jante_chai.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
        "REST API",
        "MySQL",
        "Express",
        "Node.js",
      ],
      liveUrl: "https://jante-chai.com/",
      featured: true,
    },
    {
      title: "Mediliver Pharmacy App",
      description:
        "A pharmacy app where users can order medicines, view product details, and track their orders.",
      image: "/images/mediliver.png",
      technologies: [
        "Html",
        "CSS",
        "Tailwind CSS",
        "Reactjs",
        "Redux",
        "Redux-Toolkit",
        "React Formik",
        "Node.js",
        "Express JS",
        "MongoDB",
      ],
      liveUrl: "https://mediliver.netlify.app/",
      featured: false,
    },
    {
      title: "FindEstate - Real Estate",
      description:
        "A real estate website where users can find properties for sale or rent, view property details, and contact agents for inquiries.",
      image: "/images/findstate.png",
      technologies: [
        "Html",
        "CSS",
        "Tailwind CSS",
        "Reactjs",
        "Redux",
        "Redux-Toolkit",
        "React Formik",
        "Node.js",
        "Express JS",
        "MongoDB",
      ],
      liveUrl: "https://findestate.netlify.app/",
      featured: false,
    },
    {
      title: "Ecommerce App",
      description:
        "An e-commerce website where users can browse and purchase products, add items to their cart, and checkout securely.",
      image: "/images/ecom.png",
      technologies: [
        "Html",
        "CSS",
        "Tailwind CSS",
        "Reactjs",
        "Redux",
        "Redux-Toolkit",
        "React Fomilk",
        "Firebase",
      ],
      liveUrl: "https://ecommerce-f3eea.web.app/",
      featured: false,
    },
    {
      title: "Hamsfly",
      description:
        "A travel agency website where users can book flights, hotels, and tours, view destination information, and manage their bookings.",
      image: "/images/Hamsfly.png",
      technologies: [
        "Html",
        "CSS",
        "Nextjs",
        "Redux",
        "Redux-Toolkit",
        "Python",
        "Django",
      ],
      liveUrl: "https://www.hamsfly.com/",
      featured: false,
    },
    {
      title: "Wonderverse Chicago",
      description:
        "An immersive entertainment destination website featuring themed attractions, interactive experiences, and dining options inspired by popular movies and TV shows.",
      image: "/images/wonderverse.png",
      technologies: [
        "Html",
        "CSS",
        "Tailwind CSS",
        "Framer Motion",
        "Nextjs",
        "Redux",
        "Redux-Toolkit",
        "Wordpress",
      ],
      liveUrl: "https://www.wonderversechicago.com",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="project" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating technical skills and
              creative problem-solving
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative group overflow-hidden rounded-xl">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority
                        className="w-full h-64 lg:h-80 object-[20%-0%] object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <FiExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative group">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority
                        className="w-full h-64 lg:h-80 object-[20%-0%] object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
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

export default Projects;
