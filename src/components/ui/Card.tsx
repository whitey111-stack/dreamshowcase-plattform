
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  interactive?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  className, 
  children,
  interactive = false
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
        interactive && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
