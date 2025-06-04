
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
        // Styling
        "rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
        // Hover effect - only on non-touch devices
        "tablet:hover:scale-105 transition-transform duration-300 ease-out",
        // Scroll snap alignment
        "snap-start"
      )}
    >
      <img
        src={image.src}
        alt={image.designer}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      
      {/* Hover Text Overlay - Adjusted for mobile */}
      <div className={cn(
        "absolute inset-0 bg-black bg-opacity-0 transition-all duration-300",
        "tablet:group-hover:bg-opacity-40",
        "flex items-center justify-center"
      )}>
        <div className={cn(
          "text-white font-montserrat font-medium opacity-0 transition-opacity duration-300",
          "tablet:group-hover:opacity-100",
          "text-sm mobile:text-base tablet:text-lg",
          "px-4 text-center"
        )}>
          {image.designer}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
