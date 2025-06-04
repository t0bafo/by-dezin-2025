
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
      {/* Past Sponsors Section - Bone Background */}
      <div className="bg-bone py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <HeadingL className="text-black mb-6">Past Sponsors</HeadingL>
            
            <div className="max-w-[500px] mx-auto mb-12">
              <BodyM className="text-black leading-relaxed">
                ByDezin started as an idea and became an experience—made possible by the sponsors who helped bring it to life.
              </BodyM>
            </div>

            {/* Sponsor Logos */}
            <div className="flex justify-center items-center gap-20 mb-16 flex-wrap">
              <a 
                href="https://cheurlin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-70"
              >
                <img 
                  src="/lovable-uploads/c3ef9153-4231-4bd1-8f1a-029a666256ea.png"
                  alt="Cheurlin"
                  className="h-[100px] w-auto object-contain"
                />
              </a>
              <a 
                href="https://apollowrldx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:opacity-70"
              >
                <img 
                  src="/lovable-uploads/97f552a7-f347-452a-a42f-b25d6cec81f7.png"
                  alt="Apollo Wrldx"
                  className="h-[100px] w-auto object-contain"
                />
              </a>
            </div>

            {/* Cheurlin Partnership Reel - Clean Instagram embed */}
            <div className="w-full max-w-[540px] mx-auto mb-8">
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

      {/* Partner With ByDezin Section - Cream Background */}
      <div className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <HeadingL className="text-black mb-6">Partner With ByDezin</HeadingL>
            
            <div className="max-w-[500px] mx-auto mb-20">
              <BodyM className="text-black leading-relaxed">
                Join Cheurlin, Apollo Wrldx, and other visionary brands backing the next wave of fashion talent.
              </BodyM>
            </div>

            {/* Partnership Benefits Grid - Card containers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20 max-w-6xl mx-auto">
              {/* Brand Visibility Card */}
              <div className="bg-cream bg-opacity-50 border border-black border-opacity-10 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <Eye className="w-12 h-12 text-dusty-rose" />
                </div>
                <HeadingM className="text-black mb-4 font-medium">
                  Brand Visibility
                </HeadingM>
                <BodyM className="text-black leading-relaxed opacity-75">
                  Showcase your brand to fashion's most influential emerging designers, stylists, and industry tastemakers.
                </BodyM>
              </div>
              
              {/* Custom Activations Card */}
              <div className="bg-cream bg-opacity-50 border border-black border-opacity-10 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <Zap className="w-12 h-12 text-dusty-rose" />
                </div>
                <HeadingM className="text-black mb-4 font-medium">
                  Custom Activations
                </HeadingM>
                <BodyM className="text-black leading-relaxed opacity-75">
                  Create bespoke experiences that align with your brand values and connect authentically with our community.
                </BodyM>
              </div>
              
              {/* Media Amplification Card */}
              <div className="bg-cream bg-opacity-50 border border-black border-opacity-10 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <TrendingUp className="w-12 h-12 text-dusty-rose" />
                </div>
                <HeadingM className="text-black mb-4 font-medium">
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
