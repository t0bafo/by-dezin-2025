
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
  const baseStyles = "font-montserrat font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-gold text-black hover:bg-opacity-90 active:bg-opacity-80 border border-gold",
    secondary: "text-gold hover:text-moody-red underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-200"
  };
  
  const sizeStyles = {
    sm: variant === 'primary' ? "px-4 py-2 text-sm rounded-md" : "text-sm",
    md: variant === 'primary' ? "px-6 py-3 text-base rounded-lg" : "text-base",
    lg: variant === 'primary' ? "px-8 py-4 text-lg rounded-xl" : "text-lg"
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
