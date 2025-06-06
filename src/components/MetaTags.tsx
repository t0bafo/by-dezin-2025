import { useEffect } from 'react';

export const MetaTags = () => {
  useEffect(() => {
    // Update meta tags
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    const updateMetaTagName = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    // Social media optimized content
    const title = 'ByDezin NYFW 2025 - Apply to Showcase Your Brand';
    const description = 'Put your brand in the spotlight at an exclusive fashion showcase featuring emerging talent. Applications now open for September 13, 2025 in New York City.';
    const imageUrl = '/lovable-uploads/a65f5394-4b74-4e2e-9a74-e5d7c276a957.png';
    const siteUrl = window.location.href;

    // Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', imageUrl);
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('og:image:alt', 'ByDezin brand ambassadors at SoHo New York storefront - Apply to showcase your brand at NYFW S/S 2026');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', siteUrl);
    updateMetaTag('og:site_name', 'ByDezin');
    updateMetaTag('og:locale', 'en_US');

    // Twitter Card tags
    updateMetaTagName('twitter:card', 'summary_large_image');
    updateMetaTagName('twitter:title', title);
    updateMetaTagName('twitter:description', description);
    updateMetaTagName('twitter:image', imageUrl);
    updateMetaTagName('twitter:image:alt', 'ByDezin brand ambassadors at SoHo New York storefront - Apply to showcase your brand at NYFW S/S 2026');
    updateMetaTagName('twitter:site', '@ByDezin');
    updateMetaTagName('twitter:creator', '@ByDezin');

    // Standard meta tags
    updateMetaTagName('description', description);
    updateMetaTagName('keywords', 'ByDezin, NYFW, New York Fashion Week, emerging designers, fashion showcase, brand application, 2025, sustainable fashion, fashion talent');
    updateMetaTagName('author', 'ByDezin');
    updateMetaTagName('robots', 'index, follow');

    // Update page title
    document.title = title;

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', siteUrl);
  }, []);

  return null;
};
