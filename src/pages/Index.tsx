
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { RSVPModal } from '@/components/RSVPModal';
import { FeaturedAlumni } from '@/components/FeaturedAlumni';
import { PartnerModal } from '@/components/PartnerModal';
import Gallery from '@/components/Gallery';
import ExperienceHighlights from '@/components/ExperienceHighlights';
import { HeadingL, BodyM } from '@/components/Typography';

const Index = () => {
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);

  const handleRSVPClick = () => {
    setShowRSVPModal(true);
  };

  const handleApplyClick = () => {
    setShowPartnerModal(true);
  };

  return (
    <div className="min-h-screen bg-bone">
      <Header onRSVPClick={handleRSVPClick} />
      
      {/* Main content with top padding to account for sticky header */}
      <main className="pt-16">
        <section id="hero">
          <HeroSection />
        </section>
        
        {/* Gallery Section */}
        <Gallery />
        
        {/* Experience Highlights Section */}
        <ExperienceHighlights />
        
        {/* Featured Alumni Section */}
        <FeaturedAlumni onApplyClick={handleApplyClick} />
        
        {/* Placeholder sections for navigation anchors */}
        <section id="vision" className="min-h-screen flex items-center justify-center bg-cream">
          <div className="text-center">
            <HeadingL className="text-black mb-4">Vision</HeadingL>
            <BodyM className="text-black">Coming soon...</BodyM>
          </div>
        </section>
        
        <section id="collaborate" className="min-h-screen flex items-center justify-center bg-bone">
          <div className="text-center">
            <HeadingL className="text-black mb-4">Collaborate</HeadingL>
            <BodyM className="text-black">Coming soon...</BodyM>
          </div>
        </section>
      </main>

      {/* Modals */}
      <RSVPModal 
        isOpen={showRSVPModal} 
        onClose={() => setShowRSVPModal(false)} 
      />
      
      <PartnerModal
        isOpen={showPartnerModal}
        onClose={() => setShowPartnerModal(false)}
      />
    </div>
  );
};

export default Index;
