
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeadingL, BodyM, BodyS } from '@/components/Typography';
import { cn } from '@/lib/utils';

const Gallery: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Complete image collection with all 20 ByDezin 2024 photos
  const images = [
    // Opening sequence - first 10 images (existing)
    { 
      id: 1, 
      src: '/lovable-uploads/6aae11e4-7f30-4c14-be66-3b2186c4025b.png', 
      designer: 'Event Opening',
      objectPosition: 'center'
    },
    { 
      id: 2, 
      src: '/lovable-uploads/115274a3-ab51-4251-9b7f-e8a786bd3a86.png', 
      designer: 'Venue Atmosphere',
      objectPosition: 'center'
    },
    { 
      id: 3, 
      src: '/lovable-uploads/957511f9-df48-4b10-b90a-ac8a58a2c0c2.png', 
      designer: 'Designer Connections',
      objectPosition: 'center top'
    },
    { 
      id: 4, 
      src: '/lovable-uploads/35bc2f25-909d-4752-a16d-069f30434f4c.png', 
      designer: 'Bold Statement Pieces',
      objectPosition: 'center'
    },
    { 
      id: 5, 
      src: '/lovable-uploads/15114ed3-237e-4c42-abb6-fe342e2540c3.png', 
      designer: 'Creative Collaborations',
      objectPosition: 'center'
    },
    { 
      id: 6, 
      src: '/lovable-uploads/4c4c3460-eaeb-4354-813e-6226aaa30e78.png', 
      designer: 'Floral Expressions',
      objectPosition: 'center top'
    },
    { 
      id: 7, 
      src: '/lovable-uploads/9f4a671e-c453-4f7c-b527-2499d014b249.png', 
      designer: 'Street Style Moments',
      objectPosition: 'center top'
    },
    { 
      id: 8, 
      src: '/lovable-uploads/3ac51bfd-6a64-460f-b671-e9a8cfd3bb80.png', 
      designer: 'Authentic Self-Expression',
      objectPosition: 'center'
    },
    { 
      id: 9, 
      src: '/lovable-uploads/a5b33daf-b158-4ac7-a1af-b59aa615e777.png', 
      designer: 'Unique Style Stories',
      objectPosition: 'center'
    },
    { 
      id: 10, 
      src: '/lovable-uploads/153e400a-6458-4a57-ba85-6ad22df79343.png', 
      designer: 'Avant-Garde Vision',
      objectPosition: 'center top'
    },
    // Peak moments and highlights - second batch of 10 images
    { 
      id: 11, 
      src: '/lovable-uploads/bc6401cc-99d5-40c3-aba9-3314833ef583.png', 
      designer: 'Street Style Squad',
      objectPosition: 'center'
    },
    { 
      id: 12, 
      src: '/lovable-uploads/73d21de6-b2e1-45b3-8504-2354e814c523.png', 
      designer: 'Designer Showcase Moment',
      objectPosition: 'center'
    },
    { 
      id: 13, 
      src: '/lovable-uploads/0d034a87-8d09-49d2-9aee-b6f317a8c804.png', 
      designer: 'Community Connections',
      objectPosition: 'center'
    },
    { 
      id: 14, 
      src: '/lovable-uploads/8d299c30-bbe0-41b1-8c2a-3b4765d49aa4.png', 
      designer: 'SoHo Gallery Experience',
      objectPosition: 'center'
    },
    { 
      id: 15, 
      src: '/lovable-uploads/1369d95e-71c9-4333-83c2-e1b9f5294667.png', 
      designer: 'Shared Memories',
      objectPosition: 'center'
    },
    { 
      id: 16, 
      src: '/lovable-uploads/cac5d4e9-02da-4782-b0a0-35dcc4d1a3b2.png', 
      designer: 'Genuine Moments',
      objectPosition: 'center'
    },
    { 
      id: 17, 
      src: '/lovable-uploads/a7e0d2d0-d7cf-4b16-88ff-c9aea44f57d2.png', 
      designer: 'Victory Celebration',
      objectPosition: 'center'
    },
    { 
      id: 18, 
      src: '/lovable-uploads/f1f85aea-d843-463a-a720-5950c7284db3.png', 
      designer: 'Rising Talent Spotlight',
      objectPosition: 'center'
    },
    { 
      id: 19, 
      src: '/lovable-uploads/d8f449e1-1a90-469f-a206-a1ba0c867d04.png', 
      designer: 'Music & Atmosphere',
      objectPosition: 'center'
    },
    { 
      id: 20, 
      src: '/lovable-uploads/6cf4c1fe-079a-4bb3-9d10-6e25b8f1cc67.png', 
      designer: 'Luxury Showcase',
      objectPosition: 'center'
    },
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
          <HeadingL className="text-black mb-4">
            2024 Showcase Rewind
          </HeadingL>
          
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
              "flex gap-6 overflow-x-auto pb-4",
              "mobile:gap-6 mobile:pb-0",
              // Mobile: snap scroll
              "mobile:snap-x mobile:snap-mandatory",
              // Hide scrollbar
              "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            )}
            style={{
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
    </section>
  );
};

export default Gallery;
