
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
        "relative flex-none group cursor-pointer",
        // Desktop: 400x300 (4:3)
        "w-[400px] h-[300px]",
        // Mobile: full width, 3:2 aspect ratio
        "mobile:w-[calc(100vw-48px)] mobile:h-[calc((100vw-48px)*2/3)] mobile:snap-center"
      )}
    >
      <img
        src={image.src}
        alt={image.designer}
        className={cn(
          "w-full h-full rounded shadow-[0_2px_4px_rgba(0,0,0,0.2)]",
          "transition-transform duration-300 group-hover:scale-105"
        )}
        style={{
          objectFit: 'cover',
          objectPosition: image.objectPosition || 'center'
        }}
      />
      
      {/* Hover Overlay */}
      <div className={cn(
        "absolute inset-0 bg-black bg-opacity-0 rounded transition-all duration-300",
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
