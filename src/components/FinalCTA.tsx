
import React from 'react';
import { HeadingXL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';

interface FinalCTAProps {
  onRSVPClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRSVPClick }) => {
  return (
    <section id="rsvp" className="bg-black min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto px-10 w-full">
        <div className="text-center animate-fade-in">
          {/* Main Headline */}
          <HeadingXL className="font-playfair text-white mb-6 text-4xl mobile:text-6xl tablet:text-7xl font-bold leading-tight">
            Join Us in New York
          </HeadingXL>

          {/* Event Details */}
          <BodyM className="text-cream mb-8 text-base mobile:text-lg opacity-90">
            September 13, 2025 · New York City
          </BodyM>

          {/* Body Copy */}
          <div className="max-w-[600px] mx-auto mb-12">
            <BodyM className="text-cream leading-relaxed opacity-90">
              An invite-only showroom experience, back in the city where it started. Step inside, connect with the next generation of fashion voices and be part of the moment.
            </BodyM>
          </div>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={onRSVPClick}
            className="bg-gold text-black hover:bg-opacity-90 transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};
