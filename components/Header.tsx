
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'about' | 'vision' | 'team' | 'products' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'About', id: 'about' },
    { name: 'Vision', id: 'vision' },
    { name: 'Team', id: 'team' },
    { name: 'Products', id: 'products' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: Page) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  const isDarkText = isScrolled || currentPage !== 'home';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleNavClick('home')} className="flex items-center space-x-3 group text-left">
          <div className="w-10 h-10 bg-[#e31e24] flex items-center justify-center font-bold text-white text-xl">R</div>
          <div className={`flex flex-col ${isDarkText ? 'text-gray-900' : 'text-white'}`}>
            <span className="font-bold tracking-widest text-lg leading-tight uppercase">RADIANT</span>
            <span className="text-[10px] tracking-[0.2em] font-medium opacity-80 uppercase">Labels & Packaging</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-xs uppercase tracking-[0.3em] font-semibold transition-colors hover:text-[#e31e24] relative py-2 ${
                isDarkText ? 'text-gray-900' : 'text-white'
              } ${currentPage === link.id ? 'text-[#e31e24]' : ''}`}
            >
              {link.name}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e31e24] animate-in slide-in-from-left duration-300"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="text-gray-900" /> : <Menu className={isDarkText ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2" aria-label="Close menu">
          <X size={32} />
        </button>
        <button onClick={() => handleNavClick('home')} className="text-2xl uppercase tracking-[0.4em] font-light text-gray-800 hover:text-[#e31e24]">Home</button>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={`text-2xl uppercase tracking-[0.4em] font-light transition-colors ${currentPage === link.id ? 'text-[#e31e24] font-medium' : 'text-gray-800 hover:text-[#e31e24]'}`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
