import React from 'react';
import { Flame, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Flame 
                size={28} 
                className="text-transparent mr-2" 
                style={{ 
                  fill: 'url(#footerLogoGradient)', 
                  stroke: 'url(#footerLogoGradient)' 
                }} 
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff7843" />
                    <stop offset="100%" stopColor="#ffb143" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-white font-bold text-xl tracking-tight">Emproisys</span>
            </div>
            <p className="mb-4">
              Expert consultation in Taxation, Finance & Commercial Law for businesses in India.
            </p>
            <p>
              <strong>Igniting Business Success in India</strong>
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Clients', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#ff7843] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Taxation Services',
                'Financial Consulting',
                'Legal & Commercial',
                'Due Diligence',
                'Regulatory Compliance'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="hover:text-[#ff7843] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Subscribe to Newsletter</h3>
            <p className="mb-4">Stay updated with latest insights and news about Indian business landscape.</p>
            <form>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-[#ff7843] focus:border-[#ff7843] outline-none transition"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 px-4 bg-gradient-to-r from-[#ff7843] to-[#ffb143] text-white rounded-r-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Emproisys. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
        
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#1e3d8f] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#ff7843] transition-colors duration-300 focus:outline-none"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;