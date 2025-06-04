
import React from 'react';
import { cn } from '@/lib/utils';
import { GalleryImage } from '@/data/galleryData';

interface GalleryItemProps {
  image: GalleryImage;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image }) => {
  // Create descriptive alt text for SEO based on the image content
  const getAltText = (image: GalleryImage) => {
    const altTexts: { [key: number]: string } = {
      1: 'Luxury gold chain jewelry display with black stands and red accent wall at ByDezin fashion showcase',
      2: 'Diverse group of stylish attendees including woman in orange Astros cap and man in black jacket at NYFW event',
      3: 'Fashion-forward individual in leopard print pants, red tie and black leather jacket sitting on urban storefront steps',
      4: 'Two young men in colorful streetwear including vintage sports jerseys and graphic tees at fashion gathering',
      5: 'Happy couple embracing at fashion event, woman in brown off-shoulder top and man in black ribbed sweater',
      6: 'Group of diverse young women taking selfie at ByDezin event, wearing mix of casual and trendy outfits',
      7: 'Two men in modern streetwear at fashion showcase, one in white graphic tee and other in olive jacket',
      8: 'Crowded fashion showroom with diverse attendees browsing clothing racks and networking at ByDezin event',
      9: 'Young Black man in cream and blue striped hooded sweater at busy fashion showcase surrounded by attendees',
      10: 'Group of four stylishly dressed people including woman in purple blazer and man in leather jacket with red tie on city street'
    };
    return altTexts[image.id] || `${image.designer} at ByDezin fashion showcase event`;
  };

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
        alt={getAltText(image)}
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
