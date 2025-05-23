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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
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
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {['Home', 'Services', 'About', 'Clients', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className={`text-sm font-medium transition-colors duration-300 hover:text-[#1e3d8f] ${
                      scrolled ? 'text-gray-800' : 'text-gray-800'
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="hidden md:block bg-gradient-to-r from-[#ff7843] to-[#ffb143] text-white px-5 py-2 rounded-md text-sm font-medium transition-transform duration-300 hover:scale-105"
          >
            Schedule a Consultation
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <ul className="pt-2 pb-4 px-4 space-y-2">
            {['Home', 'Services', 'About', 'Clients', 'Team', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block py-2 text-gray-800 hover:text-[#1e3d8f] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a 
                href="#contact" 
                className="block w-full text-center bg-gradient-to-r from-[#ff7843] to-[#ffb143] text-white px-4 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Schedule a Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;