import React, { useState } from 'react';
import { HeadingXL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';
import { GridContainer, Grid, Col } from '@/components/Grid';
import { BrandApplicationModal } from '@/components/BrandApplicationModal';
import { RSVPModal } from '@/components/RSVPModal';
import { useAutoLoadRSVP } from '@/hooks/useAutoLoadRSVP';

interface HeroSectionProps {
  videoSrc?: string;
  headline?: string;
  description?: string;
  eventDetails?: string;
  primaryCta?: string;
  onBrandApplicationClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  videoSrc = "/hero-video-latest.mov",
  headline = "ByDezin Returns to NYFW",
  description = "An invite-only showroom experience, back in the city where it started. Step inside, connect with the next generation of fashion voices and be part of the moment.",
  eventDetails = "September 13, 2025 · New York City",
  primaryCta = "Showcase Your Brand",
  onBrandApplicationClick
}) => {
  const [showBrandApplicationModal, setShowBrandApplicationModal] = useState(false);
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const { shouldShowRSVP, hideAutoRSVP } = useAutoLoadRSVP();

  // Auto-show Brand Application modal
  React.useEffect(() => {
    if (shouldShowRSVP) {
      setShowBrandApplicationModal(true);
    }
  }, [shouldShowRSVP]);

  const handleBrandApplicationClick = () => {
    if (onBrandApplicationClick) {
      onBrandApplicationClick();
    } else {
      setShowBrandApplicationModal(true);
    }
  };

  const handleBrandApplicationClose = () => {
    setShowBrandApplicationModal(false);
    hideAutoRSVP();
  };

  const handleRSVPClick = () => {
    setShowRSVPModal(true);
  };

  const handleRSVPClose = () => {
    setShowRSVPModal(false);
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video failed to load:', e);
    console.error('Video src:', videoSrc);
    setVideoError(true);
  };

  const handleVideoCanPlay = () => {
    console.log('Video can start playing');
  };

  console.log('HeroSection rendering with videoSrc:', videoSrc);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background - Clean mobile, enhanced desktop */}
      <div className="absolute inset-0">
        {/* Desktop Only: Enhanced background with gradients and blur */}
        <div className="hidden md:block absolute inset-0">
          {/* Side gradients for desktop */}
          <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
          
          {/* Blurred background video for desktop */}
          <video
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-30"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Main video - responsive handling */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onCanPlay={handleVideoCanPlay}
          controls={false}
        >
          <source src={videoSrc} type="video/mp4" />
          <div className="absolute inset-0 bg-black" />
        </video>
      </div>

      {/* Error and Loading States */}
      {videoError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
          <p className="text-white text-center px-4">Unable to load video</p>
        </div>
      )}

      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 bg-black animate-pulse flex items-center justify-center z-20">
          <p className="text-white">Loading...</p>
        </div>
      )}

      {/* Dark Overlay - lighter on mobile, heavier on desktop */}
      <div className="absolute inset-0 bg-black bg-opacity-40 md:bg-opacity-50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center text-white animate-fade-in">
            {/* Main Headline */}
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold font-playfair tracking-tight drop-shadow-lg">
              <span className="text-gold">ByDezin</span>{' '}
              <span className="text-gold">Returns to</span>{' '}
              <span className="text-gold">NYFW</span>
            </h1>

            {/* Description */}
            <div className="max-w-[600px] mx-auto mb-8">
              <BodyM className="text-cream leading-relaxed opacity-95 text-base md:text-lg drop-shadow-md">
                An invite-only fashion showroom experience, back in the city where it started.
              </BodyM>
            </div>

            {/* Event Details */}
            <BodyM className="text-cream mb-10 text-base md:text-lg opacity-90 drop-shadow-md">
              {eventDetails}
            </BodyM>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 sm:gap-6">
              {/* Primary CTA Button */}
              <Button 
                variant="primary" 
                size="md"
                onClick={handleBrandApplicationClick}
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-moody-red text-bone hover:bg-opacity-90 border-moody-red rounded-lg shadow-lg min-h-[56px]"
              >
                {primaryCta}
              </Button>

              {/* Secondary CTA Button */}
              <Button 
                variant="secondary" 
                size="md"
                onClick={handleRSVPClick}
                className="w-full sm:w-auto px-8 py-4 text-lg font-medium bg-transparent text-cream border-2 border-cream hover:bg-cream hover:text-black transition-all duration-200 rounded-lg shadow-lg min-h-[56px]"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <BrandApplicationModal 
        isOpen={showBrandApplicationModal} 
        onClose={handleBrandApplicationClose} 
      />

      <RSVPModal 
        isOpen={showRSVPModal} 
        onClose={handleRSVPClose} 
      />
    </section>
  );
};
