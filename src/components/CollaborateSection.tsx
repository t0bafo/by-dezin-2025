
import React from 'react';
import { HeadingL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Eye, Zap, TrendingUp } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface CollaborateSectionProps {
  onPartnerClick: () => void;
}

export const CollaborateSection: React.FC<CollaborateSectionProps> = ({ onPartnerClick }) => {
  return (
    <section id="collaborate" className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Past Sponsors Section */}
        <div className="text-center mb-16">
          <HeadingL className="text-black mb-6">Past Sponsors</HeadingL>
          
          <div className="max-w-[600px] mx-auto mb-12">
            <BodyM className="text-black">
              ByDezin started as an idea and became an experience—made possible by the sponsors who helped bring it to life.
            </BodyM>
          </div>

          {/* Sponsor Logos */}
          <div className="flex justify-center items-center gap-16 mb-12 flex-wrap">
            <a 
              href="https://cheurlin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
            >
              <img 
                src="/lovable-uploads/c3ef9153-4231-4bd1-8f1a-029a666256ea.png"
                alt="Cheurlin"
                className="h-[120px] w-auto object-contain"
              />
            </a>
            <a 
              href="https://apollowrldx.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
            >
              <img 
                src="/lovable-uploads/97f552a7-f347-452a-a42f-b25d6cec81f7.png"
                alt="Apollo Wrldx"
                className="h-[120px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Cheurlin Partnership Reel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.instagram.com/reel/C__pe13OAp7/embed"
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                loading="lazy"
                title="Cheurlin Partnership Reel"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                Tap for sound
              </div>
            </div>
          </div>
        </div>

        {/* Spacer/Divider */}
        <div className="my-20">
          <Separator className="bg-black bg-opacity-20" />
        </div>

        {/* Partner With Us Section */}
        <div className="text-center">
          <HeadingL className="text-black mb-6">Partner With ByDezin</HeadingL>
          
          <div className="max-w-[600px] mx-auto mb-16">
            <BodyM className="text-black">
              Join Cheurlin, Apollo Wrldx, and other visionary brands backing the next wave of fashion talent.
            </BodyM>
          </div>

          {/* Partnership Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Eye className="w-12 h-12 text-black" />
              </div>
              <HeadingL className="text-black text-2xl mb-4" as="h3">Brand Visibility</HeadingL>
              <BodyM className="text-black">
                Showcase your brand to fashion's most influential emerging designers, stylists, and industry tastemakers.
              </BodyM>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Zap className="w-12 h-12 text-black" />
              </div>
              <HeadingL className="text-black text-2xl mb-4" as="h3">Custom Activations</HeadingL>
              <BodyM className="text-black">
                Create bespoke experiences that align with your brand values and connect authentically with our community.
              </BodyM>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <TrendingUp className="w-12 h-12 text-black" />
              </div>
              <HeadingL className="text-black text-2xl mb-4" as="h3">Media Amplification</HeadingL>
              <BodyM className="text-black">
                Leverage our content creation and social media reach to amplify your partnership across multiple platforms.
              </BodyM>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={onPartnerClick}
            className="bg-gold text-black hover:bg-opacity-90 transition-all duration-200"
          >
            Partner with Us
          </Button>
        </div>
      </div>
    </section>
  );
};
