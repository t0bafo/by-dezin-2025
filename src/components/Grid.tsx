
import React from 'react';
import { cn } from '@/lib/utils';

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: number;
}

interface ColProps {
  children: React.ReactNode;
  span?: number;
  mobileSpan?: number;
  tabletSpan?: number;
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn("grid-container", className)}>
      {children}
    </div>
  );
};

export const Grid: React.FC<GridProps> = ({ 
  children, 
  className,
  cols = 12 
}) => {
  return (
    <div className={cn(`grid grid-cols-${cols} gap-gutter`, className)}>
      {children}
    </div>
  );
};

export const Col: React.FC<ColProps> = ({ 
  children, 
  span = 12,
  mobileSpan,
  tabletSpan,
  className 
}) => {
  const spanClass = `col-span-${span}`;
  const mobileSpanClass = mobileSpan ? `mobile:col-span-${mobileSpan}` : '';
  const tabletSpanClass = tabletSpan ? `tablet:col-span-${tabletSpan}` : '';
  
  return (
    <div className={cn(
      spanClass,
      mobileSpanClass,
      tabletSpanClass,
      className
    )}>
      {children}
    </div>
  );
};

// Export as a compound component
export const GridSystem = {
  Container: GridContainer,
  Grid,
  Col,
};
