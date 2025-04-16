
import React from 'react';
import { cn } from '@/lib/utils';

interface OrbitingElementProps {
  size?: number;
  distance?: number;
  duration?: number;
  color?: string;
  startPosition?: number;
  reverse?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const OrbitingElement: React.FC<OrbitingElementProps> = ({
  size = 20,
  distance = 100,
  duration = 20,
  color = 'bg-space-light-purple',
  startPosition = 0,
  reverse = false,
  children,
  className
}) => {
  // Calculate starting position in degrees
  const startStyle = {
    transform: `rotate(${startPosition}deg) translateX(${distance}px) rotate(-${startPosition}deg)`,
    animation: `${reverse ? 'orbit-reverse' : 'orbit'} ${duration}s linear infinite`,
    animationDelay: `-${(startPosition / 360) * duration}s`,
    width: `${size}px`,
    height: `${size}px`
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="orbit-path absolute" style={{ width: `${distance * 2}px`, height: `${distance * 2}px` }} />
      <div 
        className={cn(
          "absolute rounded-full flex items-center justify-center", 
          color,
          className
        )} 
        style={startStyle}
      >
        {children}
      </div>
    </div>
  );
};

export default OrbitingElement;
