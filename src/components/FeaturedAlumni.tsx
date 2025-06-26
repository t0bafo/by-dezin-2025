import React from 'react';
import { HeadingL, BodyM } from '@/components/Typography';
import { ChevronDown, ExternalLink } from 'lucide-react';

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
      {/* Logo Container with hover effects */}
      <div className="w-32 h-32 mobile:w-36 mobile:h-36 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg">
        <img 
          src={logoSrc} 
          alt={`${name} logo`}
          className="max-w-full max-h-full object-contain transition-all duration-300"
        />
      </div>
      
      {/* Brand Info with enhanced styling */}
      <div className="space-y-1">
        <div className="flex items-center justify-center gap-1">
          <h3 className="font-eb-garamond font-semibold text-lg text-black group-hover:text-moody-red group-hover:underline underline-offset-4 decoration-2 transition-all duration-200 cursor-pointer">
            {name}
          </h3>
          <ExternalLink 
            size={14} 
            className="text-black group-hover:text-moody-red transition-colors duration-200 opacity-60 group-hover:opacity-100" 
          />
        </div>
        <p className="font-inter text-sm text-black group-hover:text-gray-800 transition-colors duration-200">
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
        className="block transition-transform duration-200 hover:scale-[1.02]"
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
      name: "NADI by Dani",
      location: "Houston",
      logoSrc: "/lovable-uploads/8898d3b0-aaff-41c7-b912-18c7dc376eb7.png",
      link: "https://www.instagram.com/nadibydani/?hl=en"
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
      logoSrc: "/lovable-uploads/ba4ee34b-527e-441c-b483-33f7a5e52dde.png",
      link: "https://fmilia.com/"
    },
    {
      name: "Seta The Label",
      location: "Lagos, Nigeria",
      logoSrc: "/lovable-uploads/c9878936-9fdf-46f8-b143-103fc5dd6421.png",
      link: "https://www.setathelabel.com"
    }
  ];

  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#alumni')?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="alumni" className="bg-bone py-16 mobile:py-20 tablet:py-24 desktop:py-28">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <HeadingL className="text-black mb-6">
            Featured Alumni
          </HeadingL>
          
          <div className="max-w-[600px] mx-auto">
            <BodyM className="text-black">
              Last season, these fresh voices made their ByDezin debut, each one shaping the future of style in their city and beyond.
            </BodyM>
            
            {/* Script accent quote - updated font */}
            <div className="mt-6">
              <span className="font-dancing-script text-xl mobile:text-2xl text-gold font-medium italic">
                "Where emerging meets established"
              </span>
            </div>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-2 mobile:grid-cols-4 gap-8 mobile:gap-12 mb-16">
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

        {/* Updated Call to Action with Scroll Functionality */}
        <div className="text-center">
          <BodyM className="text-black mb-6">
            Think your label belongs in the mix?{' '}
            <button
              onClick={handleScrollToNext}
              className="text-gold hover:text-moody-red underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-200 cursor-pointer"
            >
              Scroll below
            </button>
            {' '}to learn more, join the ByDezin community and showcase your vision.
          </BodyM>
          
          {/* Animated Down Arrow */}
          <button
            onClick={handleScrollToNext}
            className="mt-4 text-gold hover:text-moody-red transition-colors duration-200 animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
