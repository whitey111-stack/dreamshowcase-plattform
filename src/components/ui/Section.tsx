
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className, 
  children,
  fullWidth = false
}) => {
  return (
    <section id={id} className={cn("py-20 w-full", className)}>
      <div className={cn(
        !fullWidth && "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      )}>
        {children}
      </div>
    </section>
  );
};

export default Section;
