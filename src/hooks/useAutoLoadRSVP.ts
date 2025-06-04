
import { useState, useEffect } from 'react';

export const useAutoLoadRSVP = () => {
  const [shouldShowRSVP, setShouldShowRSVP] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('bydezin-visited');
    
    if (!hasVisited) {
      // Set visited flag
      localStorage.setItem('bydezin-visited', 'true');
      
      // Show RSVP modal after 2 seconds
      const timer = setTimeout(() => {
        setShouldShowRSVP(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const hideAutoRSVP = () => {
    setShouldShowRSVP(false);
  };

  return { shouldShowRSVP, hideAutoRSVP };
};
