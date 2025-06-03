
import React from 'react';
import { HeadingL, BodyM, BodyS } from '@/components/Typography';

const ExperienceHighlights: React.FC = () => {
  return (
    <section className="bg-cream py-16 mobile:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Content */}
        <div className="text-center mb-16">
          <HeadingL className="text-black mb-4">
            Inside the ByDezin Experience
          </HeadingL>
          
          <div className="max-w-[600px] mx-auto mb-6">
            <BodyM className="text-black">
              Your 60-second rewind. A flash of style, sound and community in just 60 seconds. This was ByDezin 2024.
            </BodyM>
          </div>
        </div>

        {/* Instagram Embed Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-[800px]">
            {/* Instagram Iframe Embed */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[540px] aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.instagram.com/reel/C_6RBgmpyPc/embed"
                  className="w-full h-full border-0"
                  scrolling="no"
                  allowTransparency={true}
                  allow="autoplay; encrypted-media"
                  title="ByDezin 2024 Experience Reel"
                />
              </div>
            </div>
            
            {/* Video Caption */}
            <div className="text-center mt-6">
              <BodyS className="text-gray-600 uppercase tracking-wider">
                Tap for sound on • View on Instagram
              </BodyS>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
