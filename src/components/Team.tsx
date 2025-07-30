import React from 'react';
import { Linkedin } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import cpaliwal from "../Assets/Images/cpaliwal.jpg"
import npaliwal from "../Assets/Images/npaliwal.jpg"
import rrp from "../Assets/Images/RR_Pathak.jpg"
import as from "../Assets/Images/amodshukla.png"
import dn from "../Assets/Images/dineshnarang.jpeg"
import vs from "../Assets/Images/vaibhavsharma.png"


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
    bio: 'Dinesh Narang is a senior Chartered Accountant and Company Secretary with vast experience in corporate finance and regulatory advisory. He has raised over $3 billion in debt for infrastructure projects and currently consults for RTI India under USAIDs SAREP program. An alumnus of SRCC, he is widely respected for his strategic financial solutions.',
    image: dn,
    linkedin: '#',
  },
  {
    name: 'RR Pathak',
    position: 'Principal Consultant',
    bio: 'R. R. Pathak is a Supreme Court attorney with 35+ years of experience in education management and legal practice. An alumnus of JNU, DU, BHU, and other prestigious institutions, he also leads VSERV FOR RIGHTS and the SUN CAD Foundation, offering legal aid and social support. He is a passionate advocate for justice and regularly engages in national and international legal forums.',
    image: rrp,
    linkedin: '#',
  },
  {
    name: 'Amod Shukla',
    position: 'Senior Project Consultant',
    bio: 'Expert in financial restructuring and M&A with extensive experience in due diligence processes for companies entering the Indian market.',
    image: as,
    linkedin: '#',
  },
  {
    name: 'Vaibhav Sharma',
    position: 'Associate',
    bio: 'Vaibhav Sharma is a qualified Company Secretary with expertise in Company Law, SEBI, FEMA, and IPR. He has extensive experience liaising with regulatory bodies like ROC, NCLT, and RBI. An Associate Member of ICSI, he is also an alumnus of the University of Delhi.',
    image: vs,
    linkedin: '#',
  },
  {
    name: 'Charu Paliwal',
    position: 'Senior Consultant',
    bio: 'Charu Paliwal is a founding partner of the firm with 18 years of experience in Income Tax, GST, and Company Law matters. A Fellow Chartered Accountant, she specializes in business setup, regulatory compliance, and startup advisory. She also handles FDI matters, due diligence, and commercial litigation.',
    image: cpaliwal,
    linkedin: '#',
  },
  {
    name: 'Nishchint Paliwal',
    position: 'Senior Consultant',
    bio: 'Nishchint Paliwal is an investment banking professional with 25+ years of experience in corporate finance, asset management for NRIs, and startup advisory. He has led high-value transactions, fund-raising, and FDI structuring, and has held senior roles at top Indian banks. He brings a blend of global best practices and deep market insight.',
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
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 pt-16 relative"
            >
              {/* Circular Image */}
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 text-center">
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