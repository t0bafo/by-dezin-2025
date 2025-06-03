
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
          const cardWidth = 400; // Image width
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
