
import React from 'react';
import { HeadingL, BodyM, BodyS } from '@/components/Typography';
import { Button } from '@/components/Button';

interface Vision2025Props {
  onBrandApplicationClick: () => void;
}

export const Vision2025: React.FC<Vision2025Props> = ({ onBrandApplicationClick }) => {
  return (
    <section id="vision" className="bg-cream py-20 mobile:py-24 tablet:py-28 desktop:py-32">
      <div className="max-w-7xl mx-auto px-6 mobile:px-8">
        <div className="text-center animate-fade-in">
          {/* Elegant Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <BodyS className="text-black uppercase tracking-wide px-6 py-3 border border-black border-opacity-20 rounded-full bg-bone bg-opacity-50 font-medium text-xs letter-spacing-[0.1em]">
              2025 Vision
            </BodyS>
          </div>
          
          {/* Headline */}
          <HeadingL className="text-black mb-8 tracking-[-0.01em]">
            The Next Chapter Begins
          </HeadingL>
          
          {/* Body copy */}
          <div className="max-w-[640px] mx-auto mb-16">
            <BodyM className="text-black leading-relaxed tracking-[0.005em] text-lg">
              For NYFW S/S 2026, ByDezin moves beyond the pop-up. We're presenting an experiential showcase blending established luxury with fashion's emerging voices. From collection reveals to interactive installations and invite-only networking suites for designers and stylists, it's curated for those redefining the fashion landscape.
            </BodyM>
          </div>
          
          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={onBrandApplicationClick}
            className="bg-moody-red text-bone hover:bg-opacity-90 transition-all duration-200 border-moody-red font-semibold tracking-[0.01em]"
          >
            Apply to Be Featured
          </Button>
        </div>
      </div>
    </section>
  );
};
