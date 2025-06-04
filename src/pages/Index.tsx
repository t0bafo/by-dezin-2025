
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { RSVPModal } from '@/components/RSVPModal';
import { FeaturedAlumni } from '@/components/FeaturedAlumni';
import { PartnerModal } from '@/components/PartnerModal';
import { Vision2025 } from '@/components/Vision2025';
import Gallery from '@/components/Gallery';
import ExperienceHighlights from '@/components/ExperienceHighlights';
import { CollaborateSection } from '@/components/CollaborateSection';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

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
        
        {/* Vision 2025 Section */}
        <Vision2025 onRSVPClick={handleRSVPClick} />
        
        {/* Collaborate Section */}
        <CollaborateSection onPartnerClick={() => setShowPartnerModal(true)} />
        
        {/* Final Call to Action Section */}
        <FinalCTA onRSVPClick={handleRSVPClick} />
      </main>

      {/* Footer */}
      <Footer />

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
