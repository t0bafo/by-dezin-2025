
import React from 'react';
import { HeadingL, BodyM, BodyS } from '@/components/Typography';
import { Button } from '@/components/Button';

interface Vision2025Props {
  onRSVPClick: () => void;
}

export const Vision2025: React.FC<Vision2025Props> = ({ onRSVPClick }) => {
  return (
    <section id="vision" className="bg-cream py-16 mobile:py-20 tablet:py-24 desktop:py-28">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6">
        <div className="text-center animate-fade-in">
          {/* Elegant Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <BodyS className="text-black uppercase tracking-wide px-4 py-2 border border-black border-opacity-20 rounded-full bg-bone bg-opacity-50 font-medium text-xs">
              2025 Vision
            </BodyS>
          </div>
          
          {/* Headline */}
          <HeadingL className="text-black mb-6">
            The Next Chapter Begins
          </HeadingL>
          
          {/* Body copy */}
          <div className="max-w-[600px] mx-auto mb-12">
            <BodyM className="text-black">
              For NYFW S/S 2026, ByDezin moves beyond the pop up. We're presenting an experiential showcase blending established luxury with fashion's emerging voices. From collection reveals to interactive installations and invite-only networking suites for designers and stylists, it's curated for those redefining the fashion landscape.
            </BodyM>
          </div>
          
          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={onRSVPClick}
            className="bg-moody-red text-bone hover:bg-opacity-90 transition-all duration-200 border-moody-red"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};
