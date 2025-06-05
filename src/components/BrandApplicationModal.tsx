
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { HeadingL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface BrandApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandApplicationModal: React.FC<BrandApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    brandName: '',
    website: '',
    collectionSnapshot: '',
    signUpForUpdates: false
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
        const firstInput = document.querySelector('#brand-fullName') as HTMLInputElement;
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

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      signUpForUpdates: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Brand application submitted:', formData);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. Our team will review your application and be in touch soon.",
    });
    onClose();
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      brandName: '',
      website: '',
      collectionSnapshot: '',
      signUpForUpdates: false
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="bg-bone rounded-lg w-full max-w-md mobile:w-4/5 tablet:w-2/5 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-cream">
          <div>
            <HeadingL className="text-black mb-2">Be seen at ByDezin</HeadingL>
            <BodyM className="text-black opacity-70 text-sm">
              Put your brand in the spotlight and join the story unfolding at ByDezin NYFW S/S 2026.
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
            <Label htmlFor="brand-fullName" className="text-black mb-2 block">
              Full Name *
            </Label>
            <Input
              id="brand-fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="e.g. Alexis Johnson"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="brand-email" className="text-black mb-2 block">
              Email Address *
            </Label>
            <Input
              id="brand-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="brand-brandName" className="text-black mb-2 block">
              Brand Name *
            </Label>
            <Input
              id="brand-brandName"
              name="brandName"
              type="text"
              required
              value={formData.brandName}
              onChange={handleInputChange}
              placeholder="e.g. Aurora Collective"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="brand-website" className="text-black mb-2 block">
              Website / Instagram *
            </Label>
            <Input
              id="brand-website"
              name="website"
              type="text"
              required
              value={formData.website}
              onChange={handleInputChange}
              placeholder="e.g. www.auroracollective.com"
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="brand-snapshot" className="text-black mb-2 block">
              Give us a snapshot of your S/S 2026 collection and what you'd showcase at ByDezin. Five sentences is perfect. *
            </Label>
            <Textarea
              id="brand-snapshot"
              name="collectionSnapshot"
              required
              value={formData.collectionSnapshot}
              onChange={handleInputChange}
              className="w-full min-h-[120px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="brand-updates"
              checked={formData.signUpForUpdates}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="brand-updates" className="text-black text-sm">
              Keep me in the loop with ByDezin updates and reminders
            </Label>
          </div>

          <div className="flex flex-col mobile:flex-row gap-3 pt-4">
            <Button type="submit" variant="primary" size="lg" className="flex-1">
              Send
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
