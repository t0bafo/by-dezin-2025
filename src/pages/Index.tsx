
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { RSVPModal } from '@/components/RSVPModal';

const Index = () => {
  const [showRSVPModal, setShowRSVPModal] = useState(false);

  const handleRSVPClick = () => {
    setShowRSVPModal(true);
  };

  return (
    <div className="min-h-screen bg-bone">
      <Header onRSVPClick={handleRSVPClick} />
      
      {/* Main content with top padding to account for sticky header */}
      <main className="pt-16">
        <section id="hero">
          <HeroSection />
        </section>
        
        {/* Placeholder sections for navigation anchors */}
        <section id="highlights" className="min-h-screen flex items-center justify-center bg-cream">
          <div className="text-center">
            <h2 className="font-playfair text-4xl font-bold text-black mb-4">Highlights</h2>
            <p className="font-montserrat text-lg text-black">Coming soon...</p>
          </div>
        </section>
        
        <section id="alumni" className="min-h-screen flex items-center justify-center bg-bone">
          <div className="text-center">
            <h2 className="font-playfair text-4xl font-bold text-black mb-4">Alumni</h2>
            <p className="font-montserrat text-lg text-black">Coming soon...</p>
          </div>
        </section>
        
        <section id="vision" className="min-h-screen flex items-center justify-center bg-cream">
          <div className="text-center">
            <h2 className="font-playfair text-4xl font-bold text-black mb-4">Vision</h2>
            <p className="font-montserrat text-lg text-black">Coming soon...</p>
          </div>
        </section>
        
        <section id="collaborate" className="min-h-screen flex items-center justify-center bg-bone">
          <div className="text-center">
            <h2 className="font-playfair text-4xl font-bold text-black mb-4">Collaborate</h2>
            <p className="font-montserrat text-lg text-black">Coming soon...</p>
          </div>
        </section>
      </main>

      {/* RSVP Modal */}
      <RSVPModal 
        isOpen={showRSVPModal} 
        onClose={() => setShowRSVPModal(false)} 
      />
    </div>
  );
};

export default Index;
