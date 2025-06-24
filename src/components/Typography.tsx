
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
      "font-playfair text-5xl mobile:text-6xl tablet:text-7xl desktop:text-8xl font-semibold leading-tight tracking-tight text-black",
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
      "font-playfair text-3xl mobile:text-4xl tablet:text-5xl font-semibold leading-tight tracking-tight text-black",
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
      "font-playfair text-xl mobile:text-2xl tablet:text-3xl font-medium leading-tight tracking-tight text-black",
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
