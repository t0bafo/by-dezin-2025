
import React from 'react';
import { cn } from '@/lib/utils';
import { GalleryImage } from '@/data/galleryData';

interface GalleryItemProps {
  image: GalleryImage;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image }) => {
  return (
    <div
      className={cn(
        "relative group cursor-pointer overflow-hidden flex-none",
        // Responsive sizing: Mobile (280px), Tablet (350px), Desktop (400px)
        "w-[280px] h-[200px] mobile:w-[350px] mobile:h-[250px] tablet:w-[400px] tablet:h-[300px]",
        // Styling with hardware acceleration
        "rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
        // Enhanced smooth animations with hardware acceleration
        "tablet:hover:scale-105 transition-all duration-300 ease-out",
        "transform-gpu will-change-transform",
        // Scroll snap alignment
        "snap-start"
      )}
      style={{
        // Hardware acceleration for smoother animations
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      <img
        src={image.src}
        alt={image.designer}
        className={cn(
          "w-full h-full object-cover",
          // Hardware acceleration for image rendering
          "transform-gpu will-change-transform"
        )}
        loading="lazy"
        style={{
          transform: 'translate3d(0, 0, 0)'
        }}
      />
      
      {/* Hover Text Overlay - Enhanced with hardware acceleration */}
      <div className={cn(
        "absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 ease-out",
        "tablet:group-hover:bg-opacity-40",
        "flex items-center justify-center",
        "transform-gpu will-change-transform"
      )}
      style={{
        transform: 'translate3d(0, 0, 0)'
      }}>
        <div className={cn(
          "text-white font-montserrat font-medium opacity-0 transition-all duration-300 ease-out",
          "tablet:group-hover:opacity-100",
          "text-sm mobile:text-base tablet:text-lg",
          "px-4 text-center",
          "transform-gpu will-change-opacity"
        )}
        style={{
          transform: 'translate3d(0, 0, 0)'
        }}>
          {image.designer}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
