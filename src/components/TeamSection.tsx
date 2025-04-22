import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Users, Github, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { motion, useAnimation } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { cn } from '@/lib/utils';

// Define TeamMember interface
interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  color: string;
  image?: string;
  social: {
    github?: string;
    linkedin?: string;
  };
  isFeatured?: boolean;
}

// Main TeamSection component
const TeamSection: React.FC = () => {
  const [inView, setInView] = useState(false);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animating section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  // Team members data
  const teamMembers: TeamMember[] = useMemo(
    () => [
      {
        initials: 'TS',
        name: 'Taha Shapan',
        role: 'FullStack Developer',
        bio: 'Leads strategic initiatives with 15+ years in tech.',
        skills: ['Backend', 'Frontend'],
        color: 'from-blue-400 to-indigo-500',
        image: '/mem/taha.png',
        social: { github: 'Taha-Shaban-Kaamel', linkedin: 'tahashaban' },
        isFeatured: true,
      },
      {
        initials: 'AN',
        name: 'Adly Nady',
        role: 'Software Engineer',
        bio: 'Develops innovative software solutions.',
        skills: ['Backend', 'Frontend', 'DevOps', 'AI', 'Mobile'],
        color: 'from-purple-400 to-pink-500',
        image: '/mem/leader.png',
        social: { github: 'adly-nady', linkedin: 'adly-nady-10741b236' },
      },
      {
        initials: 'GK',
        name: 'Gasy Kamal',
        role: 'UI/UX Designer',
        bio: 'UI/UX Designer specializing in Figma. Expert in crafting intuitive interfaces, wireframes, and prototypes with a focus on usability and design consistency.',
        skills: ['Figma', 'Sketch'],
        color: 'from-sky-400 to-blue-500',
        image: '/mem/gasy.png',
        social: { github: 'Gasy-Kamal', linkedin: 'gasy-kamal-904873359' },
      },
      {
        initials: 'KM',
        name: 'Karma Magdii',
        role: 'UI/UX Designer',
        bio: 'Designs user-friendly interfaces.',
        skills: ['Figma', 'Sketch'],
        color: 'from-sky-400 to-blue-500',
        image: '/mem/karma.png',
        social: { github: 'Karma-Magdii', linkedin: 'karma-magdy-15259531a' },
      },
      {
        initials: 'RE',
        name: 'Remon Ezz',
        role: 'Frontend Developer',
        bio: 'Creates engaging web experiences.',
        skills: ['React', 'Tailwind CSS'],
        color: 'from-violet-400 to-purple-500',
        image: '/mem/remon.png',
        social: { github: 'Remon-Ezz', linkedin: 'remon-ezz-4989b0267' },
      },
      {
        initials: 'YA',
        name: 'Yara Adel',
        role: 'Database Developer',
        bio: 'Manages and optimizes databases.',
        skills: ['SQL', 'MySQL'],
        color: 'from-green-400 to-lime-500',
        image: '/mem/Yara.png',
        social: { github: 'Yara-Adel', linkedin: 'yara-adel-4b3605205' },
      },
      {
        initials: 'NH',
        name: 'Naiera Hazem',
        role: 'UI/UX Designer',
        bio: 'Designs user-friendly interfaces.',
        skills: ['Figma', 'Sketch'],
        color: 'from-cyan-400 to-blue-500',
        image: '/mem/naire.png',
        social: { github: 'Naiera-Hazem', linkedin: 'naiera-hazem' },
      },
      {
        initials: 'CM',
        name: 'Catherine Melad',
        role: 'Frontend Developer',
        bio: 'Creates engaging web experiences.',
        skills: ['React', 'Tailwind CSS'],
        color: 'from-pink-400 to-red-500',
        image: '/mem/cathrein.png',
        social: { github: 'CatherineMelad', linkedin: 'catherine-melad' },
      },
      {
        initials: 'CA',
        name: 'Christina Atef',
        role: 'Backend Developer',
        bio: 'Develops server-side logic.',
        skills: ['APIs', 'Logic'],
        color: 'from-orange-400 to-amber-500',
        image: '/mem/christina.png',
        social: { github: 'christinaatef', linkedin: 'christina-atef-357388288' },
      },
      {
        initials: 'SL',
        name: 'Sara Lotfy',
        role: 'documentation',
        bio: 'documentates the project.',
        skills: ['Documentation', 'Writing'],
        color: 'from-indigo-400 to-purple-500',
        image: '/mem/Sara.png',
        social: { github: 'chloelee', linkedin: 'Sara-Lotfy' },
      },
    ],
    []
  );

  // Animation variants for card entrance
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  // Animation variants for card flip
  const flipVariants = {
    front: { opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
    back: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  // Handle card flip on click
  const handleClick = (index: number) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Handle card flip on keyboard interaction
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(index);
    }
  };

  // Extract primary and secondary colors from gradient
  const getColors = (color: string) => {
    const [primary, secondary] = color.split(' ').map((c) => c.replace(/from-|to-/, ''));
    return { primary, secondary };
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b overflow-hidden"
      aria-labelledby="team-heading"
    >
      {/* Background Particle Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0%,transparent_80%)] pointer-events-none animate-subtle-pulse" />

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.35; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.4; transform: scale(1) translate(0, 0); }
          50% { opacity: 0.9; transform: scale(1.2) translate(3px, -3px); }
        }
        .animate-subtle-pulse {
          animation: subtle-pulse 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .purple-glow {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
        .sparkle-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(17, 24, 39, 0.95), rgba(8, 12, 21, 1));
          overflow: hidden;
          z-index: 1;
        }
        .sparkle-bg::before,
        .sparkle-bg::after {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          background: var(--sparkle-color-primary);
          border-radius: 50%;
          animation: sparkle 2s ease-in-out infinite;
        }
        .sparkle-bg::before {
          top: 20%;
          left: 30%;
          animation-delay: 0.2s;
        }
        .sparkle-bg::after {
          bottom: 25%;
          right: 35%;
          animation-delay: 0.6s;
        }
        .sparkle-bg > .sparkle-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: sparkle 2.5s ease-in-out infinite;
        }
        .sparkle-bg > .sparkle-particle:nth-child(1) {
          top: 50%;
          left: 70%;
          background: var(--sparkle-color-secondary);
          animation-delay: 0.4s;
        }
        .sparkle-bg > .sparkle-particle:nth-child(2) {
          top: 80%;
          left: 20%;
          background: var(--sparkle-color-primary);
          animation-delay: 0.8s;
        }
        .sparkle-bg > .sparkle-particle:nth-child(3) {
          top: 30%;
          right: 20%;
          background: var(--sparkle-color-secondary);
          animation-delay: 1s;
        }
        .card-front,
        .card-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
        }
        .card-back {
          z-index: 2;
          transform: scaleX(1);
        }
      `}</style>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          className="text-center mb-16 sm:mb-20 md:mb-24 space-y-6"
        >
          <div className="relative inline-block">
            <motion.h2
              id="team-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Team
              </span>
            </motion.h2>
            <motion.div
              initial={{ scale: 0, rotate: 45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 180 }}
              className="absolute -top-10 sm:-top-12 -right-12 sm:-right-16"
            >
              <Users className="w-12 sm:w-14 h-12 sm:h-14 text-blue-300/30" aria-hidden="true" />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ delay: 0.5 }}
            className="text-gray-100 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
          >
            Meet the visionaries driving Grevona Cloud's innovation to new heights.
          </motion.p>
        </motion.div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => {
            const { primary, secondary } = getColors(member.color);
            return (
              <Tilt
                key={index}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={500}
              >
                <motion.div
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className={cn(
                    'team-card rounded-2xl overflow-hidden shadow-lg w-[250px] h-[350px] relative animate-fade-in cursor-pointer',
                    member.isFeatured ? 'purple-glow' : ''
                  )}
                  onClick={() => handleClick(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={flippedCards[index] || false}
                  aria-label={`Flip to view ${member.name}'s profile details`}
                  aria-describedby={`team-member-desc-${index}`}
                >
                  {/* Front Side (Image) */}
                  <motion.div
                    className="card-front"
                    variants={flipVariants}
                    animate={flippedCards[index] ? 'back' : 'front'}
                  >
                    <div
                      className="sparkle-bg"
                      style={
                        {
                          '--sparkle-color-primary': `var(--${primary})`,
                          '--sparkle-color-secondary': `var(--${secondary})`,
                        } as React.CSSProperties
                      }
                    >
                      <div className="sparkle-particle" aria-hidden="true" />
                      <div className="sparkle-particle" aria-hidden="true" />
                      <div className="sparkle-particle" aria-hidden="true" />
                    </div>
                    <div className="h-full relative z-10">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={`${member.name}'s profile picture`}
                          className="w-full h-full object-contain max-w-full max-h-full"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-transparent">
                          <Avatar className="w-24 h-24">
                            <AvatarFallback
                              className={cn(
                                'bg-gradient-to-r text-white font-bold text-3xl',
                                member.color
                              )}
                            >
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/75 to-transparent p-3 z-20">
                      <h3 className="text-white font-semibold text-sm">{member.name}</h3>
                      <p className="text-gray-300 text-xs">{member.role}</p>
                    </div>
                  </motion.div>

                  {/* Back Side (Details) */}
                  <motion.div
                    className="card-back"
                    variants={flipVariants}
                    animate={flippedCards[index] ? 'front' : 'back'}
                  >
                    <div className="p-6 flex flex-col h-full justify-between bg-gray-900/90 backdrop-blur-md">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">{member.name}</h3>
                        <p className="text-blue-200 text-sm uppercase tracking-widest">{member.role}</p>
                        <p
                          id={`team-member-desc-${index}`}
                          className="text-gray-300 text-sm leading-relaxed"
                        >
                          {member.bio}
                        </p>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-50 uppercase tracking-widest">
                            Skills
                          </h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {member.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-gray-800/80 text-gray-50 text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 justify-center mt-4">
                        {member.social.github && (
                          <motion.a
                            href={`https://github.com/${member.social.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-200 hover:text-blue-300 transition-all duration-300"
                            aria-label={`${member.name}'s GitHub profile`}
                            whileHover={{ scale: 1.2 }}
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                        {member.social.linkedin && (
                          <motion.a
                            href={`https://linkedin.com/in/${member.social.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-200 hover:text-blue-300 transition-all duration-300"
                            aria-label={`${member.name}'s LinkedIn profile`}
                            whileHover={{ scale: 1.2 }}
                          >
                            <Linkedin className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 opacity-70 mt-4 text-center">TEAM MEMBER</p>
                    </div>
                  </motion.div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TeamSection);