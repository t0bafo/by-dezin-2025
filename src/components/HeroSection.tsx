
import React, { useState } from 'react';
import { HeadingXL, HeadingL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';
import { GridContainer, Grid, Col } from '@/components/Grid';
import { PartnerModal } from '@/components/PartnerModal';

interface HeroSectionProps {
  videoSrc?: string;
  subtitle?: string;
  headline?: string;
  subHeadline?: string;
  eventDetails?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  videoSrc = "/placeholder-video.mp4",
  subtitle = "APOLLO WRLDX × ARNELL STEWART PRESENT",
  headline = "An Immersive Fashion Showroom Experience",
  subHeadline = "ByDezin NYFW S/S 2026", 
  eventDetails = "September 13, 2025 · New York City",
  primaryCta = "Get Early Access",
  secondaryCta = "Partner with Us"
}) => {
  const [showPartnerModal, setShowPartnerModal] = useState(false);

  const handleRSVPClick = () => {
    // Scroll to top to trigger header RSVP
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Small delay then trigger header RSVP
    setTimeout(() => {
      const headerRSVPButton = document.querySelector('header button');
      if (headerRSVPButton) {
        (headerRSVPButton as HTMLButtonElement).click();
      }
    }, 500);
  };

  const handlePartnerClick = () => {
    console.log('Partner modal triggered');
    setShowPartnerModal(true);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-black" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <GridContainer className="w-full">
          <Grid>
            <Col span={12} tabletSpan={10} className="tablet:col-start-2">
              <div className="text-center text-white animate-fade-in">
                {/* Subtitle */}
                <BodyM className="text-gold mb-4 mobile:mb-6 uppercase tracking-widest font-medium">
                  {subtitle}
                </BodyM>

                {/* Main Headline */}
                <HeadingXL className="text-white mb-4 mobile:mb-6 text-4xl mobile:text-6xl tablet:text-7xl leading-tight">
                  {headline}
                </HeadingXL>

                {/* Sub-headline */}
                <HeadingL className="text-bone mb-6 mobile:mb-8 tablet:mb-12 text-xl mobile:text-2xl tablet:text-3xl font-normal opacity-90">
                  {subHeadline}
                </HeadingL>

                {/* Event Details */}
                <BodyM className="text-cream mb-8 mobile:mb-12 tablet:mb-16 text-base mobile:text-lg opacity-80">
                  {eventDetails}
                </BodyM>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col mobile:flex-row gap-4 mobile:gap-6 justify-center items-center">
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={handleRSVPClick}
                    className="w-full mobile:w-auto px-8 py-4 text-lg font-semibold bg-gold text-black hover:bg-opacity-90"
                  >
                    {primaryCta}
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={handlePartnerClick}
                    className="text-moody-red hover:text-moody-red text-lg underline underline-offset-4 decoration-1 hover:decoration-2"
                  >
                    {secondaryCta}
                  </Button>
                </div>
              </div>
            </Col>
          </Grid>
        </GridContainer>
      </div>

      {/* Partner Modal */}
      <PartnerModal 
        isOpen={showPartnerModal} 
        onClose={() => setShowPartnerModal(false)} 
      />
    </section>
  );
};
