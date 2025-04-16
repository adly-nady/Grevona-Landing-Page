
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Planet3DProps {
  size?: number;
  color?: string;
  glowColor?: string;
  rotationSpeed?: number;
  className?: string;
  children?: React.ReactNode;
}

const Planet3D: React.FC<Planet3DProps> = ({
  size = 200,
  color = 'bg-space-purple',
  glowColor = 'glow-purple',
  rotationSpeed = 15,
  className,
  children
}) => {
  const planetRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const planet = planetRef.current;
    if (!planet) return;
    
    let rotationX = 0;
    let rotationY = 0;
    let rafId: number;
    
    const updateRotation = () => {
      if (!planet) return;
      planet.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
      rafId = requestAnimationFrame(updateRotation);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!planet) return;
      const rect = planet.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = (e.clientX - centerX) / (window.innerWidth / 2) * 15;
      const distanceY = (e.clientY - centerY) / (window.innerHeight / 2) * 15;
      
      rotationX = -distanceY;
      rotationY = distanceX;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(updateRotation);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);
  
  return (
    <div className="perspective relative">
      <div
        ref={planetRef}
        className={cn(
          "preserve-3d rounded-full relative animate-rotate-slow",
          color,
          glowColor,
          className
        )}
        style={{ 
          width: `${size}px`, 
          height: `${size}px`,
          animationDuration: `${rotationSpeed}s`
        }}
      >
        {children}
        
        {/* 3D effect highlights and shadows */}
        <div className="absolute inset-0 rounded-full bg-white opacity-20" 
             style={{ 
               transform: 'translateZ(2px)',
               width: '60%',
               height: '60%',
               top: '10%',
               left: '10%',
               borderRadius: '50%'
             }} 
        />
        <div className="absolute rounded-full bg-black opacity-20"
             style={{ 
               transform: 'translateZ(2px)',
               width: '70%',
               height: '70%',
               bottom: '0%',
               right: '0%',
               borderRadius: '50%'
             }}
        />
      </div>
    </div>
  );
};

export default Planet3D;
