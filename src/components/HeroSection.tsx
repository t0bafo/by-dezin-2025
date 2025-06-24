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
    <section className="relative min-h-screen mobile:min-h-[100dvh] w-full overflow-hidden">
      {/* Simplified Video Background */}
      <div className="absolute inset-0">
        {/* Mobile: Simple single video */}
        <div className="mobile:hidden absolute inset-0">
          {/* Desktop: Enhanced background with gradients */}
          <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
          
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

        {/* Main video - simplified mobile handling */}
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

      {/* Error and Loading States - Simplified */}
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

      {/* Enhanced Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 mobile:bg-opacity-60 z-10" />

      {/* Hero Content - Improved mobile spacing and hierarchy */}
      <div className="relative z-20 min-h-screen mobile:min-h-[100dvh] flex items-center justify-center px-4 py-20 mobile:py-24">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center text-white animate-fade-in">
            {/* Main Headline - Better mobile scaling */}
            <h1 className="mb-4 mobile:mb-6 tablet:mb-8 text-2xl mobile:text-4xl tablet:text-5xl desktop:text-6xl leading-tight font-bold font-playfair tracking-tight drop-shadow-lg">
              <span className="text-gold">ByDezin</span>{' '}
              <span className="text-gold">Returns to</span>{' '}
              <span className="text-gold">NYFW</span>
            </h1>

            {/* Description - Better mobile readability */}
            <div className="max-w-[600px] mx-auto mb-6 mobile:mb-8 tablet:mb-10">
              <BodyM className="text-cream leading-relaxed opacity-95 text-sm mobile:text-base tablet:text-lg drop-shadow-md">
                An invite-only fashion showroom experience, back in the city where it started.
              </BodyM>
            </div>

            {/* Event Details */}
            <BodyM className="text-cream mb-8 mobile:mb-10 tablet:mb-12 text-sm mobile:text-base tablet:text-lg opacity-90 drop-shadow-md">
              {eventDetails}
            </BodyM>

            {/* CTA Buttons - Improved mobile layout */}
            <div className="flex flex-col mobile:flex-row mobile:justify-center items-center gap-4 mobile:gap-6">
              {/* Primary CTA Button */}
              <Button 
                variant="primary" 
                size="md"
                onClick={handleBrandApplicationClick}
                className="w-full mobile:w-auto px-8 py-4 text-base mobile:text-lg font-semibold bg-moody-red text-bone hover:bg-opacity-90 border-moody-red rounded-lg shadow-lg min-h-[48px]"
              >
                {primaryCta}
              </Button>

              {/* Secondary CTA Button */}
              <Button 
                variant="secondary" 
                size="md"
                onClick={handleRSVPClick}
                className="w-full mobile:w-auto px-8 py-4 text-base mobile:text-lg font-medium bg-transparent text-cream border border-cream hover:bg-cream hover:text-black transition-all duration-200 rounded-lg shadow-lg min-h-[48px]"
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
