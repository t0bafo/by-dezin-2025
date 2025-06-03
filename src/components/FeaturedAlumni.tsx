
import React from 'react';
import { HeadingL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';

interface FeaturedAlumniProps {
  onApplyClick: () => void;
}

interface AlumniItemProps {
  name: string;
  location: string;
  logoSrc: string;
  link: string;
  isExternal?: boolean;
}

const AlumniItem: React.FC<AlumniItemProps> = ({ 
  name, 
  location, 
  logoSrc, 
  link, 
  isExternal = true 
}) => {
  const content = (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      {/* Logo Container - removed white background */}
      <div className="w-32 h-32 mobile:w-36 mobile:h-36 flex items-center justify-center mb-4">
        <img 
          src={logoSrc} 
          alt={`${name} logo`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      {/* Brand Info */}
      <div className="space-y-1">
        <h3 className="font-montserrat font-semibold text-lg text-black group-hover:underline group-hover:text-gray-800 transition-all duration-200">
          {name}
        </h3>
        <p className="font-montserrat text-sm text-black group-hover:text-gray-800 transition-colors duration-200">
          {location}
        </p>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
};

export const FeaturedAlumni: React.FC<FeaturedAlumniProps> = ({ onApplyClick }) => {
  const alumni = [
    {
      name: "NADI",
      location: "Houston",
      logoSrc: "/lovable-uploads/2e934736-7e00-442e-b910-43ebe5aa6984.png",
      link: "https://nadibydani.com/"
    },
    {
      name: "SONDER",
      location: "New York",
      logoSrc: "/lovable-uploads/5701fc32-9365-49fd-bb43-9c4709d5770a.png",
      link: "https://www.instagram.com/sondernewyork?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
    {
      name: "FMLIA",
      location: "New York",
      logoSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop", // Placeholder for FMLIA
      link: "https://fmilia.com/"
    },
    {
      name: "Seta The Label",
      location: "Lagos, Nigeria",
      logoSrc: "/lovable-uploads/c9878936-9fdf-46f8-b143-103fc5dd6421.png",
      link: "https://www.setathelabel.com"
    }
  ];

  return (
    <section id="alumni" className="bg-bone py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <HeadingL className="text-black mb-6">
            Featured Alumni
          </HeadingL>
          
          <div className="max-w-[600px] mx-auto mb-6">
            <BodyM className="text-black">
              Last season, these fresh voices made their ByDezin debut, each one shaping the future of style in their city and beyond.
            </BodyM>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-2 mobile:grid-cols-4 gap-8 mobile:gap-12 mb-12">
          {alumni.map((brand, index) => (
            <AlumniItem
              key={index}
              name={brand.name}
              location={brand.location}
              logoSrc={brand.logoSrc}
              link={brand.link}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <BodyM className="text-black mb-6">
            Think your label belongs in the mix? Join the ByDezin community and showcase your vision.{' '}
            <Button
              variant="secondary"
              size="sm"
              onClick={onApplyClick}
              className="inline-block"
            >
              Apply to Be Featured
            </Button>
          </BodyM>
        </div>
      </div>
    </section>
  );
};
