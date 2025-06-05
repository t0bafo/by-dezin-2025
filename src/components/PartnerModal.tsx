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
  const { toast } = useToast();

  // Close modal on ESC key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus management
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first input when modal opens
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership inquiry submitted:', formData);
    toast({
      title: "Partnership Inquiry Sent",
      description: "Thank you for your interest! Our partnership team will contact you within 24 hours.",
    });
    onClose();
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      website: '',
      partnershipIdea: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-6">
      <div className="bg-bone rounded-xl w-full max-w-lg mobile:w-4/5 tablet:w-2/5 max-h-[90vh] overflow-y-auto shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        {/* Header */}
        <div className="flex justify-between items-start p-8 border-b border-cream">
          <div className="flex-1 pr-4">
            <HeadingL className="text-black mb-3 tracking-[-0.01em]">Partner with ByDezin</HeadingL>
            <BodyM className="text-black opacity-70 text-sm leading-relaxed tracking-[0.005em]">
              Collaborate with us to bring new energy to ByDezin NYFW S/S 2026.
            </BodyM>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-cream rounded-lg transition-colors duration-200 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="space-y-3">
            <Label htmlFor="partner-fullName" className="text-black font-medium tracking-[0.005em]">
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
              className="w-full h-12 px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="partner-email" className="text-black font-medium tracking-[0.005em]">
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
              className="w-full h-12 px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="partner-organization" className="text-black font-medium tracking-[0.005em]">
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
              className="w-full h-12 px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="partner-website" className="text-black font-medium tracking-[0.005em]">
              Website (optional)
            </Label>
            <Input
              id="partner-website"
              name="website"
              type="text"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full h-12 px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="partner-idea" className="text-black font-medium tracking-[0.005em]">
              How do you see us working together? *
            </Label>
            <Textarea
              id="partner-idea"
              name="partnershipIdea"
              required
              value={formData.partnershipIdea}
              onChange={handleInputChange}
              placeholder="We'd love to hear your partnership idea and any goals you may have"
              className="w-full min-h-[120px] px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200 resize-none"
            />
          </div>

          <div className="flex flex-col mobile:flex-row gap-4 pt-6">
            <Button type="submit" variant="primary" size="lg" className="flex-1 font-semibold">
              Let's Collaborate
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={onClose}
              className="flex-1 font-medium"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
