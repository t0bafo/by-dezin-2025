
import React from 'react';
import { HeadingXL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';

interface FinalCTAProps {
  onBrandApplicationClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBrandApplicationClick }) => {
  return (
    <section id="rsvp" className="bg-black min-h-[50vh] flex items-center py-16 mobile:py-20 tablet:py-24 desktop:py-28">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 w-full">
        <div className="text-center animate-fade-in">
          {/* Main Headline */}
          <HeadingXL className="text-white mb-6 font-semibold leading-tight">
            Join Us in New York
          </HeadingXL>

          {/* Event Details */}
          <BodyM className="text-cream mb-8 opacity-90">
            September 13, 2025
          </BodyM>

          {/* Body Copy */}
          <div className="max-w-[600px] mx-auto mb-12">
            <BodyM className="text-cream leading-relaxed opacity-90">
              An invite-only showroom experience, back in the city where it started. Step inside, connect with the next generation of fashion voices and be part of the moment.
            </BodyM>
          </div>

          {/* CTA Button - Gold on black background for contrast */}
          <Button
            variant="primary"
            size="lg"
            onClick={onBrandApplicationClick}
            className="bg-gold text-black hover:bg-opacity-90 transition-all duration-300 border-gold"
          >
            Apply to Be Featured
          </Button>
        </div>
      </div>
    </section>
  );
};
