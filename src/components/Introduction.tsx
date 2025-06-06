
import React from 'react';
import { BodyM } from '@/components/Typography';

export const Introduction: React.FC = () => {
  return (
    <section className="bg-cream py-16 mobile:py-20 tablet:py-24 desktop:py-28">
      <div className="max-w-7xl mx-auto px-6 mobile:px-8">
        <div className="text-center">
          <div className="max-w-[600px] mx-auto">
            <BodyM className="text-black leading-relaxed">
              An invite-only showroom experience, back in the city where it started. Step inside, connect with the next generation of fashion voices and be part of the moment.
            </BodyM>
          </div>
        </div>
      </div>
    </section>
  );
};
