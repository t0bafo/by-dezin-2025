
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
      10: 'Group of four stylishly dressed people including woman in purple blazer and man in leather jacket with red tie on city street',
      11: 'Professional bartender in blue cut-out dress serving champagne at upscale fashion event with modern blue tile backdrop',
      12: 'Stylish Black woman with long locs wearing yellow and green varsity jacket, white shirt, and glasses on NYC street during fashion week',
      13: 'Three fashionable women networking and connecting at ByDezin event, including woman in bright yellow cardigan making animated gestures',
      14: 'Professional DJ with blonde hair wearing metallic blue sequined jacket mixing music at fashion showcase event',
      15: 'Two fashionably dressed men outside ByDezin storefront window, one in black leather jacket and the other in varsity style outerwear',
      16: 'Young Black man with locs wearing tan utility vest over colorful patterned shirt on busy NYC street during fashion week',
      17: 'Stylish young woman with locs talking on phone while standing next to car, wearing black crop top and olive green textured skirt',
      18: 'Fashionable young Black man with blonde hair in metallic blue jacket holding colorful flower bouquet on NYC street',
      19: 'ByDezin Apollo storefront window display at Sonder New York gallery featuring "Set the Label" branding and designer showcase',
      20: 'Excited Black woman designer holding large bouquet of flowers next to clothing rack displaying colorful garments at fashion showcase',
      21: 'Black male designer in pastel tie-dye sweater smiling in bright fashion studio with colorful clothing rack and artwork backdrop'
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
