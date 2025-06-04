
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { HeadingL, BodyM } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    userType: 'Guest',
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
        const firstInput = document.querySelector('#rsvp-fullName') as HTMLInputElement;
        firstInput?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    console.log('Early access submitted:', formData);
    toast({
      title: "You're in!",
      description: "Thank you for your interest. We'll be in touch with exclusive details soon.",
    });
    onClose();
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      userType: 'Guest',
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
            <HeadingL className="text-black mb-2">Get Early Access</HeadingL>
            <BodyM className="text-black opacity-70 text-sm">
              Be among the first to experience ByDezin NYFW S/S 2026.
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
            <Label htmlFor="rsvp-fullName" className="text-black mb-2 block">
              Full Name *
            </Label>
            <Input
              id="rsvp-fullName"
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
            <Label htmlFor="rsvp-email" className="text-black mb-2 block">
              Email Address *
            </Label>
            <Input
              id="rsvp-email"
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
            <Label htmlFor="rsvp-userType" className="text-black mb-2 block">
              I am a... *
            </Label>
            <select
              id="rsvp-userType"
              name="userType"
              value={formData.userType}
              onChange={handleInputChange}
              className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            >
              <option value="Guest">Guest</option>
              <option value="Designer">Designer</option>
              <option value="Stylist">Stylist</option>
              <option value="Press">Press</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="rsvp-updates"
              checked={formData.signUpForUpdates}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="rsvp-updates" className="text-black text-sm">
              Sign me up for ByDezin updates and reminders
            </Label>
          </div>

          <div className="flex flex-col mobile:flex-row gap-3 pt-4">
            <Button type="submit" variant="primary" size="lg" className="flex-1">
              Count Me In
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
