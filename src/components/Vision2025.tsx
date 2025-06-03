
import React from 'react';
import { HeadingL, BodyM, BodyS } from '@/components/Typography';
import { Button } from '@/components/Button';

interface Vision2025Props {
  onRSVPClick: () => void;
}

export const Vision2025: React.FC<Vision2025Props> = ({ onRSVPClick }) => {
  return (
    <section id="vision" className="bg-bone relative overflow-hidden">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <BodyS className="text-black uppercase tracking-wide mb-2">
            2025 VISION
          </BodyS>
          
          {/* Headline */}
          <HeadingL className="text-black mb-4">
            The Next Chapter Begins
          </HeadingL>
          
          {/* Body copy */}
          <div className="max-w-[600px] mx-auto mb-6">
            <BodyM className="text-black">
              For NYFW S/S 2026, ByDezin moves beyond the pop up. We're presenting an experiential showcase blending established luxury with fashion's emerging voices. From collection reveals to interactive installations and invite-only networking suites for designers and stylists, it's curated for those redefining the fashion landscape.
            </BodyM>
          </div>
          
          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={onRSVPClick}
            className="bg-gold text-black hover:bg-opacity-90 transition-all duration-200"
          >
            Get Early Access
          </Button>
        </div>
      </div>
      
      {/* Full background image with responsive design */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] mobile:h-[400px] tablet:h-[500px] z-0">
        <div className="w-full h-full relative">
          <img 
            src="/lovable-uploads/4e38946a-c9a2-4c2d-a980-c68f45d73b73.png"
            alt="Designer celebration with flowers and clothing rack"
            className="w-full h-full object-contain object-bottom"
          />
          {/* Cream gradient overlay for text legibility */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent opacity-40"
          />
        </div>
      </div>
    </section>
  );
};
