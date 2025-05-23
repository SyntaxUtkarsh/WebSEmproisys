import React, { useEffect, useRef, useState } from 'react';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="text-4xl font-bold text-[#1e3d8f]">
      {prefix}{count}{suffix}
    </div>
  );
};

const WhyChooseUs = () => {
  const stats = [
    {
      icon: <Clock className="h-10 w-10 text-[#ff7843]" />,
      value: 15,
      label: 'Years Experience',
      suffix: '+',
    },
    {
      icon: <Users className="h-10 w-10 text-[#ff7843]" />,
      value: 250,
      label: 'Clients Served',
      suffix: '+',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-[#ff7843]" />,
      value: 95,
      label: 'Success Rate',
      suffix: '%',
    },
    {
      icon: <Award className="h-10 w-10 text-[#ff7843]" />,
      value: 20,
      label: 'Expert Consultants',
      suffix: '+',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Why Choose Us"
          subtitle="What makes Emproisys the right choice for your business"
        />
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-gray-700">
            With decades of combined experience, our team of certified professionals brings deep knowledge of 
            Indian business regulations and international best practices. We don't just offer advice—we partner 
            with you to achieve measurable business outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <Counter 
                end={stat.value} 
                duration={2000} 
                suffix={stat.suffix} 
              />
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;