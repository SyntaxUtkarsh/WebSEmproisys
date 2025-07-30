import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Users, Shield, Clock, CheckCircle, ArrowRight, Building, FileText, CreditCard } from 'lucide-react';

interface EoRSlide {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
  color: string;
}

const eorSlides: EoRSlide[] = [
  {
    id: 1,
    title: "What is Employer of Record?",
    subtitle: "Your Gateway to Global Talent",
    content: "Employer of Record (EoR) is a comprehensive service that allows you to hire and manage international talent without establishing a legal entity in their country. We become the legal employer while your talent works exclusively on your projects.",
    features: [
      "No need to set up local entities",
      "Compliant hiring in 100+ countries",
      "Full HR and payroll management",
      "Risk mitigation and legal protection"
    ],
    icon: <Globe className="h-16 w-16 text-white" />,
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    color: "from-blue-600 to-blue-800"
  },
  {
    id: 2,
    title: "Global IT Talent Deployment",
    subtitle: "Access World-Class Developers",
    content: "Tap into India's vast pool of skilled IT professionals including software developers, data scientists, DevOps engineers, and more. Our EoR service ensures seamless integration with your existing teams.",
    features: [
      "Pre-vetted IT professionals",
      "Full-stack and specialized developers",
      "Data scientists and AI/ML experts",
      "DevOps and cloud architects"
    ],
    icon: <Users className="h-16 w-16 text-white" />,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    color: "from-purple-600 to-purple-800"
  },
  {
    id: 3,
    title: "Compliance & Onboarding",
    subtitle: "Seamless Integration Process",
    content: "Our comprehensive onboarding process ensures your new team members are ready to contribute from day one. We handle all legal, tax, and regulatory requirements while you focus on your business goals.",
    features: [
      "Complete legal compliance",
      "Structured onboarding process",
      "Document verification & background checks",
      "Equipment and workspace setup"
    ],
    icon: <Shield className="h-16 w-16 text-white" />,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    color: "from-green-600 to-green-800"
  },
  {
    id: 4,
    title: "Payroll & Benefits Management",
    subtitle: "Complete HR Solutions",
    content: "We manage the entire employee lifecycle including payroll processing, statutory benefits, tax compliance, and performance management. Your team gets local benefits while you maintain global oversight.",
    features: [
      "Monthly payroll processing",
      "Statutory benefits administration",
      "Tax compliance and filing",
      "Performance tracking and reviews"
    ],
    icon: <CreditCard className="h-16 w-16 text-white" />,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    color: "from-orange-600 to-orange-800"
  },
  {
    id: 5,
    title: "Project-Based & Long-Term",
    subtitle: "Flexible Engagement Models",
    content: "Whether you need talent for a specific project or long-term strategic initiatives, our EoR service adapts to your requirements. Scale your team up or down based on business needs.",
    features: [
      "Project-based engagements",
      "Long-term strategic hires",
      "Flexible scaling options",
      "Contract-to-hire possibilities"
    ],
    icon: <Clock className="h-16 w-16 text-white" />,
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    color: "from-indigo-600 to-indigo-800"
  }
];

const EoRPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % eorSlides.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + eorSlides.length) % eorSlides.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 150);
  };

  const current = eorSlides[currentSlide];

  return (
    <section id="eor" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Employer of Record Services
          </h2>
          <div className="flex justify-center items-center mb-4">
            <div className="h-1 w-16 bg-gradient-to-r from-[#ff7843] to-[#ffb143] rounded mr-2"></div>
            <div className="h-1 w-24 bg-[#1e3d8f] rounded"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hire global IT talent without the complexity of international expansion
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-7xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex min-h-[600px]">
              {/* Content Side */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${current.color} mb-6 shadow-lg`}>
                    {current.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {current.title}
                  </h3>
                  <p className="text-xl text-[#ff7843] font-semibold mb-6">
                    {current.subtitle}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {current.content}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {current.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className="inline-flex items-center bg-gradient-to-r from-[#ff7843] to-[#ffb143] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Image Side */}
              <div className="md:w-1/2 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${current.color} opacity-80 z-10 transition-all duration-300`}></div>
                <img
                  src={current.image}
                  alt={current.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${isTransitioning ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl font-bold opacity-20 mb-4">
                      {String(current.id).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-[#1e3d8f] transition-all duration-300 hover:scale-110 z-30"
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:text-[#1e3d8f] transition-all duration-300 hover:scale-110 z-30"
            disabled={isTransitioning}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {eorSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-[#1e3d8f] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { icon: <Building className="h-8 w-8" />, value: "100+", label: "Countries Supported" },
            { icon: <Users className="h-8 w-8" />, value: "500+", label: "Professionals Deployed" },
            { icon: <FileText className="h-8 w-8" />, value: "99%", label: "Compliance Rate" },
            { icon: <Clock className="h-8 w-8" />, value: "7", label: "Days Average Onboarding" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center text-[#1e3d8f] mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EoRPage;