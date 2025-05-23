import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      <div className="flex justify-center items-center mb-3">
        <div className="h-1 w-10 bg-[#ff7843] rounded mr-2"></div>
        <div className="h-1 w-20 bg-[#1e3d8f] rounded"></div>
      </div>
      <p className="text-lg text-gray-700">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;