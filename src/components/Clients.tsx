import React, { useState, useEffect } from 'react';
import SectionTitle from './common/SectionTitle';
import cplogo from "../Assets/Images/cplogo.jpg"
import dgvlogo from "../Assets/Images/dgvlogo.png"
import nutastelogo from "../Assets/Images/nutastelogo.svg"
import farragutlogo from "../Assets/Images/farragutlogo.jpeg"
import nucleouslogo from "../Assets/Images/nucleouslogo.png"
import kritikallogo from "../Assets/Images/kritikallogo.png"
import Innoflapslogo from "../Assets/Images/Innoflapslogo.png"
import mslogo from "../Assets/Images/mslogo.png"
import drspectralogo from "../Assets/Images/drsprectra.jpg"
import hptlogo from "../Assets/Images/hptlogo.png"

// Placeholder client logos
const clients = [
  { name: 'Client 1', logo: cplogo },
  { name: 'Client 2', logo: nutastelogo },
  { name: 'Client 3', logo: farragutlogo },
  { name: 'Client 4', logo: dgvlogo },
  { name: 'Client 5', logo: nucleouslogo },
  { name: 'Client 6', logo: drspectralogo },
  { name: 'Client 7', logo: hptlogo },
  { name: 'Client 8', logo: mslogo },
  { name: 'Client 9', logo: Innoflapslogo },
  { name: 'Client 10', logo: kritikallogo },
];

const Clients = () => {
  const [visibleClients, setVisibleClients] = useState<typeof clients>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate client logo loading
    const timer = setTimeout(() => {
      setVisibleClients(clients);
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Clients"
          subtitle="We have worked with renowned names across multiple industries"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {visibleClients.map((client, index) => (
              <div 
                key={index}
                className={`flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-100 ${
                  loaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 object-contain rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;