
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
      partnershipIdea: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="bg-bone rounded-lg w-full max-w-md mobile:w-4/5 tablet:w-2/5 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-cream">
          <div>
            <HeadingL className="text-black mb-2">Partner with ByDezin</HeadingL>
            <BodyM className="text-black opacity-70 text-sm">
              Join us in creating an unforgettable NYFW experience that amplifies emerging fashion voices.
            </BodyM>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-cream rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <Label htmlFor="partner-fullName" className="text-black mb-2 block">
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
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="partner-email" className="text-black mb-2 block">
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
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="partner-organization" className="text-black mb-2 block">
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
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="partner-idea" className="text-black mb-2 block">
              How would you like to partner? *
            </Label>
            <Textarea
              id="partner-idea"
              name="partnershipIdea"
              required
              value={formData.partnershipIdea}
              onChange={handleInputChange}
              placeholder="Briefly describe your idea or sponsorship goals"
              className="w-full min-h-[100px]"
            />
          </div>

          <div className="flex flex-col mobile:flex-row gap-3 pt-4">
            <Button type="submit" variant="primary" size="lg" className="flex-1">
              Let's Collaborate
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
