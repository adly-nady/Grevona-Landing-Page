
import React, { useEffect, useRef } from 'react';
import { AlertTriangle, Bug, XOctagon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProblemSection: React.FC = () => {
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
  
  const problems = [
    {
      icon: <AlertTriangle className="h-10 w-10 text-red-500" />,
      title: "Generic Solutions",
      description: "Existing ERP systems like Odoo and SAP are designed for general business processes and lack specialized features for the milling industry."
    },
    {
      icon: <Bug className="h-10 w-10 text-red-500" />,
      title: "Inefficient Workflows",
      description: "Mills require specific workflows for grain processing, quality control, and inventory management that generic ERPs struggle to accommodate."
    },
    {
      icon: <XOctagon className="h-10 w-10 text-red-500" />,
      title: "Complex Customizations",
      description: "Adapting general ERP systems for mills requires extensive, costly customizations that often result in bloated, hard-to-maintain solutions."
    }
  ];
  
  return (
    <section id="problem" ref={sectionRef} className="py-20 relative z-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 appear">
            <span className="text-red-500">Problem</span> Statement
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto appear" style={{ transitionDelay: '0.1s' }}>
            The milling industry faces unique challenges that standard ERP systems are not equipped to handle, leading to inefficiencies and missed opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden appear" style={{ transitionDelay: `${0.2 + index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-red-500 bg-opacity-10 flex items-center justify-center mb-6 mx-auto">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white text-center">{problem.title}</h3>
                <p className="text-gray-400 text-center">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-red-500 bg-opacity-5 border border-red-500 border-opacity-20 rounded-lg appear" style={{ transitionDelay: '0.5s' }}>
          <p className="text-white text-center leading-relaxed">
            Mills spend <span className="text-red-400 font-bold">30-40%</span> more on ERP implementation and customization than necessary due to the lack of industry-specific solutions. This leads to prolonged timelines, increased costs, and decreased operational efficiency.
          </p>
        </div>
      </div>
      
      {/* Visual elements */}
      <div className="absolute top-1/4 right-20 w-32 h-32 bg-red-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-red-500 opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProblemSection;
