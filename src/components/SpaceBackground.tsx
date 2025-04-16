
import React from 'react';
import StarField from './StarField';

const SpaceBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-space-gradient overflow-hidden">
      <StarField />
      
      {/* Nebula effects */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-space-purple opacity-10 blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-space-nebula-pink opacity-10 blur-3xl" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-space-light-purple opacity-5 blur-3xl" />
      
      {/* Shooting stars */}
      <div className="absolute top-20 left-1/4 w-1 h-1 bg-white rounded-full animate-shooting-star" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 right-1/3 w-1 h-1 bg-white rounded-full animate-shooting-star" 
           style={{ animationDelay: '5s' }} />
      <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-shooting-star" 
           style={{ animationDelay: '8s' }} />
    </div>
  );
};

export default SpaceBackground;
