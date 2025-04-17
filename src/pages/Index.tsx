import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import UIUXSection from '@/components/UIUXSection';
import TeamSection from '@/components/TeamSection';
import TechStack from '@/components/TechStack';
import SpaceBackground from '@/components/SpaceBackground';
import APIDocumentationSection from '@/components/APIDocumentationSection';

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState('main');

  useEffect(() => {
    const throttle = (func: Function, limit: number) => {
      let inThrottle: boolean;
      return function (...args: any[]) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

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

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    handleScroll(); // Trigger on load

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SpaceBackground />
      <Navbar setActiveSection={setActiveSection} />
      {activeSection === 'main' ? (
        <>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <AdvantagesSection />
          <UIUXSection />
          <TeamSection />
          <TechStack />
        </>
      ) : (
        <APIDocumentationSection />
      )}
      <footer className="py-10 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Grevona Cloud. All rights reserved, Created By
            <span className="text-space-light-purple"> Eng/</span>
            <span className="text-space-nebula-pink">Adly </span> Nady Adly
          </p>
          <p className="text-gray-500 text-sm mt-2">
            A graduation project that redefines ERP for the milling industry.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;