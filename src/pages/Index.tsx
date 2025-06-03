import React from 'react';
import { HeadingXL, HeadingL, BodyM, BodyS } from '@/components/Typography';
import { Button } from '@/components/Button';
import { GridContainer, Grid, Col } from '@/components/Grid';
import { HeroSection } from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-bone">
      {/* Hero Section */}
      <HeroSection />

      {/* Typography Section */}
      <section className="py-16 bg-cream">
        <GridContainer>
          <Grid>
            <Col span={12} tabletSpan={8} className="tablet:col-start-3">
              <div className="text-center mb-12">
                <HeadingL className="mb-4">Typography System</HeadingL>
                <BodyM className="text-moody-red">
                  Playfair Display for headings, Montserrat for body text
                </BodyM>
              </div>
            </Col>
          </Grid>
          
          <Grid>
            <Col span={12} mobileSpan={6}>
              <div className="bg-bone p-8 rounded-lg">
                <HeadingXL className="mb-4 text-2xl mobile:text-4xl">
                  Heading XL
                </HeadingXL>
                <BodyS className="text-moody-red">
                  Playfair Display • 60-80px • Bold
                </BodyS>
              </div>
            </Col>
            
            <Col span={12} mobileSpan={6}>
              <div className="bg-bone p-8 rounded-lg">
                <HeadingL className="mb-4 text-xl mobile:text-3xl">
                  Heading L
                </HeadingL>
                <BodyS className="text-moody-red">
                  Playfair Display • 48-60px • Semibold
                </BodyS>
              </div>
            </Col>
            
            <Col span={12} mobileSpan={6}>
              <div className="bg-bone p-8 rounded-lg">
                <BodyM className="mb-4">
                  Body Medium Text
                </BodyM>
                <BodyS className="text-moody-red">
                  Montserrat • 16-18px • Regular
                </BodyS>
              </div>
            </Col>
            
            <Col span={12} mobileSpan={6}>
              <div className="bg-bone p-8 rounded-lg">
                <BodyS className="mb-4">
                  Body Small Text
                </BodyS>
                <BodyS className="text-moody-red">
                  Montserrat • 14-16px • Regular
                </BodyS>
              </div>
            </Col>
          </Grid>
        </GridContainer>
      </section>

      {/* Color Palette Section */}
      <section className="py-16">
        <GridContainer>
          <Grid>
            <Col span={12}>
              <div className="text-center mb-12">
                <HeadingL className="mb-4">Color Palette</HeadingL>
                <BodyM className="text-moody-red">
                  Sophisticated colors for premium brand experiences
                </BodyM>
              </div>
            </Col>
          </Grid>
          
          <Grid>
            <Col span={12} mobileSpan={6} tabletSpan={2} className="tablet:col-start-2">
              <div className="text-center">
                <div className="w-full h-24 bg-bone rounded-lg mb-4 border-2 border-cream"></div>
                <BodyS className="font-medium">Bone</BodyS>
                <BodyS className="text-moody-red">#F5F1EA</BodyS>
              </div>
            </Col>
            
            <Col span={12} mobileSpan={6} tabletSpan={2}>
              <div className="text-center">
                <div className="w-full h-24 bg-cream rounded-lg mb-4"></div>
                <BodyS className="font-medium">Cream</BodyS>
                <BodyS className="text-moody-red">#EAE3DA</BodyS>
              </div>
            </Col>
            
            <Col span={12} mobileSpan={6} tabletSpan={2}>
              <div className="text-center">
                <div className="w-full h-24 bg-black rounded-lg mb-4"></div>
                <BodyS className="font-medium">Black</BodyS>
                <BodyS className="text-moody-red">#000000</BodyS>
              </div>
            </Col>
            
            <Col span={12} mobileSpan={6} tabletSpan={2}>
              <div className="text-center">
                <div className="w-full h-24 bg-gold rounded-lg mb-4"></div>
                <BodyS className="font-medium">Gold</BodyS>
                <BodyS className="text-moody-red">#C5A880</BodyS>
              </div>
            </Col>
            
            <Col span={12} mobileSpan={6} tabletSpan={2}>
              <div className="text-center">
                <div className="w-full h-24 bg-moody-red rounded-lg mb-4"></div>
                <BodyS className="font-medium">Moody Red</BodyS>
                <BodyS className="text-moody-red">#7B2C2C</BodyS>
              </div>
            </Col>
          </Grid>
        </GridContainer>
      </section>

      {/* Button Components Section */}
      <section className="py-16 bg-cream">
        <GridContainer>
          <Grid>
            <Col span={12} tabletSpan={8} className="tablet:col-start-3">
              <div className="text-center mb-12">
                <HeadingL className="mb-4">Button Components</HeadingL>
                <BodyM className="text-moody-red">
                  Primary and secondary button styles with multiple sizes
                </BodyM>
              </div>
              
              <div className="space-y-8">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="primary" size="sm">Small Primary</Button>
                  <Button variant="primary" size="md">Medium Primary</Button>
                  <Button variant="primary" size="lg">Large Primary</Button>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="secondary" size="sm">Small Link</Button>
                  <Button variant="secondary" size="md">Medium Link</Button>
                  <Button variant="secondary" size="lg">Large Link</Button>
                </div>
              </div>
            </Col>
          </Grid>
        </GridContainer>
      </section>

      {/* Grid System Demo */}
      <section className="py-16">
        <GridContainer>
          <Grid>
            <Col span={12}>
              <div className="text-center mb-12">
                <HeadingL className="mb-4">Grid System</HeadingL>
                <BodyM className="text-moody-red">
                  12-column responsive grid with 24px gutters
                </BodyM>
              </div>
            </Col>
          </Grid>
          
          <Grid>
            {Array.from({ length: 12 }, (_, i) => (
              <Col key={i} span={1}>
                <div className="bg-gold h-12 rounded flex items-center justify-center">
                  <BodyS className="font-medium">{i + 1}</BodyS>
                </div>
              </Col>
            ))}
          </Grid>
          
          <div className="mt-8">
            <Grid>
              <Col span={6}>
                <div className="bg-cream p-6 rounded-lg">
                  <BodyM className="font-medium">6 Columns</BodyM>
                </div>
              </Col>
              <Col span={6}>
                <div className="bg-cream p-6 rounded-lg">
                  <BodyM className="font-medium">6 Columns</BodyM>
                </div>
              </Col>
            </Grid>
          </div>
          
          <div className="mt-4">
            <Grid>
              <Col span={4}>
                <div className="bg-cream p-6 rounded-lg">
                  <BodyM className="font-medium">4 Columns</BodyM>
                </div>
              </Col>
              <Col span={4}>
                <div className="bg-cream p-6 rounded-lg">
                  <BodyM className="font-medium">4 Columns</BodyM>
                </div>
              </Col>
              <Col span={4}>
                <div className="bg-cream p-6 rounded-lg">
                  <BodyM className="font-medium">4 Columns</BodyM>
                </div>
              </Col>
            </Grid>
          </div>
        </GridContainer>
      </section>
    </div>
  );
};

export default Index;
