import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface GuideItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const blogArticles: Article[] = [
  {
    title: "Navigating GST Compliance in India: A Comprehensive Guide",
    excerpt: "Understanding the complexities of India's Goods and Services Tax system and how businesses can ensure compliance while optimizing their tax position.",
    date: "May 15, 2025",
    category: "Taxation",
    image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Legal Structures for Foreign Businesses Entering the Indian Market",
    excerpt: "A comparison of different legal entities available to international companies expanding into India, with pros and cons of each approach.",
    date: "April 28, 2025",
    category: "Legal",
    image: "https://images.pexels.com/photos/5668857/pexels-photo-5668857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Cross-Border Investment Regulations: Recent Changes and Implications",
    excerpt: "Recent updates to India's foreign direct investment policies and how they impact various sectors and investment strategies.",
    date: "April 10, 2025",
    category: "Finance",
    image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const guideItems: GuideItem[] = [
  {
    title: "Tax Planning Guide for Multinational Corporations",
    description: "A comprehensive guide to optimizing tax structures when operating in India.",
    icon: <FileText className="h-8 w-8 text-[#1e3d8f]" />,
  },
  {
    title: "Regulatory Compliance Checklist for New Businesses",
    description: "Essential compliance requirements for companies establishing operations in India.",
    icon: <FileText className="h-8 w-8 text-[#1e3d8f]" />,
  },
  {
    title: "Guide to M&A Due Diligence in India",
    description: "Key considerations and processes for conducting effective due diligence.",
    icon: <FileText className="h-8 w-8 text-[#1e3d8f]" />,
  }
];

const Resources = () => {
  const [activeTab, setActiveTab] = useState('blog');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Resources"
          subtitle="Insights and guides to help navigate Indian business landscape"
        />
        
        <div className="max-w-5xl mx-auto">
          {/* Tab navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-white rounded-lg shadow-sm">
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'blog' 
                    ? 'bg-[#1e3d8f] text-white' 
                    : 'text-gray-700 hover:text-[#1e3d8f]'
                }`}
                onClick={() => setActiveTab('blog')}
              >
                Blogs & Insights
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'guides' 
                    ? 'bg-[#1e3d8f] text-white' 
                    : 'text-gray-700 hover:text-[#1e3d8f]'
                }`}
                onClick={() => setActiveTab('guides')}
              >
                Downloadable Guides
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === 'faq' 
                    ? 'bg-[#1e3d8f] text-white' 
                    : 'text-gray-700 hover:text-[#1e3d8f]'
                }`}
                onClick={() => setActiveTab('faq')}
              >
                FAQ
              </button>
            </div>
          </div>
          
          {/* Blog Articles */}
          {activeTab === 'blog' && (
            <div className="grid md:grid-cols-3 gap-8">
              {blogArticles.map((article, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[#ff7843] font-medium">{article.category}</span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-gray-700 mb-4">{article.excerpt}</p>
                    <a 
                      href="#" 
                      className="text-[#1e3d8f] font-medium hover:text-[#ff7843] transition-colors duration-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Downloadable Guides */}
          {activeTab === 'guides' && (
            <div className="grid md:grid-cols-3 gap-8">
              {guideItems.map((guide, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">
                    {guide.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-700 mb-4">{guide.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-[#1e3d8f] font-medium hover:text-[#ff7843] transition-colors duration-300"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </a>
                </div>
              ))}
            </div>
          )}
          
          {/* FAQ */}
          {activeTab === 'faq' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                {[
                  {
                    question: "What services does Emproisys offer to foreign businesses?",
                    answer: "Emproisys provides comprehensive services including taxation, financial consulting, legal & commercial services, due diligence, and regulatory compliance assistance specifically tailored for foreign businesses entering or expanding in the Indian market."
                  },
                  {
                    question: "How can Emproisys help with tax optimization in India?",
                    answer: "Our tax experts develop tailored strategies to optimize your tax position while ensuring full compliance with Indian tax laws. This includes GST planning, corporate tax structuring, transfer pricing advisory, and international tax considerations specific to your business sector and goals."
                  },
                  {
                    question: "What is the process for engaging Emproisys as a consultant?",
                    answer: "The process begins with an initial consultation to understand your specific needs, followed by a strategic assessment of your situation. We then develop custom solutions, provide implementation support, and continue with ongoing advisory as your business grows in India."
                  },
                  {
                    question: "How does Emproisys assist with regulatory compliance?",
                    answer: "We help navigate India's complex regulatory landscape by providing statutory compliance management, industry-specific regulation guidance, cross-border compliance advice, and regular compliance audits and assessments to ensure your business remains fully compliant."
                  }
                ].map((item, index) => (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-gray-900 font-semibold">{item.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-700 mt-3 group-open:animate-fadeIn">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resources;