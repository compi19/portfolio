import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', to: 'hero' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    /* 1. 'border-b' እና 'border-white/10' የሚሉትን በማጥፋት ስር የሚታየውን መስመር አስወግደናል */
    <nav className={`fixed w-full z-50 transition-all duration-500 bg-[#0a0f1a] ${
      scrolled 
      ? 'py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]' 
      : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* ሎጎው ከጠፋ ሜኑው ወደ ግራ እንዳይሳብ ባዶ div እዚህ ጋር እናስቀምጣለን */}
        <div className="hidden md:block w-10"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              smooth={true}      
              duration={600}     
              offset={-70}       
              spy={true}
              activeClass="text-blue-500 font-bold"
              className="relative text-gray-300 hover:text-white font-medium transition-all cursor-pointer group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <a 
             >
            
        </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-300 hover:text-white active:scale-75 transition-all duration-200"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-[#0c1220] border-t border-white/5 absolute w-full p-8 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              smooth={true} 
              duration={600} 
              offset={-70}
              onClick={() => setIsOpen(false)} 
              className="text-xl text-gray-300 hover:text-blue-400 font-semibold transition-all cursor-pointer border-b border-white/5 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/cv.pdf" 
            download
            className="bg-blue-600 text-white px-5 py-4 rounded-2xl text-center font-bold mt-4 shadow-xl active:scale-95 transition-all"
          >
          
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;