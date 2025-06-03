
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
        // Desktop: 400px width, 300px height (4:3 aspect ratio)
        "w-[400px] h-[300px]",
        // Mobile: 350px width, 233px height (3:2 aspect ratio)
        "mobile:w-[350px] mobile:h-[233px]",
        // Styling
        "rounded border-radius shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
        // Hover effect
        "hover:scale-105 transition-transform duration-300 ease-out",
        // Scroll snap alignment
        "snap-start"
      )}
    >
      <img
        src={image.src}
        alt={image.designer}
        className="w-full h-full object-cover"
      />
      
      {/* Hover Text Overlay */}
      <div className={cn(
        "absolute inset-0 bg-black bg-opacity-0 transition-all duration-300",
        "group-hover:bg-opacity-40",
        "flex items-center justify-center"
      )}>
        <div className={cn(
          "text-white font-montserrat font-medium text-lg opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100"
        )}>
          {image.designer}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
