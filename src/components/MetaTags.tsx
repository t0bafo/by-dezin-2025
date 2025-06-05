
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

    // Open Graph tags
    updateMetaTag('og:title', 'ByDezin NYFW S/S 2026 - An Immersive Fashion Showroom Experience');
    updateMetaTag('og:description', 'September 13, 2025 · An invite-only showroom experience in New York. Step inside, connect with the next generation of fashion voices and be part of the moment.');
    updateMetaTag('og:image', '/lovable-uploads/f53eaf65-2ac6-46b7-8bd0-4eafaeb09712.png');
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:url', window.location.href);

    // Twitter tags
    updateMetaTagName('twitter:card', 'summary_large_image');
    updateMetaTagName('twitter:title', 'ByDezin NYFW S/S 2026 - An Immersive Fashion Showroom Experience');
    updateMetaTagName('twitter:description', 'September 13, 2025 · An invite-only showroom experience in New York. Step inside, connect with the next generation of fashion voices and be part of the moment.');
    updateMetaTagName('twitter:image', '/lovable-uploads/f53eaf65-2ac6-46b7-8bd0-4eafaeb09712.png');

    // Update page title
    document.title = 'ByDezin NYFW S/S 2026 - An Immersive Fashion Showroom Experience';
  }, []);

  return null;
};
