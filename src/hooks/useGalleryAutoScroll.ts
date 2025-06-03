
import { useEffect, useRef } from 'react';

interface UseGalleryAutoScrollProps {
  isHovered: boolean;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

export const useGalleryAutoScroll = ({ isHovered, scrollContainerRef }: UseGalleryAutoScrollProps) => {
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollIntervalRef.current = setInterval(() => {
        if (!isHovered && scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          
          // Calculate scroll amount based on screen size
          const isLargeScreen = window.innerWidth >= 1024;
          const isMediumScreen = window.innerWidth >= 768;
          
          let cardWidth;
          if (isMediumScreen && !isLargeScreen) {
            cardWidth = 300; // md:w-[300px]
          } else if (isLargeScreen) {
            cardWidth = 400; // lg:w-[400px]
          } else {
            cardWidth = container.clientWidth; // Mobile: full width
          }
          
          const gap = 24; // Gap between images
          const scrollAmount = cardWidth + gap;
          
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          
          // Reset to beginning if at end
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: 'smooth' });
            }, 1000);
          }
        }
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isHovered, scrollContainerRef]);
};
