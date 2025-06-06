
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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center p-3 mobile:p-4">
      <div className="bg-bone rounded-xl w-full max-w-lg mobile:w-[95%] mobile:max-w-[95%] tablet:w-2/5 tablet:max-w-lg max-h-[95vh] mobile:max-h-[90vh] overflow-y-auto shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        {/* Header */}
        <div className="flex justify-between items-start p-4 mobile:p-6 tablet:p-8 border-b border-cream">
          <div className="flex-1 pr-3 mobile:pr-4">
            <HeadingL className="text-black mb-2 mobile:mb-3 tracking-[-0.01em] text-xl mobile:text-2xl">Be seen at ByDezin</HeadingL>
            <BodyM className="text-black opacity-70 text-xs mobile:text-sm leading-relaxed tracking-[0.005em]">
              Put your brand in the spotlight and join the story unfolding at ByDezin NYFW 2025.
            </BodyM>
          </div>
          <button
            onClick={onClose}
            className="p-1 mobile:p-2 hover:bg-cream rounded-lg transition-colors duration-200 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 mobile:w-5 mobile:h-5 text-black" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 mobile:p-6 tablet:p-8 space-y-4 mobile:space-y-6 tablet:space-y-8">
          <div className="space-y-2 mobile:space-y-3">
            <Label htmlFor="brand-fullName" className="text-black font-medium tracking-[0.005em] text-sm mobile:text-base">
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
              className="w-full h-10 mobile:h-12 px-3 mobile:px-4 py-2 mobile:py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200 text-sm mobile:text-base"
            />
          </div>

          <div className="space-y-2 mobile:space-y-3">
            <Label htmlFor="brand-email" className="text-black font-medium tracking-[0.005em] text-sm mobile:text-base">
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
              className="w-full h-10 mobile:h-12 px-3 mobile:px-4 py-2 mobile:py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200 text-sm mobile:text-base"
            />
          </div>

          <div className="space-y-2 mobile:space-y-3">
            <Label htmlFor="brand-brandName" className="text-black font-medium tracking-[0.005em] text-sm mobile:text-base">
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
              className="w-full h-10 mobile:h-12 px-3 mobile:px-4 py-2 mobile:py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200 text-sm mobile:text-base"
            />
          </div>

          <div className="space-y-2 mobile:space-y-3">
            <Label htmlFor="brand-website" className="text-black font-medium tracking-[0.005em] text-sm mobile:text-base">
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
              className="w-full h-10 mobile:h-12 px-3 mobile:px-4 py-2 mobile:py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200 text-sm mobile:text-base"
            />
          </div>

          <div className="space-y-2 mobile:space-y-3">
            <Label htmlFor="brand-snapshot" className="text-black font-medium tracking-[0.005em] text-sm mobile:text-base">
              Give us a snapshot of your 2025 collection and what you'd showcase at ByDezin. Five sentences is perfect. *
            </Label>
            <Textarea
              id="brand-snapshot"
              name="collectionSnapshot"
              required
              value={formData.collectionSnapshot}
              onChange={handleInputChange}
              className="w-full min-h-[100px] mobile:min-h-[120px] px-3 mobile:px-4 py-2 mobile:py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-20 transition-all duration-200 resize-none text-sm mobile:text-base"
            />
          </div>

          <div className="flex items-start space-x-2 mobile:space-x-3 pt-2">
            <Checkbox
              id="brand-updates"
              checked={formData.signUpForUpdates}
              onCheckedChange={handleCheckboxChange}
              className="mt-1"
            />
            <Label htmlFor="brand-updates" className="text-black text-xs mobile:text-sm leading-relaxed tracking-[0.005em]">
              Keep me in the loop with ByDezin updates and reminders
            </Label>
          </div>

          <div className="flex flex-col gap-3 mobile:gap-4 pt-4 mobile:pt-6">
            <Button type="submit" variant="primary" size="lg" className="w-full font-semibold text-sm mobile:text-base py-3 mobile:py-4">
              Send
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={onClose}
              className="w-full font-medium text-sm mobile:text-base py-3 mobile:py-4"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
