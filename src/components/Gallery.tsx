
import React, { useState, useRef } from 'react';
import { HeadingL, BodyM, BodyS } from '@/components/Typography';
import { cn } from '@/lib/utils';
import { galleryImages } from '@/data/galleryData';
import GalleryItem from '@/components/GalleryItem';
import GalleryNavigation from '@/components/GalleryNavigation';
import { useGalleryAutoScroll } from '@/hooks/useGalleryAutoScroll';

const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showArrows, setShowArrows] = useState(false);

  // Use the custom hook for auto-scroll functionality
  useGalleryAutoScroll({ isHovered, scrollContainerRef });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Calculate scroll amount based on screen size
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      
      let cardWidth = 400; // Desktop default
      let gap = 24; // Desktop gap
      
      if (isMobile) {
        cardWidth = 280; // Mobile card width
        gap = 16; // Mobile gap
      } else if (isTablet) {
        cardWidth = 350; // Tablet card width
        gap = 20; // Tablet gap
      }
      
      const scrollAmount = cardWidth + gap;
      const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;
      
      // Hardware-accelerated smooth scrolling
      container.scrollBy({ 
        left: scrollValue, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="highlights" className="bg-bone py-12 mobile:py-16 tablet:py-20 desktop:py-24">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6">
        {/* Header Content */}
        <div className="text-center mb-8 mobile:mb-10 tablet:mb-12">
          <HeadingL className="text-black mb-4">
            2024 Showcase Rewind
          </HeadingL>
          
          <div className="max-w-[600px] mx-auto mb-6">
            <BodyM className="text-black">
              From SoHo to Houston to Lagos, we celebrated bold new voices. And we're just getting started.
            </BodyM>
          </div>
          
          <BodyS className="text-black uppercase tracking-wider opacity-70">
            Scroll to experience it for yourself →
          </BodyS>
        </div>

        {/* Gallery Container */}
        <div 
          className="relative"
          onMouseEnter={() => {
            setIsHovered(true);
            setShowArrows(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowArrows(false);
          }}
        >
          {/* Scroll Container - Enhanced mobile performance */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "flex gap-4 mobile:gap-4 overflow-x-auto pb-4",
              // Enhanced scroll performance and behavior
              "scroll-smooth snap-x snap-mandatory",
              // Hardware acceleration and smooth scrolling
              "transform-gpu will-change-scroll",
              // Hide scrollbar but ensure touch scrolling works
              "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
              // Enhanced mobile touch scrolling with momentum
              "overscroll-behavior-x-contain touch-pan-x"
            )}
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
              // Hardware acceleration
              transform: 'translate3d(0, 0, 0)',
              // Smooth momentum scrolling
              scrollBehavior: 'smooth'
            }}
          >
            {galleryImages.map((image) => (
              <GalleryItem key={image.id} image={image} />
            ))}
          </div>

          {/* Navigation Arrows - Desktop and Tablet Only */}
          <GalleryNavigation
            showArrows={showArrows}
            onScrollLeft={() => scroll('left')}
            onScrollRight={() => scroll('right')}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
