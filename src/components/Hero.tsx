import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background pl-24 pt-24 md:pt-0">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight mb-4">
            Hi, I'm <span className="text-primary">Trần Quốc Bảo</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            .NET Developer | Full-Stack Aspirant
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <a href="https://github.com/TranQuocBao18" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors duration-300">
              <FaGithub size={30} />
            </a>
            {/* Add LinkedIn and Facebook links if available */}
            {/* <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300"><FaLinkedin size={30} /></a> */}
            {/* <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300"><FaFacebook size={30} /></a> */}
          </div>
          <a
            href="/.NET-Developer-CV-TranQuocBao.pdf"
            download
            className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 inline-block"
          >
            Download CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary overflow-hidden border-4 border-primary shadow-lg">
            {/* Placeholder for an image. Replace with a real image if available. */}
            <img 
              src="selfie.jpg" 
              alt="Trần Quốc Bảo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;