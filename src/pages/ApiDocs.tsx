import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import APIDocumentationSection from '@/components/APIDocumentationSection'; 
import SpaceBackground from '@/components/SpaceBackground';

const Index: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.appear');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navbar />
      <APIDocumentationSection /> 
      
      <footer className="py-10 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Grevona Cloud. All rights reserved, Created By 
            <span className="text-space-light-purple"> Eng/</span>
            <span className="text-space-nebula-pink">Adly </span> Nady Adly
          </p>
          <p className="text-gray-500 text-sm mt-2">A graduation project that redefines ERP for the milling industry.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;