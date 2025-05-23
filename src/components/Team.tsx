import React from 'react';
import { Linkedin } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import cpaliwal from "../Assets/Images/cpaliwal.jpg"
import npaliwal from "../Assets/Images/npaliwal.jpg"
import rrp from "../Assets/Images/RR_Pathak.jpg"


interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dinesh Narang',
    position: 'Principal Consultant',
    bio: 'Over 20 years of experience in corporate taxation and financial advisory. Expert in helping international businesses navigate the Indian tax landscape.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    linkedin: '#',
  },
  {
    name: 'RR Pathak',
    position: 'Principal Consultant',
    bio: 'Specializes in cross-border compliance and regulatory frameworks with 15+ years of experience working with multinational corporations.',
    image: rrp,
    linkedin: '#',
  },
  {
    name: 'Amod Shukla',
    position: 'Senior Project Consultant',
    bio: 'Expert in financial restructuring and M&A with extensive experience in due diligence processes for companies entering the Indian market.',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    linkedin: '#',
  },
  {
    name: 'Vaibhav',
    position: 'Associate',
    bio: 'Specializes in GST compliance and statutory regulations, helping businesses optimize their tax positions within legal frameworks.',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    linkedin: '#',
  },
  {
    name: 'Charu Paliwal',
    position: 'Senior Consultant',
    bio: 'Legal expert with focus on commercial law and intellectual property protection for businesses operating in the Indian market.',
    image: cpaliwal,
    linkedin: '#',
  },
  {
    name: 'Nishchint Paliwal',
    position: 'Senior Consultant',
    bio: 'Specializes in corporate compliance and regulatory affairs with particular expertise in technology and financial services sectors.',
    image: npaliwal,
    linkedin: '#',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Team"
          subtitle="Meet the experts who will guide your business"
        />
        
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16">
          Our team consists of industry veterans with specialized expertise across taxation, finance, and law. 
          Their combined experience forms the foundation of our consultative approach and ensures solutions of exceptional quality and precision.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#1e3d8f] font-medium mb-3">{member.position}</p>
                <p className="text-gray-700 mb-4">{member.bio}</p>
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center text-[#1e3d8f] hover:text-[#ff7843] transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;