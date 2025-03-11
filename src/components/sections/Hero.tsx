
import React, { useEffect, useRef } from 'react';
import { Badge } from '../ui/badge';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #f0f4f8, #f8fafc)',
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-indigo-100 rounded-full opacity-30 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-cyan-100 rounded-full opacity-30 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="space-y-6 animate-fade-in" style={{ '--delay': '0.2s' } as React.CSSProperties}>
          <div className="flex justify-center">
            <Badge className="mb-6">Software & Cybersecurity Engineer</Badge>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Mahmoud Mohamed
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Experienced Software Engineer & Cybersecurity Specialist with expertise in developing secure, scalable applications.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a 
              href="#about" 
              className="rounded-full px-8 py-3 bg-primary text-white font-medium shadow-sm transition-all hover:shadow-md hover:brightness-110"
            >
              Discover My Work
            </a>
            <a 
              href="#contact" 
              className="rounded-full px-8 py-3 bg-white text-gray-900 font-medium border border-gray-200 shadow-sm transition-all hover:shadow-md hover:bg-gray-50"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
