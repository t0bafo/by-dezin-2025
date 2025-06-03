
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryNavigationProps {
  showArrows: boolean;
  onScrollLeft: () => void;
  onScrollRight: () => void;
}

const GalleryNavigation: React.FC<GalleryNavigationProps> = ({
  showArrows,
  onScrollLeft,
  onScrollRight
}) => {
  return (
    <div className="hidden mobile:block">
      <button
        onClick={onScrollLeft}
        className={cn(
          "absolute left-4 top-1/2 transform -translate-y-1/2 z-10",
          "w-8 h-8 bg-white rounded-full shadow-lg",
          "flex items-center justify-center",
          "transition-opacity duration-300",
          "hover:bg-gray-50",
          showArrows ? "opacity-100" : "opacity-0"
        )}
      >
        <ChevronLeft className="w-5 h-5 text-black" />
      </button>
      
      <button
        onClick={onScrollRight}
        className={cn(
          "absolute right-4 top-1/2 transform -translate-y-1/2 z-10",
          "w-8 h-8 bg-white rounded-full shadow-lg",
          "flex items-center justify-center",
          "transition-opacity duration-300",
          "hover:bg-gray-50",
          showArrows ? "opacity-100" : "opacity-0"
        )}
      >
        <ChevronRight className="w-5 h-5 text-black" />
      </button>
    </div>
  );
};

export default GalleryNavigation;
