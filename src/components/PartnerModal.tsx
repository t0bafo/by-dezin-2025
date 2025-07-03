
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { HeadingL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    website: '',
    partnershipIdea: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Close modal on ESC key (but not during submission)
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose, isSubmitting]);

  // Focus management
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const firstInput = document.querySelector('#partner-fullName') as HTMLInputElement;
        firstInput?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Transform form data to match API expectations
    const apiData = {
      full_name: formData.fullName,
      email: formData.email,
      organization: formData.organization,
      website: formData.website,
      partnership_idea: formData.partnershipIdea
    };

    try {
      const response = await fetch('https://v0-vercel-api-endpoint-taupe.vercel.app/api/partner-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      if (response.ok) {
        // Success
        toast({
          title: "Thank you for your interest ✨",
          description: "We're excited to explore this partnership. We'll be in touch soon.",
          duration: 8000,
        });
        
        // Reset form and close modal
        setFormData({
          fullName: '',
          email: '',
          organization: '',
          website: '',
          partnershipIdea: ''
        });
        onClose();
      } else if (response.status === 400) {
        // Validation error
        const errorData = await response.json().catch(() => ({}));
        toast({
          title: "Looks like we're missing some info",
          description: errorData.message || "Please check all required fields and try again.",
          variant: "destructive"
        });
      } else if (response.status >= 500) {
        // Server error
        toast({
          title: "Something went wrong on our end. Give it another shot!",
          description: "Our servers are having a moment. Please try again.",
          variant: "destructive"
        });
      } else {
        // Other errors
        toast({
          title: "Something went wrong on our end. Give it another shot!",
          description: "Please try submitting your partnership inquiry again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      // Network error
      toast({
        title: "Connection hiccup! Check your internet and try again.",
        description: "We couldn't reach our servers. Please check your connection.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-bone rounded-lg w-[90%] max-w-[500px] max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-cream">
          <div className="flex-1 pr-4">
            <HeadingL className="text-black mb-2 text-xl sm:text-2xl">Partner with ByDezin</HeadingL>
            <BodyM className="text-black opacity-70 text-sm">
              Collaborate with us to bring new energy to ByDezin NYFW 2025.
            </BodyM>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-cream rounded-lg transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="partner-fullName" className="text-black font-medium text-sm">
              Full Name *
            </Label>
            <Input
              id="partner-fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Jordan Smith"
              className="w-full h-10 px-3 py-2 rounded-md border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="partner-email" className="text-black font-medium text-sm">
              Email Address *
            </Label>
            <Input
              id="partner-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@brand.com"
              className="w-full h-10 px-3 py-2 rounded-md border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="partner-organization" className="text-black font-medium text-sm">
              Organization / Brand *
            </Label>
            <Input
              id="partner-organization"
              name="organization"
              type="text"
              required
              value={formData.organization}
              onChange={handleInputChange}
              placeholder="e.g. Aurora Drinks"
              className="w-full h-10 px-3 py-2 rounded-md border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="partner-website" className="text-black font-medium text-sm">
              Website (optional)
            </Label>
            <Input
              id="partner-website"
              name="website"
              type="text"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full h-10 px-3 py-2 rounded-md border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="partner-idea" className="text-black font-medium text-sm">
              How do you see us working together? *
            </Label>
            <Textarea
              id="partner-idea"
              name="partnershipIdea"
              required
              value={formData.partnershipIdea}
              onChange={handleInputChange}
              placeholder="We'd love to hear your partnership idea and any goals you may have"
              className="w-full min-h-[100px] px-3 py-2 rounded-md border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200 resize-none"
            />
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              className="w-full font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Connecting..." : "Let's Collaborate"}
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={onClose}
              className="w-full font-medium"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
