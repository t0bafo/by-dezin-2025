
import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const HeadingXL: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h1' 
}) => {
  return (
    <Component className={cn(
      "font-playfair text-6xl mobile:text-7xl tablet:text-8xl font-bold leading-tight tracking-tight text-black",
      className
    )}>
      {children}
    </Component>
  );
};

export const HeadingL: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h2' 
}) => {
  return (
    <Component className={cn(
      "font-playfair text-4xl mobile:text-5xl tablet:text-6xl font-semibold leading-tight tracking-tight text-black",
      className
    )}>
      {children}
    </Component>
  );
};

export const HeadingM: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'h3' 
}) => {
  return (
    <Component className={cn(
      "font-playfair text-2xl mobile:text-3xl tablet:text-4xl font-medium leading-tight tracking-tight text-black",
      className
    )}>
      {children}
    </Component>
  );
};

export const BodyM: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'p' 
}) => {
  return (
    <Component className={cn(
      "font-montserrat text-base mobile:text-lg leading-relaxed text-black",
      className
    )}>
      {children}
    </Component>
  );
};

export const BodyS: React.FC<TypographyProps> = ({ 
  children, 
  className, 
  as: Component = 'p' 
}) => {
  return (
    <Component className={cn(
      "font-montserrat text-sm mobile:text-base leading-relaxed text-black",
      className
    )}>
      {children}
    </Component>
  );
};

// Export all components as named exports for convenience
export const Typography = {
  HeadingXL,
  HeadingL,
  HeadingM,
  BodyM,
  BodyS,
};
