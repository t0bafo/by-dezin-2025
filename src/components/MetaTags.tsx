
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

    // Updated URLs and content
    const siteUrl = 'https://bydezin.apollowrldx.com/';
    const baseUrl = 'https://bydezin.apollowrldx.com';
    const imageUrl = `${baseUrl}/lovable-uploads/a65f5394-4b74-4e2e-9a74-e5d7c276a957.png`;

    // Updated social media optimized content
    const title = 'ByDezin Showroom NYFW S/S 2026 — Showcase Your Brand';
    const description = 'Apply now to showcase your SS\'26 collection at NYFW. Limited spots for emerging talent—Sept 13, 2025 in NYC.';

    // Open Graph tags (Facebook, LinkedIn, WhatsApp)
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', imageUrl);
    updateMetaTag('og:image:secure_url', imageUrl);
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('og:image:alt', 'ByDezin Showroom NYFW S/S 2026 - Apply to showcase your brand');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', siteUrl);
    updateMetaTag('og:site_name', 'ByDezin');
    updateMetaTag('og:locale', 'en_US');

    // Twitter Card tags (X/Twitter)
    updateMetaTagName('twitter:card', 'summary_large_image');
    updateMetaTagName('twitter:title', title);
    updateMetaTagName('twitter:description', description);
    updateMetaTagName('twitter:image', imageUrl);
    updateMetaTagName('twitter:image:alt', 'ByDezin Showroom NYFW S/S 2026 - Apply to showcase your brand');
    updateMetaTagName('twitter:site', '@ByDezin');
    updateMetaTagName('twitter:creator', '@ByDezin');

    // LinkedIn specific optimizations
    updateMetaTagName('linkedin:title', title);
    updateMetaTagName('linkedin:description', description);
    updateMetaTagName('linkedin:owner', 'ByDezin');

    // Pinterest specific tags
    updateMetaTagName('pinterest:title', title);
    updateMetaTagName('pinterest:description', description);
    updateMetaTagName('pinterest-rich-pin', 'true');

    // TikTok optimization
    updateMetaTagName('tiktok:site', '@ByDezinShowroom');

    // Additional social platforms
    updateMetaTagName('telegram:channel', '@ByDezin');

    // Standard meta tags
    updateMetaTagName('description', description);
    updateMetaTagName('keywords', 'ByDezin, NYFW, New York Fashion Week, emerging designers, fashion showcase, brand application, 2026, SS26, sustainable fashion, fashion talent, fashion events, designer showcase');
    updateMetaTagName('author', 'ByDezin');
    updateMetaTagName('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Enhanced SEO tags
    updateMetaTagName('theme-color', '#8B4513');
    updateMetaTagName('msapplication-TileColor', '#8B4513');
    updateMetaTagName('application-name', 'ByDezin Showroom NYFW S/S 2026');

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

    // Add JSON-LD structured data for better SEO and social sharing
    const addStructuredData = () => {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "ByDezin Showroom NYFW S/S 2026",
        "description": description,
        "startDate": "2025-09-13",
        "location": {
          "@type": "Place",
          "name": "New York City",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "addressCountry": "US"
          }
        },
        "organizer": {
          "@type": "Organization",
          "name": "ByDezin",
          "url": siteUrl,
          "logo": imageUrl
        },
        "image": [imageUrl],
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "0",
          "priceCurrency": "USD",
          "validFrom": new Date().toISOString(),
          "url": siteUrl
        },
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    };

    addStructuredData();

    // Preload critical image for faster social sharing
    const preloadImage = () => {
      const existingPreload = document.querySelector(`link[rel="preload"][href="${imageUrl}"]`);
      if (!existingPreload) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageUrl;
        document.head.appendChild(link);
      }
    };

    preloadImage();

  }, []);

  return null;
};
