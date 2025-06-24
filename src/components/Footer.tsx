import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex Johnson
            </h3>
            <p className="text-gray-400 mt-2">Frontend Developer</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>© {currentYear} Made with</span>
            <FiHeart className="w-8 h-8 text-red-500 fill-current" />
            <span>by Alex Johnson. All rights reserved.</span>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            <p>Designed and developed with modern web technologies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;