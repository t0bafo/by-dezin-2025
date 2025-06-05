
import React from 'react';
import { HeadingXL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';

interface FinalCTAProps {
  onBrandApplicationClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBrandApplicationClick }) => {
  return (
    <section id="rsvp" className="bg-black min-h-[50vh] flex items-center py-20 mobile:py-24 tablet:py-28 desktop:py-32">
      <div className="max-w-7xl mx-auto px-6 mobile:px-8 w-full">
        <div className="text-center animate-fade-in">
          {/* Main Headline */}
          <HeadingXL className="text-white mb-8 font-semibold leading-tight tracking-[-0.02em]">
            Join Us in New York
          </HeadingXL>

          {/* Event Details */}
          <BodyM className="text-cream mb-12 opacity-90 tracking-[0.01em]">
            September 13, 2025
          </BodyM>

          {/* Body Copy */}
          <div className="max-w-[640px] mx-auto mb-16">
            <BodyM className="text-cream leading-relaxed opacity-90 tracking-[0.005em] text-lg">
              An invite-only showroom experience, back in the city where it started. Step inside, connect with the next generation of fashion voices and be part of the moment.
            </BodyM>
          </div>

          {/* CTA Button - Premium styling */}
          <Button
            variant="primary"
            size="lg"
            onClick={onBrandApplicationClick}
            className="bg-gold text-black hover:bg-opacity-90 transition-all duration-300 border-gold font-semibold tracking-[0.01em]"
          >
            Apply to Be Featured
          </Button>
        </div>
      </div>
    </section>
  );
};
