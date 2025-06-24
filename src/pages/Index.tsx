
import React, { useState } from 'react';
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

const Index = () => {
  const [showBrandApplicationModal, setShowBrandApplicationModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);

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
        
        {/* Main content with top padding to account for larger sticky header */}
        <main className="pt-32 mobile:pt-36 tablet:pt-40">
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

export default Index;
