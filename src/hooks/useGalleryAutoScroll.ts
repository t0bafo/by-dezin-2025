
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
          const isMobile = window.innerWidth < 640;
          
          const cardWidth = isMobile ? 280 : 400; // Updated mobile card width
          const gap = isMobile ? 16 : 24; // Responsive gap
          const scrollAmount = cardWidth + gap;
          
          // Use hardware-accelerated smooth scrolling
          container.scrollBy({ 
            left: scrollAmount, 
            behavior: 'smooth'
          });
          
          // Reset to beginning if at end with smooth transition
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            setTimeout(() => {
              container.scrollTo({ left: 0, behavior: 'smooth' });
            }, 800); // Shorter delay for better responsiveness
          }
        }
      }, isMobile ? 2200 : 3000); // Faster on mobile: 2.2s vs 3s
    };

    startAutoScroll();

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isHovered, scrollContainerRef]);
};
