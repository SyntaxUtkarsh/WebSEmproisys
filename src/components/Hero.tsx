import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(rgba(30, 61, 143, 0.8), rgba(30, 61, 143, 0.8)), url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
      }}
    >
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Expert Guidance for Business Success in India
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Specialized consultation in Taxation, Finance & Commercial Law
          </p>
          <div className="mb-8 opacity-90">
            <p className="text-lg mb-2">
              🏆 95+ Years Collective Experience | 🌟 27+ Clients Served | 🎯 Expert Business Consulting in India
            </p>
            <p className="text-base">
              GST Compliance • FDI Investment • Employer of Record • Legal Advisory • Financial Consulting
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-[#ff7843] to-[#ffb143] text-white px-6 py-3 rounded-md text-lg font-medium transition-transform duration-300 hover:scale-105"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      
      {/* Subtle wave shape at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L60,85.3C120,75,240,53,360,53.3C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;