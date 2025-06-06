
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const CountdownTimer: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const targetDate = new Date('2025-09-13T00:00:00');
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();
      const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return Math.max(0, days);
    };

    const updateCountdown = () => {
      const newDaysLeft = calculateDaysLeft();
      setDaysLeft(newDaysLeft);
    };

    // Initial calculation
    updateCountdown();

    // Fade in after component mounts
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Update every minute to catch day changes
    const interval = setInterval(updateCountdown, 60000);

    return () => {
      clearTimeout(fadeInTimer);
      clearInterval(interval);
    };
  }, []);

  if (daysLeft <= 0) {
    return null;
  }

  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center transition-all duration-700 ease-out",
        "opacity-0 transform translate-y-2",
        isVisible && "opacity-100 translate-y-0"
      )}
    >
      <div className="text-center">
        {/* Days number with smooth transition */}
        <div className="relative overflow-hidden">
          <div 
            className="font-eb-garamond text-xl mobile:text-2xl font-semibold text-black transition-all duration-500 ease-out transform"
            key={daysLeft}
          >
            {daysLeft}
          </div>
        </div>
        
        {/* "DAYS" text */}
        <div className="font-eb-garamond text-xl mobile:text-2xl font-semibold text-black -mt-1">
          DAYS
        </div>
        
        {/* "TO BYDEZIN" subtitle */}
        <div className="font-eb-garamond text-xs mobile:text-sm text-black opacity-70 tracking-widest uppercase -mt-1">
          TO BYDEZIN
        </div>
      </div>
    </div>
  );
};
