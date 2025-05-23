import React from 'react';
import { MonitorSmartphone, Factory, Stethoscope, ShoppingBag, Landmark, Camera } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const industries = [
  {
    icon: <MonitorSmartphone className="h-12 w-12 text-[#1e3d8f]" />,
    name: 'Technology',
  },
  {
    icon: <Factory className="h-12 w-12 text-[#1e3d8f]" />,
    name: 'Manufacturing',
  },
  {
    icon: <Stethoscope className="h-12 w-12 text-[#1e3d8f]" />,
    name: 'Healthcare',
  },
  {
    icon: <ShoppingBag className="h-12 w-12 text-[#1e3d8f]" />,
    name: 'Retail',
  },
  {
    icon: <Landmark className="h-12 w-12 text-[#1e3d8f]" />,
    name: 'Financial Services',
  },
  {
    icon: <Camera className="h-12 w-12 text-[#1e3d8f]" />,
    name: 'Entertainment & Media',
  },
];

const Industries = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Industries We Serve"
          subtitle="Specialized expertise across diverse sectors"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;