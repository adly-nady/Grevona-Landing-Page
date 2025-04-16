
import React, { useEffect, useRef } from 'react';
import { BarChart2, TrendingUp, ShieldCheck, ThumbsUp, Clock, Coins } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import OrbitingElement from './OrbitingElement';

const AdvantagesSection: React.FC = () => {
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
  
  const advantages = [
    {
      icon: <TrendingUp className="h-10 w-10 text-space-light-purple" />,
      title: "40% Increased Efficiency",
      description: "Purpose-built workflows reduce manual processes and streamline operations."
    },
    {
      icon: <Clock className="h-10 w-10 text-space-light-purple" />,
      title: "50% Faster Implementation",
      description: "No need for extensive customizations means quicker deployment."
    },
    {
      icon: <Coins className="h-10 w-10 text-space-light-purple" />,
      title: "35% Cost Reduction",
      description: "Lower implementation costs and reduced need for specialized consultants."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-space-light-purple" />,
      title: "Enhanced Analytics",
      description: "Mill-specific reports and dashboards provide actionable insights."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-space-light-purple" />,
      title: "Compliance Built-in",
      description: "Industry-specific compliance features are integrated from the start."
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-space-light-purple" />,
      title: "Intuitive User Experience",
      description: "Designed with millers in mind for a natural workflow."
    }
  ];
  
  return (
    <section id="advantages" ref={sectionRef} className="py-20 relative z-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 appear">
              Key <span className="text-space-light-purple">Advantages</span>
            </h2>
            <div className="absolute -top-10 -right-16 w-20 h-20">
              <div className="relative w-full h-full">
                <OrbitingElement 
                  size={12} 
                  distance={30} 
                  duration={10} 
                  color="bg-space-light-purple" 
                  className="glow-purple"
                />
              </div>
            </div>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto appear" style={{ transitionDelay: '0.1s' }}>
            Grevona Cloud offers substantial advantages over generic ERP systems, delivering value specifically tailored to the milling industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-20 overflow-hidden group hover:border-space-light-purple transition-all duration-300 appear" 
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-space-light-purple bg-opacity-10 flex items-center justify-center mb-6 mx-auto group-hover:bg-opacity-20 transition-all duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white text-center">{advantage.title}</h3>
                <p className="text-gray-400 text-center">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-space-light-purple bg-opacity-5 border border-space-light-purple border-opacity-20 rounded-lg text-center appear" style={{ transitionDelay: '0.8s' }}>
          <p className="text-white text-lg font-medium mb-2">
            "Grevona Cloud is transforming how we operate our mill. The specialized features have increased our productivity by 45%."
          </p>
          <p className="text-space-light-purple">- John Miller, Operations Director at MillTech Industries</p>
        </div>
      </div>
      
      {/* Visual elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-space-light-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-space-nebula-pink opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AdvantagesSection;
