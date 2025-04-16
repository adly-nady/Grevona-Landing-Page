
import React, { useEffect, useRef } from 'react';
import { LayoutDashboard, MousePointer, Smartphone, Tablet, Laptop } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UIUXSection: React.FC = () => {
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
  
  return (
    <section id="uiux" ref={sectionRef} className="py-20 relative z-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-3 appear">
            <LayoutDashboard className="h-8 w-8 text-space-nebula-pink mr-2" />
            <MousePointer className="h-6 w-6 text-space-light-purple" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 appear" style={{ transitionDelay: '0.1s' }}>
            UI/UX <span className="text-space-nebula-pink">Design</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto appear" style={{ transitionDelay: '0.2s' }}>
            Grevona Cloud features an intuitive, user-friendly interface designed specifically for mill operators and managers.
          </p>
        </div>
        
        <div className="appear" style={{ transitionDelay: '0.3s' }}>
          <Tabs defaultValue="desktop" className="w-full">
            <TabsList className="w-full max-w-md mx-auto bg-space-darker-blue mb-10 grid grid-cols-3">
              <TabsTrigger value="desktop" className="flex items-center gap-2">
                <Laptop className="h-4 w-4" />
                <span className="hidden sm:inline">Desktop</span>
              </TabsTrigger>
              <TabsTrigger value="tablet" className="flex items-center gap-2">
                <Tablet className="h-4 w-4" />
                <span className="hidden sm:inline">Tablet</span>
              </TabsTrigger>
              <TabsTrigger value="mobile" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span className="hidden sm:inline">Mobile</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="desktop" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-space-darker-blue p-4 rounded-lg overflow-hidden shadow-xl border border-space-light-purple border-opacity-20">
                <div className="aspect-video bg-space-deep-blue rounded relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-12 bg-space-darker-blue flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 h-6 w-72 bg-space-deeper-blue rounded-full"></div>
                  </div>
                  
                  <div className="pt-16 px-6 grid grid-cols-12 gap-4 h-full">
                    <div className="col-span-3 bg-space-deeper-blue bg-opacity-60 rounded-lg p-3">
                      <div className="h-8 w-full bg-space-light-purple bg-opacity-20 rounded-md mb-3"></div>
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5].map((item) => (
                          <div key={item} className="h-6 w-full bg-space-deeper-blue rounded-md"></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="col-span-9 grid grid-cols-2 gap-4">
                      <div className="bg-space-deeper-blue bg-opacity-60 rounded-lg p-3">
                        <div className="h-6 w-1/2 bg-space-light-purple bg-opacity-20 rounded-md mb-3"></div>
                        <div className="h-28 w-full bg-space-deeper-blue rounded-md"></div>
                      </div>
                      
                      <div className="bg-space-deeper-blue bg-opacity-60 rounded-lg p-3">
                        <div className="h-6 w-1/2 bg-space-nebula-pink bg-opacity-20 rounded-md mb-3"></div>
                        <div className="h-28 w-full bg-space-deeper-blue rounded-md"></div>
                      </div>
                      
                      <div className="col-span-2 bg-space-deeper-blue bg-opacity-60 rounded-lg p-3">
                        <div className="h-6 w-1/3 bg-green-500 bg-opacity-20 rounded-md mb-3"></div>
                        <div className="grid grid-cols-3 gap-3">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="h-16 bg-space-deeper-blue rounded-md"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h4 className="text-white font-medium">Desktop Dashboard</h4>
                  <p className="text-gray-400 text-sm">Comprehensive view with advanced analytics</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tablet" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-space-darker-blue p-4 rounded-lg overflow-hidden shadow-xl border border-space-light-purple border-opacity-20 max-w-md mx-auto">
                <div className="aspect-[4/3] bg-space-deep-blue rounded relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-8 bg-space-darker-blue flex items-center px-3">
                    <div className="w-20 h-4 bg-space-deeper-blue rounded-full"></div>
                  </div>
                  
                  <div className="pt-12 px-4 grid grid-cols-6 gap-3 h-full">
                    <div className="col-span-6 h-8 bg-space-deeper-blue bg-opacity-60 rounded-md flex items-center px-3">
                      <div className="w-4 h-4 rounded-full bg-space-light-purple mr-2"></div>
                      <div className="h-3 w-24 bg-white bg-opacity-20 rounded-full"></div>
                    </div>
                    
                    <div className="col-span-3 bg-space-deeper-blue bg-opacity-60 rounded-lg p-2">
                      <div className="h-4 w-16 bg-space-light-purple bg-opacity-20 rounded-sm mb-2"></div>
                      <div className="h-20 w-full bg-space-deeper-blue rounded-md"></div>
                    </div>
                    
                    <div className="col-span-3 bg-space-deeper-blue bg-opacity-60 rounded-lg p-2">
                      <div className="h-4 w-16 bg-space-nebula-pink bg-opacity-20 rounded-sm mb-2"></div>
                      <div className="h-20 w-full bg-space-deeper-blue rounded-md"></div>
                    </div>
                    
                    <div className="col-span-6 bg-space-deeper-blue bg-opacity-60 rounded-lg p-2">
                      <div className="h-4 w-24 bg-green-500 bg-opacity-20 rounded-sm mb-2"></div>
                      <div className="grid grid-cols-2 gap-2">
                        {[1, 2].map((item) => (
                          <div key={item} className="h-12 bg-space-deeper-blue rounded-md"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h4 className="text-white font-medium">Tablet Interface</h4>
                  <p className="text-gray-400 text-sm">Optimized for plant floor monitoring</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mobile" className="focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-space-darker-blue p-4 rounded-lg overflow-hidden shadow-xl border border-space-light-purple border-opacity-20 max-w-xs mx-auto">
                <div className="aspect-[9/16] bg-space-deep-blue rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-6 bg-space-darker-blue flex items-center justify-between px-3">
                    <div className="w-10 h-3 bg-space-deeper-blue rounded-full"></div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-space-deeper-blue"></div>
                      <div className="w-3 h-3 rounded-full bg-space-deeper-blue"></div>
                      <div className="w-3 h-3 rounded-full bg-space-deeper-blue"></div>
                    </div>
                  </div>
                  
                  <div className="pt-10 px-3 flex flex-col gap-3">
                    <div className="h-10 bg-space-deeper-blue bg-opacity-60 rounded-md flex items-center px-2">
                      <div className="w-6 h-6 rounded-full bg-space-light-purple mr-2"></div>
                      <div className="h-3 w-20 bg-white bg-opacity-20 rounded-full"></div>
                    </div>
                    
                    <div className="bg-space-deeper-blue bg-opacity-60 rounded-lg p-3">
                      <div className="h-4 w-16 bg-space-light-purple bg-opacity-20 rounded-sm mb-2"></div>
                      <div className="h-20 w-full bg-space-deeper-blue rounded-md"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-space-deeper-blue bg-opacity-60 rounded-lg p-2">
                        <div className="h-3 w-12 bg-space-nebula-pink bg-opacity-20 rounded-sm mb-2"></div>
                        <div className="h-12 w-full bg-space-deeper-blue rounded-md"></div>
                      </div>
                      
                      <div className="bg-space-deeper-blue bg-opacity-60 rounded-lg p-2">
                        <div className="h-3 w-12 bg-green-500 bg-opacity-20 rounded-sm mb-2"></div>
                        <div className="h-12 w-full bg-space-deeper-blue rounded-md"></div>
                      </div>
                    </div>
                    
                    <div className="bg-space-deeper-blue bg-opacity-60 rounded-lg p-2">
                      <div className="h-3 w-20 bg-space-light-purple bg-opacity-20 rounded-sm mb-2"></div>
                      <div className="grid grid-cols-1 gap-2">
                        {[1, 2].map((item) => (
                          <div key={item} className="h-8 bg-space-deeper-blue rounded-md"></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-space-darker-blue flex items-center justify-around px-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="w-8 h-8 rounded-full bg-space-deeper-blue"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h4 className="text-white font-medium">Mobile App</h4>
                  <p className="text-gray-400 text-sm">Quick monitoring and approvals on the go</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 appear" style={{ transitionDelay: '0.4s' }}>
          <div className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-20 rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-space-light-purple bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <MousePointer className="h-8 w-8 text-space-light-purple" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Intuitive Interface</h3>
            <p className="text-gray-400">Role-based dashboards designed for mill operators</p>
          </div>
          
          <div className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-20 rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-space-nebula-pink bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <LayoutDashboard className="h-8 w-8 text-space-nebula-pink" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Custom Workflows</h3>
            <p className="text-gray-400">Specialized processes for grain processing and milling</p>
          </div>
          
          <div className="bg-space-deeper-blue bg-opacity-40 backdrop-blur-sm border border-space-light-purple border-opacity-20 rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <div className="flex">
                <Smartphone className="h-6 w-6 text-green-400" />
                <Tablet className="h-7 w-7 text-green-400 -ml-1" />
                <Laptop className="h-8 w-8 text-green-400 -ml-1" />
              </div>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Responsive Design</h3>
            <p className="text-gray-400">Seamless experience across all devices</p>
          </div>
        </div>
      </div>
      
      {/* Visual elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-space-nebula-pink opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-space-light-purple opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default UIUXSection;
