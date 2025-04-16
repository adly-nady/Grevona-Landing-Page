
import React, { useEffect, useRef } from 'react';
import { Users, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import OrbitingElement from './OrbitingElement';

const TeamSection: React.FC = () => {
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
  
  const teamMembers = [
    {
      initials: "JD",
      name: "John Doe",
      role: "Project Lead"
    },
    {
      initials: "AS",
      name: "Alice Smith",
      role: "UX Designer"
    },
    {
      initials: "MB",
      name: "Mike Brown",
      role: "Frontend Developer"
    },
    {
      initials: "LJ",
      name: "Lisa Johnson",
      role: "Backend Developer"
    },
    {
      initials: "RK",
      name: "Robert Kim",
      role: "AI Specialist"
    }
  ];
  
  return (
    <section id="team" ref={sectionRef} className="py-20 relative z-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 appear">
              Our <span className="text-space-nebula-pink">Team</span>
            </h2>
            <div className="absolute -top-8 -right-10 w-16 h-16">
              <Users className="w-8 h-8 text-space-nebula-pink" />
            </div>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto appear" style={{ transitionDelay: '0.1s' }}>
            Meet the talented individuals who brought Grevona Cloud to life.
          </p>
        </div>
        
        <div className="flex justify-center mb-20 appear" style={{ transitionDelay: '0.2s' }}>
          <div className="relative w-[300px] h-[300px]">
            {teamMembers.map((member, index) => {
              const angle = (index / teamMembers.length) * 360;
              const color = index % 2 === 0 ? "bg-space-light-purple" : "bg-space-nebula-pink";
              const glowClass = index % 2 === 0 ? "glow-purple" : "glow-pink";
              
              return (
                <OrbitingElement 
                  key={index}
                  size={60} 
                  distance={130} 
                  duration={30} 
                  color={color}
                  startPosition={angle}
                  reverse={index % 2 !== 0}
                  className={`${glowClass} z-10`}
                >
                  <div className="relative group">
                    <Avatar className="w-12 h-12 border-2 border-white">
                      <AvatarFallback className="bg-space-deeper-blue text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-space-deeper-blue bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="font-medium">{member.name}</div>
                      <div className="text-gray-400 text-xs">{member.role}</div>
                    </div>
                  </div>
                </OrbitingElement>
              );
            })}
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-space-deeper-blue flex items-center justify-center border-2 border-space-light-purple z-20">
              <User className="w-10 h-10 text-space-light-purple" />
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-dashed border-space-light-purple opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-dashed border-space-nebula-pink opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
