
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
        "relative group cursor-pointer overflow-hidden rounded-lg",
        // Mobile: full width with 450px height
        "h-[450px] w-full",
        // Desktop: responsive width (300px to 400px) with 500px height, prevent flex shrinking
        "md:w-[300px] lg:w-[400px] md:h-[500px] md:flex-none",
        // Scroll snap alignment
        "snap-start mobile:snap-center",
        // Hover effect
        "hover:scale-105 transition-transform duration-700"
      )}
    >
      <img
        src={image.src}
        alt={image.designer}
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
      
      {/* Hover Text Overlay */}
      <div className={cn(
        "absolute inset-0 bg-black bg-opacity-0 transition-all duration-300",
        "group-hover:bg-opacity-30",
        "flex items-end p-4"
      )}>
        <div className={cn(
          "text-white font-montserrat font-medium opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100"
        )}>
          {image.designer}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
