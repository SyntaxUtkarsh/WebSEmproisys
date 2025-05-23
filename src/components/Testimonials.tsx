import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Emproisys has been instrumental in helping us navigate the complex regulatory landscape in India. Their expertise saved us both time and resources during our expansion.",
    name: "Rajiv Mehta",
    position: "CFO",
    company: "Tech Innovations Ltd",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    quote: "The taxation services provided by Emproisys helped us optimize our financial structure, resulting in significant tax savings while ensuring full compliance with Indian regulations.",
    name: "Sarah Johnson",
    position: "Director of Finance",
    company: "Global Manufacturing Co",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    quote: "Their deep understanding of both international and Indian business practices made them the perfect partner for our market entry strategy. Highly recommended!",
    name: "Michael Chen",
    position: "CEO",
    company: "Horizon Ventures",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstTestimonial = currentIndex === 0;
    const newIndex = isFirstTestimonial ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastTestimonial = currentIndex === testimonials.length - 1;
    const newIndex = isLastTestimonial ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1e3d8f] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff7843] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Client Testimonials"
          subtitle="What our clients say about working with us"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-gray-50 rounded-lg shadow-md p-8 md:p-10">
              <div className="mb-8 text-[#ff7843]">
                <Quote className="h-12 w-12 opacity-30" />
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-y-0 left-0 flex items-center -translate-x-1/2">
              <button 
                onClick={goToPrevious}
                className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-800 hover:text-[#1e3d8f] focus:outline-none"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center translate-x-1/2">
              <button 
                onClick={goToNext}
                className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-800 hover:text-[#1e3d8f] focus:outline-none"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-[#1e3d8f]' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;