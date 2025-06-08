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
  videoSrc = "/hero-video.mp4",
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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
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
        poster="/hero-poster.jpg"
      >
        <source src={videoSrc} type="video/mp4" />
        <div className="absolute inset-0 bg-black" />
      </video>

      {/* Show error message if video fails to load */}
      {videoError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <p className="text-white text-center px-4">
            Video failed to load: {videoSrc}
            <br />
            <small>Check browser console for details</small>
          </p>
        </div>
      )}

      {/* Loading state while video loads */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 bg-black animate-pulse flex items-center justify-center">
          <p className="text-white">Loading video...</p>
        </div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Hero Content - Fixed centering for desktop */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 pt-8 pb-32 mobile:pt-16 mobile:pb-20 tablet:pt-12 tablet:pb-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="text-center text-white animate-fade-in">
                {/* Main Headline with colored text */}
                <h1 className="mb-6 mobile:mb-8 tablet:mb-8 desktop:mb-10 text-3xl mobile:text-5xl tablet:text-6xl desktop:text-7xl leading-tight font-bold font-eb-garamond tracking-tight">
                  <span className="text-gold">ByDezin</span>{' '}
                  <span className="text-gold">Returns to</span>{' '}
                  <span className="text-gold">NYFW</span>
                </h1>

                {/* Description */}
                <div className="max-w-[640px] mx-auto mb-8 mobile:mb-10 tablet:mb-12 desktop:mb-14">
                  <BodyM className="text-cream leading-relaxed opacity-90 text-base mobile:text-lg tablet:text-xl">
                    {description}
                  </BodyM>
                </div>

                {/* Event Details */}
                <BodyM className="text-cream mb-8 mobile:mb-10 tablet:mb-12 desktop:mb-16 text-base mobile:text-lg tablet:text-xl opacity-80">
                  {eventDetails}
                </BodyM>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col items-center gap-4">
                  {/* Primary CTA Button - Smaller size */}
                  <Button 
                    variant="primary" 
                    size="md"
                    onClick={handleBrandApplicationClick}
                    className="w-full mobile:w-auto px-6 mobile:px-8 py-3 mobile:py-4 text-base mobile:text-lg font-semibold bg-moody-red text-bone hover:bg-opacity-90 border-moody-red rounded-lg"
                  >
                    {primaryCta}
                  </Button>

                  {/* Secondary CTA Button */}
                  <Button 
                    variant="secondary" 
                    size="md"
                    onClick={handleRSVPClick}
                    className="w-full mobile:w-auto px-6 mobile:px-8 py-3 mobile:py-4 text-base mobile:text-lg font-medium bg-transparent text-cream border border-cream hover:bg-cream hover:text-black transition-all duration-200 rounded-lg no-underline"
                  >
                    Get Early Access
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Application Modal */}
      <BrandApplicationModal 
        isOpen={showBrandApplicationModal} 
        onClose={handleBrandApplicationClose} 
      />

      {/* RSVP Modal */}
      <RSVPModal 
        isOpen={showRSVPModal} 
        onClose={handleRSVPClose} 
      />
    </section>
  );
};
