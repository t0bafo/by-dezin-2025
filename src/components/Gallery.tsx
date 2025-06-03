
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeadingXL, BodyM, BodyS } from '@/components/Typography';
import { cn } from '@/lib/utils';

const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Placeholder images from unsplash
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop', designer: 'Maya Chen' },
    { id: 2, src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop', designer: 'Alex Rivera' },
    { id: 3, src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop', designer: 'Zara Okafor' },
    { id: 4, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop', designer: 'Jules Martinez' },
    { id: 5, src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop', designer: 'Sage Thompson' },
    { id: 6, src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop', designer: 'Aria Kim' },
    { id: 7, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop', designer: 'Rio Santos' },
    { id: 8, src: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop', designer: 'Nova Patel' },
    { id: 9, src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop', designer: 'Kai Johnson' },
    { id: 10, src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop', designer: 'Luna Williams' },
    { id: 11, src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop', designer: 'Ravi Kumar' },
    { id: 12, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop', designer: 'Ava Brown' },
    { id: 13, src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop', designer: 'Dante Lopez' },
    { id: 14, src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop', designer: 'Iris Chen' },
    { id: 15, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop', designer: 'Felix Garcia' },
    { id: 16, src: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop', designer: 'Mira Singh' },
    { id: 17, src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop', designer: 'Ocean Davis' },
    { id: 18, src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop', designer: 'Star Wilson' },
    { id: 19, src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop', designer: 'River Taylor' },
    { id: 20, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop', designer: 'Phoenix Lee' },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollIntervalRef.current = setInterval(() => {
        if (!isHovered && scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const scrollAmount = 424; // 400px card + 24px gap
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
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 424; // 400px card + 24px gap
      const scrollValue = direction === 'left' ? -scrollAmount : scrollAmount;
      scrollContainerRef.current.scrollBy({ left: scrollValue, behavior: 'smooth' });
    }
  };

  return (
    <section id="highlights" className="bg-bone py-16 mobile:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Content */}
        <div className="text-center mb-12">
          <HeadingXL className="text-black mb-4">
            2024 Showcase Rewind
          </HeadingXL>
          
          <div className="max-w-[600px] mx-auto mb-6">
            <BodyM className="text-black">
              From SoHo to Houston to Lagos, we celebrated bold new voices. And we're just getting started.
            </BodyM>
          </div>
          
          <BodyS className="text-black uppercase tracking-wider mt-3">
            Scroll to experience it for yourself →
          </BodyS>
        </div>

        {/* Gallery Container */}
        <div 
          className="relative"
          onMouseEnter={() => {
            setIsHovered(true);
            setShowArrows(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            setShowArrows(false);
          }}
        >
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "flex gap-6 overflow-x-auto scrollbar-hide pb-4",
              "mobile:gap-6 mobile:pb-0",
              // Mobile: snap scroll
              "mobile:snap-x mobile:snap-mandatory"
            )}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {images.map((image) => (
              <div
                key={image.id}
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
                  alt={`Work by ${image.designer}`}
                  className={cn(
                    "w-full h-full object-cover rounded shadow-[0_2px_4px_rgba(0,0,0,0.2)]",
                    "transition-transform duration-300 group-hover:scale-105"
                  )}
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
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <div className="hidden mobile:block">
            <button
              onClick={() => scroll('left')}
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
              onClick={() => scroll('right')}
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
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
