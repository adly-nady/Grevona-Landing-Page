
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Rocket, Zap, Wrench } from 'lucide-react';
import Planet3D from './Planet3D';

const SolutionSection: React.FC = () => {
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
    
    const elements = sectionRef.current?.querySelectorAll('.appear');
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);
  
  const solutionPoints = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      text: "Purpose-built for the milling industry's unique needs"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      text: "Streamlined workflows for grain processing and inventory"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      text: "Seamless integration with milling equipment and IoT devices"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      text: "Specialized reporting and analytics for mill operations"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-400" />,
      text: "Cloud-based architecture for accessibility and scalability"
    }
  ];
  
  return (
    <section id="solution" ref={sectionRef} className="py-20 relative z-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 appear">
              Our <span className="text-green-400">Solution</span>
            </h2>
            <p className="text-gray-300 mb-8 appear" style={{ transitionDelay: '0.1s' }}>
              Grevona Cloud is a specialized ERP system designed exclusively for the milling industry, addressing the unique challenges that general ERP systems can't handle.
            </p>
            
            <div className="space-y-4 appear" style={{ transitionDelay: '0.2s' }}>
              {solutionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{point.icon}</div>
                  <p className="text-white">{point.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 appear" style={{ transitionDelay: '0.3s' }}>
              <div className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-30 rounded-lg p-4 text-center">
                <Rocket className="h-10 w-10 mx-auto mb-2 text-space-light-purple" />
                <h4 className="text-white font-medium">Specialized</h4>
              </div>
              <div className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-30 rounded-lg p-4 text-center">
                <Zap className="h-10 w-10 mx-auto mb-2 text-space-light-purple" />
                <h4 className="text-white font-medium">Efficient</h4>
              </div>
              <div className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-30 rounded-lg p-4 text-center">
                <Wrench className="h-10 w-10 mx-auto mb-2 text-space-light-purple" />
                <h4 className="text-white font-medium">Customizable</h4>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center order-1 md:order-2 appear" style={{ transitionDelay: '0.4s' }}>
            <div className="relative w-[280px] h-[280px] perspective">
              <Planet3D 
                size={260} 
                color="bg-green-500 bg-opacity-20" 
                glowColor="glow"
                rotationSpeed={20}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full bg-green-400 bg-opacity-40 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-green-300 bg-opacity-60 animate-pulse-glow flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-green-200"></div>
                    </div>
                  </div>
                </div>
              </Planet3D>
              
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-space-deeper-blue bg-opacity-80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-green-400 border-opacity-30">
                  <Rocket className="h-10 w-10 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-green-400 opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default SolutionSection;
