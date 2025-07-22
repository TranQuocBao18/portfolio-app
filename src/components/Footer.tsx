import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/TranQuocBao18" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          {/* Add LinkedIn and Facebook links if available */}
        </div>
        <p>&copy; {new Date().getFullYear()} Trần Quốc Bảo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
