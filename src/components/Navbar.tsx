
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
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
    { name: 'Problem', href: '/#problem' },
    { name: 'Solution', href: '/#solution' },
    { name: 'Advantages', href: '/#advantages' },
    { name: 'UI/UX', href: '/#uiux' },
    { name: 'API Docs', href: '/api-docs' },
    { name: 'Team', href: '/#team' }
  ];
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full py-4 px-6 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-space-darker-blue bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-space-nebula-pink glow-pink"></span>
          Grevona
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-space-nebula-pink transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        <Button variant="outline" className="hidden md:block bg-transparent border border-space-light-purple text-white hover:bg-space-light-purple hover:text-space-deep-blue transition-all">
          Contact
        </Button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-space-darker-blue bg-opacity-95 backdrop-blur-md z-40 flex flex-col p-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white text-lg py-4 border-b border-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
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
