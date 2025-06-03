
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
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: 'sponsorship',
    message: ''
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
        const firstInput = document.querySelector('#partner-companyName') as HTMLInputElement;
        firstInput?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      partnershipType: 'sponsorship',
      message: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-bone rounded-lg w-full max-w-md mobile:w-4/5 tablet:w-2/5 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-cream">
          <HeadingL className="text-black">Partnership Inquiry</HeadingL>
          <button
            onClick={onClose}
            className="p-1 hover:bg-cream rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Label htmlFor="partner-companyName" className="text-black mb-2 block">
              Company Name *
            </Label>
            <Input
              id="partner-companyName"
              name="companyName"
              type="text"
              required
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="partner-contactName" className="text-black mb-2 block">
              Contact Name *
            </Label>
            <Input
              id="partner-contactName"
              name="contactName"
              type="text"
              required
              value={formData.contactName}
              onChange={handleInputChange}
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
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="partner-phone" className="text-black mb-2 block">
              Phone Number
            </Label>
            <Input
              id="partner-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="partner-type" className="text-black mb-2 block">
              Partnership Type *
            </Label>
            <select
              id="partner-type"
              name="partnershipType"
              value={formData.partnershipType}
              onChange={handleInputChange}
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            >
              <option value="sponsorship">Event Sponsorship</option>
              <option value="vendor">Vendor Partnership</option>
              <option value="media">Media Partnership</option>
              <option value="strategic">Strategic Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <Label htmlFor="partner-message" className="text-black mb-2 block">
              Message
            </Label>
            <Textarea
              id="partner-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your partnership interests and goals..."
              className="w-full min-h-[100px]"
            />
          </div>

          <div className="flex flex-col mobile:flex-row gap-3 pt-4">
            <Button type="submit" variant="primary" size="lg" className="flex-1">
              Send Inquiry
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
