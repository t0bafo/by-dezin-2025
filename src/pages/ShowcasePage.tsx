import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { BrandApplicationModal } from '@/components/BrandApplicationModal';
import { FeaturedAlumni } from '@/components/FeaturedAlumni';
import { PartnerModal } from '@/components/PartnerModal';
import { Vision2025 } from '@/components/Vision2025';
import { FAQ } from '@/components/FAQ';
import Gallery from '@/components/Gallery';
import ExperienceHighlights from '@/components/ExperienceHighlights';
import { CollaborateSection } from '@/components/CollaborateSection';
import { Footer } from '@/components/Footer';
import { MetaTags } from '@/components/MetaTags';
import { ScriptDivider } from '@/components/ScriptDivider';

const ShowcasePage = () => {
  const [showBrandApplicationModal, setShowBrandApplicationModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);

  // Auto-open brand application modal after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBrandApplicationModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleBrandApplicationClick = () => {
    setShowBrandApplicationModal(true);
  };

  const handleApplyClick = () => {
    setShowPartnerModal(true);
  };

  return (
    <>
      <MetaTags />
      <div className="min-h-screen bg-bone">
        <Header onBrandApplicationClick={handleBrandApplicationClick} />
        
        {/* Main content with improved mobile spacing */}
        <main className="pt-16 mobile:pt-20 tablet:pt-20 desktop:pt-20">
          <section id="hero">
            <HeroSection onBrandApplicationClick={handleBrandApplicationClick} />
          </section>
          
          {/* Script divider between Hero and Gallery */}
          <ScriptDivider text="✦" />
          
          {/* Gallery Section */}
          <Gallery />
          
          {/* Script divider between Gallery and Experience */}
          <ScriptDivider text="◆" />
          
          {/* Experience Highlights Section */}
          <ExperienceHighlights />
          
          {/* Script divider with flourish */}
          <ScriptDivider text="♦" />
          
          {/* Featured Alumni Section */}
          <FeaturedAlumni onApplyClick={handleApplyClick} />
          
          {/* Script divider */}
          <ScriptDivider text="✧" />
          
          {/* Vision 2025 Section */}
          <Vision2025 onBrandApplicationClick={handleBrandApplicationClick} />
          
          {/* Script divider */}
          <ScriptDivider text="◇" />
          
          {/* Collaborate Section */}
          <CollaborateSection onPartnerClick={() => setShowPartnerModal(true)} />
          
          {/* FAQ Section - moved after Collaborate */}
          <FAQ />
        </main>

        {/* Footer with Final CTA */}
        <Footer onBrandApplicationClick={handleBrandApplicationClick} />

        {/* Modals */}
        <BrandApplicationModal 
          isOpen={showBrandApplicationModal} 
          onClose={() => setShowBrandApplicationModal(false)} 
        />
        
        <PartnerModal
          isOpen={showPartnerModal}
          onClose={() => setShowPartnerModal(false)}
        />
      </div>
    </>
  );
};

export default ShowcasePage;