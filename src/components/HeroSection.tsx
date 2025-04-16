
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Planet3D from './Planet3D';
import OrbitingElement from './OrbitingElement';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.appear');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-10 px-4 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white appear">
            <span className="text-space-light-purple">Cloud </span>Grevona
            {/* <span className="text-space-nebula-pink"> ERP</span> */}
          </h1>
          <p className="text-xl text-gray-300 appear" style={{ transitionDelay: '0.1s' }}>
            The first specialized cloud ERP system for mills that outperforms industry giants
          </p>
          <p className="text-gray-400 appear" style={{ transitionDelay: '0.2s' }}>
            An innovative solution designed specifically for the milling industry, offering specialized features that generic ERPs like Odoo and SAP can't match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start appear" style={{ transitionDelay: '0.3s' }}>
            <Button className="bg-space-light-purple hover:bg-space-purple text-white rounded-full px-8 py-6">
              Explore Features
            </Button>
            <Button variant="outline" className="border-space-light-purple text-white hover:bg-space-light-purple hover:text-space-deep-blue rounded-full px-8 py-6">
              Request Demo
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center appear" style={{ transitionDelay: '0.4s' }}>
          <div className="relative w-[300px] h-[300px] flex items-center justify-center perspective">
            <Planet3D 
              size={240} 
              color="bg-space-purple bg-opacity-90" 
              glowColor="glow-purple"
            >
              <div className="absolute inset-0 rotate-45 opacity-20 bg-[url('/placeholder.svg')] bg-cover rounded-full"></div>
            </Planet3D>
            
            <OrbitingElement 
              size={30} 
              distance={180} 
              color="bg-space-nebula-pink" 
              startPosition={45}
              className="glow-pink"
            />
            
            <OrbitingElement 
              size={20} 
              distance={180} 
              color="bg-space-light-purple" 
              startPosition={160}
              reverse={true}
              className="glow-purple"
            />
            
            <OrbitingElement 
              size={15} 
              distance={160} 
              color="bg-white" 
              startPosition={240}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#problem" className="text-gray-400 hover:text-white transition-colors flex flex-col items-center gap-2">
          <span>Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
      
      {/* Accent decorations */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-space-purple opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-space-nebula-pink opacity-10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
