import React, { useEffect, useRef } from 'react';
import { X, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  content: {
    sections: Array<{
      type: 'paragraph' | 'heading' | 'image' | 'quote' | 'list';
      content: string | string[];
      level?: number;
      alt?: string;
      src?: string;
    }>;
  };
}

interface BlogReaderProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

const BlogReader: React.FC<BlogReaderProps> = ({ isOpen, onClose, post }) => {
  const readerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderContent = (section: BlogPost['content']['sections'][0], index: number) => {
    switch (section.type) {
      case 'heading':
        const HeadingTag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={index}
            className={`font-bold text-gray-900 mb-4 ${
              section.level === 1 ? 'text-3xl' :
              section.level === 2 ? 'text-2xl' :
              section.level === 3 ? 'text-xl' : 'text-lg'
            }`}
          >
            {section.content as string}
          </HeadingTag>
        );
      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
            {section.content as string}
          </p>
        );
      case 'image':
        return (
          <div key={index} className="my-8">
            <img
              src={section.src}
              alt={section.alt}
              className="w-full rounded-lg shadow-md"
            />
            {section.alt && (
              <p className="text-sm text-gray-500 text-center mt-2 italic">
                {section.alt}
              </p>
            )}
          </div>
        );
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-[#ff7843] pl-6 my-8 italic text-gray-700 text-lg">
            "{section.content as string}"
          </blockquote>
        );
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            {(section.content as string[]).map((item, itemIndex) => (
              <li key={itemIndex} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  if (!isOpen || !post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={handleBackdropClick}
    >
      <div
        ref={readerRef}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-500 ease-out"
        style={{
          animation: isOpen ? 'slideInUp 0.5s ease-out' : 'slideOutDown 0.3s ease-in',
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
          <div className="flex items-center space-x-4">
            <span className="px-3 py-1 bg-[#ff7843] text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm space-x-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-[#1e3d8f] transition-colors duration-200">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-[#1e3d8f] transition-colors duration-200">
              <Bookmark className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-red-500 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600 font-medium">{post.author}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.content.sections.map((section, index) => renderContent(section, index))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Need Expert Guidance?
              </h3>
              <p className="text-gray-700 mb-4">
                Get personalized consultation for your business needs in India.
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center bg-gradient-to-r from-[#ff7843] to-[#ffb143] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideOutDown {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(100px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default BlogReader;