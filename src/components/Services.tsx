import React from 'react';
import { Calculator, CreditCard, Scale, ClipboardCheck, FileCheck } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import ServiceCard from './common/ServiceCard';

const Services = () => {
  const services = [
    {
      title: 'Taxation Services',
      icon: <Calculator className="h-12 w-12 text-[#1e3d8f]" />,
      description: 'Comprehensive tax planning, GST compliance, international tax structuring, and transfer pricing services to optimize your tax position.',
      items: [
        'Tax planning and optimization',
        'GST compliance and advisory',
        'International tax structuring',
        'Transfer pricing'
      ]
    },
    {
      title: 'Financial Consulting',
      icon: <CreditCard className="h-12 w-12 text-[#1e3d8f]" />,
      description: 'Expert financial advisory services including investment advice, restructuring, mergers & acquisitions, and funding strategies.',
      items: [
        'Investment advisory',
        'Financial restructuring',
        'Mergers & acquisitions',
        'Funding strategies'
      ]
    },
    {
      title: 'Legal & Commercial Services',
      icon: <Scale className="h-12 w-12 text-[#1e3d8f]" />,
      description: 'Complete legal support from business incorporation to contract review, intellectual property protection, and ongoing legal advisory.',
      items: [
        'Business incorporation',
        'Contract drafting and review',
        'Intellectual property protection',
        'Legal advisory'
      ]
    },
    {
      title: 'Due Diligence',
      icon: <ClipboardCheck className="h-12 w-12 text-[#1e3d8f]" />,
      description: 'Thorough assessment across financial, legal, operational, and commercial dimensions to identify opportunities and mitigate risks.',
      items: [
        'Financial due diligence',
        'Legal due diligence',
        'Operational due diligence',
        'Commercial due diligence'
      ]
    },
    {
      title: 'Regulatory Compliances',
      icon: <FileCheck className="h-12 w-12 text-[#1e3d8f]" />,
      description: 'Navigate India\'s complex regulatory environment with our compliance management, industry-specific regulation handling, and compliance audits.',
      items: [
        'Statutory compliance management',
        'Industry-specific regulations',
        'Cross-border compliance',
        'Compliance audits and assessments'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive business solutions tailored to your needs"
        />
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          At Emproisys, we provide comprehensive advisory services designed to simplify business operations in India. 
          Our integrated approach combines taxation expertise, financial insight, and legal knowledge to create pathways for sustainable growth.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;