
import React, { useEffect, useRef } from 'react';
import { Database, Server, Code, Smartphone, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TechStack: React.FC = () => {
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
  
  const techStacks = {
    frontend: [
      { name: "React", value: 10 },
      { name: "Vue", value: 60 },
      { name: "TypeScript", value: 10 },
      { name: "Tailwind CSS", value: 80 },
      { name: "JavaScript", value: 100 },
      { name: "Pinia", value: 100 },
      { name: "Axios", value: 75 }
    ],
    backend: [
      { name: "Php", value: 85 },
      { name: "Laravel", value: 80 },
      { name: "Python", value: 75 },
      { name: "Flask", value: 75 },
      { name: "websocket", value: 70 }
    ],
    ai: [
      { name: "Keras", value: 80 },
      { name: "TensorFlow", value: 75 },
      { name: "scikit-learn", value: 70 },
      { name: "pandas", value: 65 },
      { name: "Matplotlib", value: 65 },
      { name: "NumPy", value: 85 }
    ],
    mobile: [
      { name: "Dart", value: 85 },
      { name: "Flutter", value: 70 },
      { name: "Dio", value: 60 },
      { name: "Bloc", value: 60 },
      { name: "Shared Preferences", value: 75 }
    ],
    Database: [
      { name: "MySQL", value: 85 },
      { name: "SQL", value: 70 }
    ]
  };
  
  const getTechColor = (category: string) => {
    switch(category) {
      case 'frontend':
        return 'bg-blue-500';
      case 'backend':
        return 'bg-green-500';
      case 'ai':
        return 'bg-purple-500';
      case 'mobile':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <section ref={sectionRef} className="py-20 relative z-10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-3 appear">
            <Code className="h-8 w-8 text-blue-400 mr-2" />
            <Server className="h-7 w-7 text-green-400 mr-2" />
            <Cpu className="h-6 w-6 text-purple-400 mr-2" />
            <Smartphone className="h-5 w-5 text-orange-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 appear" style={{ transitionDelay: '0.1s' }}>
            Technology <span className="text-blue-400">Stack</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto appear" style={{ transitionDelay: '0.2s' }}>
            The powerful technologies behind Grevona Cloud that make it versatile, scalable, and innovative.
          </p>
        </div>
        
        <div className="appear" style={{ transitionDelay: '0.3s' }}>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="w-full max-w-screen-md mx-auto bg-space-darker-blue mb-10 grid grid-cols-5">
              <TabsTrigger value="frontend" className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-1">
                <Server className="h-4 w-4" />
                <span className="hidden sm:inline">Backend</span>
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-1">
                <Cpu className="h-4 w-4" />
                <span className="hidden sm:inline">AI</span>
              </TabsTrigger>
              <TabsTrigger value="mobile" className="flex items-center gap-1">
                <Smartphone className="h-4 w-4" />
                <span className="hidden sm:inline">Mobile</span>
              </TabsTrigger>
              <TabsTrigger value="Database" className="flex items-center gap-1">
                <Database className="h-4 w-4" />
                <span className="hidden sm:inline">Database</span>
              </TabsTrigger>
            </TabsList>
            
            {Object.entries(techStacks).map(([category, techs]) => (
              <TabsContent key={category} value={category} className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="bg-space-darker-blue bg-opacity-40 backdrop-blur-sm border border-gray-800">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-6 flex items-center">
                          {category === 'frontend' && <Code className="h-5 w-5 text-blue-400 mr-2" />}
                          {category === 'backend' && <Server className="h-5 w-5 text-green-400 mr-2" />}
                          {category === 'ai' && <Cpu className="h-5 w-5 text-purple-400 mr-2" />}
                          {category === 'mobile' && <Smartphone className="h-5 w-5 text-orange-400 mr-2" />}
                          {category === 'Database' && <Database className="h-5 w-5 text-[#8a9cff] mr-2" />}
                          {category.charAt(0).toUpperCase() + category.slice(1)} Technologies
                        </h3>
                        
                        <div className="space-y-4">
                          {techs.map((tech) => (
                            <div key={tech.name} className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-300">{tech.name}</span>
                                <span className="text-gray-400">{tech.value}%</span>
                              </div>
                              <div className="h-2 bg-space-deeper-blue rounded-full overflow-hidden">
                                <div 
                                  className={`h-full ${getTechColor(category)}`} 
                                  style={{ width: `${tech.value}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <div className="w-full max-w-xs aspect-square relative">
                          <div className="absolute inset-0 rounded-full border-4 border-dashed border-opacity-20 animate-rotate-slow" style={{ borderColor: getTechColorValue(category) }}></div>
                          
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 h-3/4 rounded-full flex items-center justify-center" style={{ backgroundColor: getBackgroundColorValue(category) }}>
                              {category === 'frontend' && <Code className="h-12 w-12 text-blue-400" />}
                              {category === 'backend' && <Server className="h-12 w-12 text-green-400" />}
                              {category === 'ai' && <Cpu className="h-12 w-12 text-purple-400" />}
                              {category === 'mobile' && <Smartphone className="h-12 w-12 text-orange-400" />}
                              {category === 'Database' && <Database className="h-12 w-12 text-[#8a9cff]" />}
                            </div>
                          </div>
                          
                          {techs.map((tech, index) => {
                            const angle = (index / techs.length) * 360;
                            const radian = (angle * Math.PI) / 180;
                            const radius = 45; // % of container
                            
                            const x = 50 + radius * Math.cos(radian);
                            const y = 50 + radius * Math.sin(radian);
                            
                            return (
                              <div 
                                key={tech.name}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-space-deeper-blue p-2 rounded-full"
                                style={{ 
                                  left: `${x}%`, 
                                  top: `${y}%`,
                                  boxShadow: `0 0 10px ${getBackgroundColorValue(category, 0.5)}`
                                }}
                              >
                                <div 
                                  className="w-2 h-2 rounded-full"
                                  style={{ backgroundColor: getTechColorValue(category) }}
                                ></div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      {/* Visual elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

// Helper functions for tech colors
const getTechColorValue = (category: string): string => {
  switch(category) {
    case 'frontend':
      return 'rgba(59, 130, 246, 0.7)'; // blue-500
    case 'backend':
      return 'rgba(34, 197, 94, 0.7)'; // green-500
    case 'ai':
      return 'rgba(168, 85, 247, 0.7)'; // purple-500
    case 'mobile':
      return 'rgba(249, 115, 22, 0.7)'; // orange-500
    case 'Database':
      return 'rgba(63, 81, 181, 0.7)'; 
    default:
      return 'rgba(107, 114, 128, 0.7)'; // gray-500
  }
};

const getBackgroundColorValue = (category: string, opacity = 0.1): string => {
  switch(category) {
    case 'frontend':
      return `rgba(59, 130, 246, ${opacity})`; // blue-500
    case 'backend':
      return `rgba(34, 197, 94, ${opacity})`; // green-500
    case 'ai':
      return `rgba(168, 85, 247, ${opacity})`; // purple-500
    case 'mobile':
      return `rgba(249, 115, 22, ${opacity})`; // orange-500
    case 'Database':
      return 'rgba(63, 81, 181, 0.7)'; 
    default:
      return `rgba(107, 114, 128, ${opacity})`; // gray-500
  }
};

export default TechStack;
// const teamMembers: TeamMember[] = [
//   {
//     initials: 'AN',
//     name: 'Adly Nady',
//     role: 'Project Lead',
//     department: 'Management',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     initials: 'TS',
//     name: 'Taha Shaban',
//     role: 'UX Designer',
//     department: 'Design',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     initials: 'GK',
//     name: 'Gasy Kamal',
//     role: 'Frontend Developer',
//     department: 'Development',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     initials: 'KM',
//     name: 'Karma Magdi',
//     role: 'Backend Developer',
//     department: 'Development',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     initials: 'RE',
//     name: 'Remon Ezz',
//     role: 'AI Specialist',
//     department: 'AI Research',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     initials: 'CM',
//     name: 'Catherine Melad',
//     role: 'AI Specialist',
//     department: 'AI Research',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     initials: 'NH',
//     name: 'Naiera Hazem',
//     role: 'AI Specialist',
//     department: 'AI Research',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     initials: 'YA',
//     name: 'Yara Adel',
//     role: 'AI Specialist',
//     department: 'AI Research',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     initials: 'CA',
//     name: 'Christina Atef',
//     role: 'AI Specialist',
//     department: 'AI Research',
//     image: 'https://via.placeholder.com/150',
//   },
// ];