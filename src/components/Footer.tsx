import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-gray-400 text-sm sm:text-base">
            <span>© {currentYear}</span>
            <span>Sarwar Sarker. All rights reserved.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
            <p>Connect with me on</p>
            <div className="flex items-center justify-center gap-2 sm:gap-2">
              <a
                href="https://www.linkedin.com/in/sarwar-sarker/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 underline"
              >
                LinkedIn
              </a>
              <span>|</span>
              <a
                href="https://github.com/sarwar-sarker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
