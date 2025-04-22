import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Problem', id: 'problem' },
    { name: 'Solution', id: 'solution' },
    { name: 'Advantages', id: 'advantages' },
    { name: 'UI/UX', id: 'uiux' },
    { name: 'API Docs', id: 'api-docs' },
    { name: 'Team', id: 'team' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'api-docs') {
      setActiveSection('api-docs');
    } else {
      setActiveSection('main');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full py-4 px-6 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-space-darker-blue bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white flex items-center gap-2">
        <img src="https://graduation.knowhow-solution.com/attachment/logo/logo.png" style={{ height: '50px' }} alt="Grevona Logo" />
          {/* <span className="inline-block w-8 h-8 rounded-full bg-space-nebula-pink glow-pink"></span> */}
        </a>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-space-nebula-pink transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          className="hidden md:block bg-transparent border border-space-light-purple text-white hover:bg-space-light-purple hover:text-space-deep-blue transition-all"
        >
          Contact
        </Button>

        <button
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-space-darker-blue bg-opacity-95 backdrop-blur-md z-40 flex flex-col p-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-white text-lg py-4 border-b border-gray-700"
            >
              {link.name}
            </button>
          ))}
          <Button className="mt-6 bg-space-light-purple text-space-deep-blue hover:bg-space-nebula-pink">
            Contact
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;