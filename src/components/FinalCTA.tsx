
import React, { useState } from 'react';
import { HeadingXL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email signup:', email);
    toast({
      title: "Thanks for subscribing!",
      description: "You'll be the first to know about ByDezin NYFW S/S 2026 updates.",
    });
    setEmail('');
  };

  return (
    <section id="newsletter" className="bg-black min-h-[50vh] flex items-center py-16 mobile:py-20 tablet:py-24 desktop:py-28">
      <div className="max-w-7xl mx-auto px-4 mobile:px-6 w-full">
        <div className="text-center animate-fade-in">
          {/* Main Headline */}
          <HeadingXL className="text-white mb-6 font-semibold leading-tight">
            Stay in the Loop
          </HeadingXL>

          {/* Event Details */}
          <BodyM className="text-cream mb-8 opacity-90">
            September 13, 2025
          </BodyM>

          {/* Body Copy */}
          <div className="max-w-[600px] mx-auto mb-12">
            <BodyM className="text-cream leading-relaxed opacity-90">
              Get updates about ByDezin NYFW S/S 2026 and be the first to know about upcoming showcases
            </BodyM>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col mobile:flex-row gap-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white text-black"
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="bg-gold text-black hover:bg-opacity-90 transition-all duration-300 border-gold"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
