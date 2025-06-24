
import React from 'react';
import { cn } from '@/lib/utils';

interface ScriptDividerProps {
  text?: string;
  className?: string;
}

export const ScriptDivider: React.FC<ScriptDividerProps> = ({ 
  text = "•", 
  className 
}) => {
  return (
    <div className={cn("script-divider", className)}>
      <div className="text-3xl mobile:text-4xl opacity-60">
        {text}
      </div>
    </div>
  );
};
