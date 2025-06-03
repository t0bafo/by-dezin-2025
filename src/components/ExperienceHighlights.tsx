
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

        {/* Video Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-[800px]">
            {/* Responsive 16:9 iframe container */}
            <div 
              className="relative w-full bg-gray-200 rounded-lg shadow-lg"
              style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.instagram.com/reel/placeholder/"
                title="ByDezin 2024 Experience Highlights"
                frameBorder="0"
                allowFullScreen
              />
              
              {/* Placeholder content for demonstration */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <BodyM className="text-gray-500">Instagram Reel Placeholder</BodyM>
                </div>
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
