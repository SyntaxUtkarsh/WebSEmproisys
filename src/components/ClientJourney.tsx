import React, { useState } from 'react';
import { MessageSquare, FileSearch, Lightbulb, PlayCircle, Users } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const steps = [
  {
    icon: <MessageSquare className="h-12 w-12 text-white" />,
    title: 'Initial Consultation',
    description: 'We begin with an in-depth discussion to understand your business needs, goals, and challenges.',
  },
  {
    icon: <FileSearch className="h-12 w-12 text-white" />,
    title: 'Strategic Assessment',
    description: 'Our experts analyze your situation and identify key opportunities and potential obstacles.',
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-white" />,
    title: 'Custom Solution Development',
    description: 'We create tailored strategies and solutions designed specifically for your business requirements.',
  },
  {
    icon: <PlayCircle className="h-12 w-12 text-white" />,
    title: 'Implementation Support',
    description: 'Our team guides you through the implementation process, ensuring smooth execution.',
  },
  {
    icon: <Users className="h-12 w-12 text-white" />,
    title: 'Ongoing Advisory',
    description: 'We provide continuous support and advice as your business grows and evolves in the Indian market.',
  },
];

const ClientJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Client Journey"
          subtitle="How we work with you to ensure success"
        />
        
        <div className="max-w-5xl mx-auto">
          {/* Timeline steps on desktop */}
          <div className="hidden md:flex justify-between mb-8 relative">
            {/* Progress line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 z-0">
              <div 
                className="h-full bg-[#1e3d8f] transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="z-10 flex flex-col items-center cursor-pointer"
                onClick={() => setActiveStep(index)}
              >
                <div 
                  className={`flex items-center justify-center w-12 h-12 rounded-full mb-2 transition-all duration-300 ${
                    index <= activeStep 
                      ? 'bg-gradient-to-r from-[#ff7843] to-[#ffb143]' 
                      : 'bg-gray-200'
                  }`}
                >
                  {step.icon}
                </div>
                <p className={`text-sm font-medium ${index <= activeStep ? 'text-[#1e3d8f]' : 'text-gray-500'}`}>
                  Step {index + 1}
                </p>
              </div>
            ))}
          </div>
          
          {/* Step content */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="md:flex items-start">
              {/* Mobile step indicator */}
              <div className="md:hidden flex overflow-x-auto pb-4 mb-4">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex-shrink-0 mx-2 p-2 rounded-full ${
                      index === activeStep ? 'bg-gradient-to-r from-[#ff7843] to-[#ffb143]' : 'bg-gray-200'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="w-8 h-8">{step.icon}</div>
                  </div>
                ))}
              </div>
              
              <div className="md:w-full">
                <h3 className="text-2xl font-bold text-[#1e3d8f] mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-700 mb-6">
                  {steps[activeStep].description}
                </p>
                
                <div className="flex justify-between">
                  <button 
                    className={`px-4 py-2 rounded ${
                      activeStep > 0 
                        ? 'bg-[#1e3d8f] text-white' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
                    disabled={activeStep === 0}
                  >
                    Previous
                  </button>
                  <button 
                    className={`px-4 py-2 rounded ${
                      activeStep < steps.length - 1 
                        ? 'bg-[#1e3d8f] text-white' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                    onClick={() => activeStep < steps.length - 1 && setActiveStep(activeStep + 1)}
                    disabled={activeStep === steps.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientJourney;