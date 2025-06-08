import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onBrandApplicationClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBrandApplicationClick }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Alumni', href: '#alumni' },
    { label: 'Vision', href: '#vision' },
    { label: 'Collaborate', href: '#collaborate' },
    { label: 'FAQ', href: '#faq' },
  ];

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'alumni', 'vision', 'collaborate', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll to sections
  const handleMenuClick = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setIsMenuOpen(false);
  };

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-bone shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('#hero');
            }}
            className="font-eb-garamond text-2xl font-semibold text-black hover:text-moody-red transition-colors duration-200"
          >
            ByDezin
          </a>
        </div>

        {/* Desktop Navigation and CTA - Right Side */}
        <div className="hidden mobile:flex items-center space-x-8">
          {/* Navigation Menu */}
          <div className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className={cn(
                  "font-inter font-medium transition-all duration-200 relative",
                  "hover:text-moody-red",
                  "after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0",
                  "after:bg-moody-red after:transform after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
                  "hover:after:scale-x-100 hover:after:origin-left",
                  activeSection === item.href.replace('#', '') 
                    ? "text-moody-red after:scale-x-100" 
                    : "text-black"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* CTA Button with proper spacing */}
          <div className="ml-6">
            <Button 
              variant="primary" 
              size="sm"
              onClick={onBrandApplicationClick}
              className="bg-moody-red text-bone hover:bg-opacity-90 border-moody-red"
            >
              Showcase Your Brand
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile:hidden p-2 text-black hover:text-moody-red transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile:hidden bg-bone border-t border-cream">
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className={cn(
                  "block font-inter font-medium py-2 transition-colors duration-200",
                  activeSection === item.href.replace('#', '') 
                    ? "text-moody-red" 
                    : "text-black hover:text-moody-red"
                )}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => {
                  onBrandApplicationClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-moody-red text-bone hover:bg-opacity-90 border-moody-red"
              >
                Showcase Your Brand
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
