import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-10 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-primary">
          TranBao.dev
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-text-primary hover:text-primary transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary focus:outline-none">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-text-primary hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;