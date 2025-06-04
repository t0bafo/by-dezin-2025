
import React from 'react';
import { HeadingM, BodyS } from '@/components/Typography';
import { Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Apollo Wrldx Instagram',
      url: 'https://www.instagram.com/apollowrldx/',
      icon: Instagram
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@apollowrldx',
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@ApolloWrldx',
      icon: Youtube
    },
    {
      name: 'Website',
      url: 'https://apollowrldx.com',
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <HeadingM className="font-eb-garamond text-white mb-4 text-2xl mobile:text-3xl font-semibold">
            ByDezin Showroom
          </HeadingM>

          {/* Tagline with hyperlinks */}
          <BodyS className="text-cream mb-8 opacity-80 font-inter">
            Powered by{' '}
            <a 
              href="https://apollowrldx.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 underline"
            >
              Apollo Wrldx
            </a>
            {' & '}
            <a 
              href="https://www.instagram.com/arnell___?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300 underline"
            >
              Arnell Stewart
            </a>
          </BodyS>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-moody-red hover:text-cream transition-colors duration-300"
                  aria-label={social.name}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>

          {/* Contact */}
          <div className="text-xs mobile:text-sm">
            <a 
              href="mailto:bydezin@apollowrldx.com"
              className="text-cream hover:text-white transition-colors duration-300 font-inter"
            >
              bydezin@apollowrldx.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
