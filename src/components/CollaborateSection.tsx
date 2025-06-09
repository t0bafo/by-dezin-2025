
import React, { useEffect } from 'react';
import { HeadingL, HeadingM, BodyM, BodyS } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Eye, Zap, TrendingUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Declare Instagram global for TypeScript
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface CollaborateSectionProps {
  onPartnerClick: () => void;
}

export const CollaborateSection: React.FC<CollaborateSectionProps> = ({ onPartnerClick }) => {
  useEffect(() => {
    // Load Instagram embed script with only valid script properties
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      script.onload = () => {
        console.log('Instagram script loaded');
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="collaborate">
      {/* Past Sponsors Section - Cream Background */}
      <div className="bg-cream py-16 mobile:py-20 tablet:py-24 desktop:py-28">
        <div className="max-w-7xl mx-auto px-4 mobile:px-6">
          <div className="text-center">
            <HeadingL className="text-black mb-6">Past Sponsors</HeadingL>
            
            <div className="max-w-[500px] mx-auto mb-16">
              <BodyM className="text-black leading-relaxed">
                ByDezin started as an idea and became an experience—made possible by the sponsors who helped bring it to life.
              </BodyM>
            </div>

            {/* Sponsor Logos with Descriptions */}
            <div className="flex flex-col mobile:flex-row justify-center items-center gap-12 mobile:gap-20 mb-16">
              {/* Cheurlin Sponsor */}
              <div className="flex flex-col items-center text-center max-w-[280px]">
                <a 
                  href="https://cheurlin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:opacity-70 mb-4"
                >
                  <img 
                    src="/lovable-uploads/c3ef9153-4231-4bd1-8f1a-029a666256ea.png"
                    alt="Cheurlin"
                    className="h-[60px] mobile:h-[80px] w-auto object-contain filter brightness-0 contrast-100"
                    style={{ filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7500%) hue-rotate(0deg) brightness(0%) contrast(100%)' }}
                  />
                </a>
                <BodyS className="text-black opacity-75 leading-relaxed">
                  Set the tone with elevated hospitality, refined taste, and a touch of culture and celebration
                </BodyS>
              </div>
              
              {/* Apollo Wrldx Sponsor */}
              <div className="flex flex-col items-center text-center max-w-[280px]">
                <a 
                  href="https://apollowrldx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:opacity-70 mb-4"
                >
                  <img 
                    src="/lovable-uploads/97f552a7-f347-452a-a42f-b25d6cec81f7.png"
                    alt="Apollo Wrldx"
                    className="h-[60px] mobile:h-[80px] w-auto object-contain"
                  />
                </a>
                <BodyS className="text-black opacity-75 leading-relaxed">
                  Production partner and creative driver behind the showroom
                </BodyS>
              </div>
            </div>

            {/* Cheurlin Partnership Reel - Clean Instagram embed */}
            <div className="w-full max-w-[540px] mx-auto relative">
              {/* Sound On Text Overlay */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
                <BodyS className="text-cream bg-black bg-opacity-30 px-2 py-1 rounded text-xs opacity-80">
                  Tap for sound on
                </BodyS>
              </div>
              
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink="https://www.instagram.com/reel/C__pe13OAp7/?utm_source=ig_embed&utm_campaign=loading" 
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: '99.375%'
                }}
              >
                <div>
                  <a 
                    href="https://www.instagram.com/reel/C__pe13OAp7/?utm_source=ig_embed&amp;utm_campaign=loading" 
                    style={{ 
                      background: '#C8C8C8', 
                      display: 'block', 
                      fontFamily: 'sans-serif', 
                      fontWeight: 'normal', 
                      lineHeight: '17px', 
                      fontSize: '14px', 
                      fontStyle: 'normal', 
                      margin: '0 auto', 
                      maxWidth: '540px', 
                      padding: '8px 0', 
                      textAlign: 'center', 
                      width: '100%' 
                    }} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <svg 
                        aria-label="Instagram" 
                        role="img" 
                        className="Instagram-Icon" 
                        style={{ fill: '#8e8e8e', color: '#8e8e8e', width: '14px', height: '14px', marginRight: '5px' }} 
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM24.728 21.272c-.264.264-.615.408-.988.408h-13.48c-.372 0-.723-.144-.987-.408-.528-.528-.528-1.384 0-1.912l6.74-6.74c.264-.264.615-.408.988-.408s.723.144.987.408l6.74 6.74c.528.528.528 1.384 0 1.912z"></path>
                      </svg>
                      View this post on Instagram
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Partner With ByDezin Section - Bone Background */}
      <div className="bg-bone py-16 mobile:py-20 tablet:py-24 desktop:py-28">
        <div className="max-w-7xl mx-auto px-4 mobile:px-6">
          <div className="text-center">
            <HeadingL className="text-black mb-6">Partner With ByDezin</HeadingL>
            
            <div className="max-w-[500px] mx-auto mb-16">
              <BodyM className="text-black leading-relaxed">
                Join Cheurlin, Apollo Wrldx, and other visionary brands backing the next wave of fashion talent.
              </BodyM>
            </div>

            {/* Partnership Benefits Grid - Enhanced cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16 max-w-6xl mx-auto">
              {/* Brand Visibility Card */}
              <div className="relative bg-cream border border-[#D4A5A5] border-opacity-20 rounded-lg p-8 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                {/* Subtle decorative element */}
                <div className="absolute top-0 left-0 w-12 h-1 bg-[#D4A5A5] bg-opacity-30 rounded-full"></div>
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4A5A5] bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                    <Eye className="w-8 h-8 text-[#D4A5A5]" />
                  </div>
                </div>
                <HeadingM className="text-black mb-4 font-semibold">
                  Brand Visibility
                </HeadingM>
                <BodyM className="text-black leading-relaxed opacity-75">
                  Showcase your brand to fashion's most influential emerging designers, stylists, and industry tastemakers.
                </BodyM>
              </div>
              
              {/* Custom Activations Card */}
              <div className="relative bg-cream border border-[#D4A5A5] border-opacity-20 rounded-lg p-8 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                {/* Subtle decorative element */}
                <div className="absolute top-0 left-0 w-12 h-1 bg-[#D4A5A5] bg-opacity-30 rounded-full"></div>
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4A5A5] bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                    <Zap className="w-8 h-8 text-[#D4A5A5]" />
                  </div>
                </div>
                <HeadingM className="text-black mb-4 font-semibold">
                  Custom Activations
                </HeadingM>
                <BodyM className="text-black leading-relaxed opacity-75">
                  Create bespoke experiences that align with your brand values and connect authentically with our community.
                </BodyM>
              </div>
              
              {/* Media Amplification Card */}
              <div className="relative bg-cream border border-[#D4A5A5] border-opacity-20 rounded-lg p-8 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                {/* Subtle decorative element */}
                <div className="absolute top-0 left-0 w-12 h-1 bg-[#D4A5A5] bg-opacity-30 rounded-full"></div>
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4A5A5] bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-[#D4A5A5]" />
                  </div>
                </div>
                <HeadingM className="text-black mb-4 font-semibold">
                  Media Amplification
                </HeadingM>
                <BodyM className="text-black leading-relaxed opacity-75">
                  Leverage our content creation and social media reach to amplify your partnership across multiple platforms.
                </BodyM>
              </div>
            </div>

            {/* CTA Button - Changed to red (moody-red) */}
            <Button
              variant="primary"
              size="lg"
              onClick={onPartnerClick}
              className="bg-moody-red text-bone hover:bg-opacity-90 transition-all duration-300 px-8 py-3 text-base font-medium border-moody-red"
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
