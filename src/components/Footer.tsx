import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>© {currentYear}</span>
            <span>Sarwar Sarker. All rights reserved.</span>
          </div>

          <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-500">
            <p>Connect with me on | </p>
            <div className="flex items-center justify-center space-x-2">
              <a
                href="https://www.linkedin.com/in/sarwar-sarker/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 underline"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/sarwar-sarker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 underline"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
