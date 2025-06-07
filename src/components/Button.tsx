
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = "font-inter font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] letter-spacing-wide";
  
  const variantStyles = {
    primary: "bg-gold text-black hover:bg-opacity-90 active:bg-opacity-80 border border-gold shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)]",
    secondary: "text-gold hover:text-moody-red underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-200"
  };
  
  const sizeStyles = {
    sm: variant === 'primary' ? "px-4 py-2 text-sm rounded-md letter-spacing-[0.02em]" : "text-sm",
    md: variant === 'primary' ? "px-6 py-3 text-base rounded-lg letter-spacing-[0.01em]" : "text-base",
    lg: variant === 'primary' ? "px-8 py-4 text-lg rounded-lg letter-spacing-[0.01em]" : "text-lg"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
