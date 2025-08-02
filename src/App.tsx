import React from 'react';
import SEOOptimizedContent from './components/SEOOptimizedContent';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import EoRPage from './components/EoRPage';
import WhyChooseUs from './components/WhyChooseUs';
import ClientJourney from './components/ClientJourney';
import Industries from './components/Industries';
import Clients from './components/Clients';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <SEOOptimizedContent />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <EoRPage />
        <WhyChooseUs />
        <ClientJourney />
        <Industries />
        <Clients />
        <Team />
    
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;