
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
  description = "An invite-only fashion showroom experience, back in the city where it started. Step inside, connect with the next generation of fashion voices and be part of the moment.",
  eventDetails = "September 13, 2025 · New York City",
  primaryCta = "Showcase Your Brand",
  onBrandApplicationClick
}) => {
  const [showBrandApplicationModal, setShowBrandApplicationModal] = useState(false);
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
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

  const handleVideoCanPlay = () => {
    console.log('Video can start playing');
    setVideoReady(true);
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video failed to load:', e);
    console.error('Video src:', videoSrc);
    setVideoError(true);
  };

  console.log('HeroSection rendering with videoSrc:', videoSrc);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Video Background */}
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
            preload="auto"
            poster="/lovable-uploads/a65f5394-4b74-4e2e-9a74-e5d7c276a957.png"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        {/* Main video - Clean on mobile, centered on desktop */}
        <video
          className={`absolute inset-0 w-full h-full object-cover md:object-contain transition-opacity duration-700 ease-out ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          loading="eager"
          poster="/lovable-uploads/a65f5394-4b74-4e2e-9a74-e5d7c276a957.png"
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoCanPlay}
          onError={handleVideoError}
          controls={false}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Poster Image Fallback - Shows immediately while video loads */}
        {!videoReady && !videoError && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center md:bg-contain md:bg-no-repeat animate-fade-in"
            style={{ 
              backgroundImage: 'url(/lovable-uploads/a65f5394-4b74-4e2e-9a74-e5d7c276a957.png)',
              backgroundPosition: 'center center'
            }}
          />
        )}
      </div>

      {/* Error State */}
      {videoError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
          <div className="text-center text-white px-4">
            <div 
              className="w-full h-64 bg-cover bg-center mb-4 rounded-lg opacity-50"
              style={{ backgroundImage: 'url(/lovable-uploads/a65f5394-4b74-4e2e-9a74-e5d7c276a957.png)' }}
            />
            <p className="text-cream text-sm opacity-75">Video temporarily unavailable</p>
          </div>
        </div>
      )}

      {/* Elegant Loading State - Only shows briefly during initial load */}
      {!videoReady && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center z-15">
          <div className="flex flex-col items-center space-y-4">
            {/* Subtle loading spinner with ByDezin aesthetic */}
            <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin"></div>
            <div className="text-cream text-sm opacity-60 font-light">Preparing experience...</div>
          </div>
        </div>
      )}

      {/* Dark Overlay - Mobile only, lighter overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 min-h-[100dvh] flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center text-white animate-fade-in">
            {/* Main Headline - Improved mobile sizing */}
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold font-playfair tracking-tight drop-shadow-2xl">
              <span className="text-gold">ByDezin</span>{' '}
              <span className="text-gold">Returns to</span>{' '}
              <span className="text-gold">NYFW</span>
            </h1>

            {/* Description - Better mobile readability */}
            <div className="max-w-[600px] mx-auto mb-8">
              <BodyM className="text-cream leading-relaxed opacity-95 text-lg md:text-xl drop-shadow-lg">
                An invite-only fashion showroom experience, back in the city where it started.
              </BodyM>
            </div>

            {/* Event Details */}
            <BodyM className="text-cream mb-12 text-lg md:text-xl opacity-90 drop-shadow-lg font-medium">
              {eventDetails}
            </BodyM>

            {/* Single CTA Button */}
            <div className="flex justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={handleBrandApplicationClick}
                className="px-10 py-4 text-lg font-semibold bg-moody-red text-bone hover:bg-opacity-90 border-moody-red rounded-lg shadow-xl min-h-[56px] min-w-[200px] transform hover:scale-105 transition-all duration-200"
              >
                {primaryCta}
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
