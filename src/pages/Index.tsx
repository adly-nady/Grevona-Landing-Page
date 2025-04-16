
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import UIUXSection from '@/components/UIUXSection';
import TeamSection from '@/components/TeamSection';
import TechStack from '@/components/TechStack';
import SpaceBackground from '@/components/SpaceBackground';

const Index = () => {
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
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Space Background with animated stars */}
      <SpaceBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* Advantages Section */}
      <AdvantagesSection />
      
      {/* UI/UX Section */}
      <UIUXSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Technology Stack */}
      <TechStack />
      
      {/* Footer */}
      <footer className="py-10 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Grevona Cloud. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">A graduation project that redefines ERP for the milling industry.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
