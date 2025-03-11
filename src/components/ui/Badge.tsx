
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'glass';
}

const Badge: React.FC<BadgeProps> = ({ 
  className, 
  children,
  variant = 'default'
}) => {
  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === 'default' && "bg-primary/10 text-primary",
        variant === 'outline' && "border border-primary/30 text-primary",
        variant === 'glass' && "bg-white/20 backdrop-blur-sm border border-white/30 text-foreground",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
