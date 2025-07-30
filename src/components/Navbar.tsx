import React, { useState, useEffect } from 'react';
import { Flame, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`bg-white rounded-2xl shadow-lg transition-all duration-300 ${
          scrolled ? 'shadow-xl' : 'shadow-md'
        }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center py-3 px-6">
            <div className="flex items-center">
              <Flame 
                size={32} 
                className="text-transparent mr-2" 
                style={{ 
                  fill: 'url(#logoGradient)', 
                  stroke: 'url(#logoGradient)' 
                }} 
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff7843" />
                    <stop offset="100%" stopColor="#ffb143" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-[#1e3d8f] font-bold text-xl tracking-tight">Emproisys</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex py-3">
            <ul className="flex space-x-8">
              {['Home', 'Services', 'EoR', 'About', 'Clients', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-gray-800 transition-colors duration-300 hover:text-[#1e3d8f] relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff7843] to-[#ffb143] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block py-3 px-6">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-[#ff7843] to-[#ffb143] text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden py-3 px-6">
            <button 
              className="text-gray-800 hover:text-[#1e3d8f] transition-colors duration-300" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <ul className="pt-2 pb-4 px-4 space-y-2">
            {['Home', 'Services', 'EoR', 'About', 'Clients', 'Team', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block py-3 px-2 text-gray-800 hover:text-[#1e3d8f] hover:bg-gray-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a 
                href="#contact" 
                className="block w-full text-center bg-gradient-to-r from-[#ff7843] to-[#ffb143] text-white px-4 py-3 rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Schedule a Consultation
              </a>
            </li>
          </ul>
          </div>
        </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;