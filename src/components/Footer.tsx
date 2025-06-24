
import React, { useState } from 'react';
import { HeadingM, BodyM, BodyS } from '@/components/Typography';
import { Instagram, Youtube, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/Button';
import { useToast } from '@/hooks/use-toast';

interface FooterProps {
  onBrandApplicationClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBrandApplicationClick }) => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email signup:', email);
    toast({
      title: "Subscribed!",
      description: "You'll receive updates and invites from ByDezin.",
    });
    setEmail('');
  };

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
    },
    {
      name: 'Email',
      url: 'mailto:bydezin@apollowrldx.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-black">
      <div className="py-20 mobile:py-24 tablet:py-28 desktop:py-32">
        <div className="max-w-7xl mx-auto px-6 mobile:px-8">
          <div className="text-center animate-fade-in">
            {/* Email Signup Section */}
            <div className="mb-16">
              {/* Main Headline */}
              <HeadingM className="text-white mb-4 font-semibold leading-tight tracking-[-0.02em] text-2xl mobile:text-3xl">
                Stay Up to Date
              </HeadingM>

              {/* Subtitle */}
              <BodyM className="text-cream opacity-90 tracking-[0.01em] mb-8">
                Updates, invites, and insider details, straight from ByDezin.
              </BodyM>

              {/* Email Signup Form */}
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex flex-col mobile:flex-row gap-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 h-12 px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="h-12 px-6 bg-gold text-black hover:bg-opacity-90 font-semibold rounded-lg"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Main Footer Content */}
            <div>
              {/* Logo */}
              <div className="mb-4">
                <img 
                  src="/lovable-uploads/f4048747-a829-4025-805c-7445cbcb2471.png" 
                  alt="ByDezin" 
                  className="h-16 mobile:h-20 tablet:h-24 w-auto mx-auto"
                />
              </div>

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
                  href="https://www.instagram.com/arnell___/" 
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

              {/* Copyright only */}
              <div className="text-xs text-cream">
                © 2025 ByDezin. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
