
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
      const scrollAmount = 424; // 400px card + 24px gap
      const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({ left: scrollValue, behavior: 'smooth' });
    }
  };

  return (
    <section id="highlights" className="bg-bone py-16 mobile:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Content */}
        <div className="text-center mb-12">
          <HeadingL className="text-black mb-4">
            2024 Showcase Rewind
          </HeadingL>
          
          <div className="max-w-[600px] mx-auto mb-6">
            <BodyM className="text-black">
              From SoHo to Houston to Lagos, we celebrated bold new voices. And we're just getting started.
            </BodyM>
          </div>
          
          <BodyS className="text-black uppercase tracking-wider mt-3">
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
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "flex gap-6 overflow-x-auto pb-4",
              "mobile:gap-6 mobile:pb-0",
              // Mobile: snap scroll
              "mobile:snap-x mobile:snap-mandatory",
              // Hide scrollbar
              "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            )}
            style={{
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {galleryImages.map((image) => (
              <GalleryItem key={image.id} image={image} />
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
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
