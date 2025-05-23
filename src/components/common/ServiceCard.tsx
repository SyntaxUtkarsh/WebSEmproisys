import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-[#ff7843] mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;