import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderKanban, History, Sparkles, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home },
  { name: 'About', icon: User },
  { name: 'Services', icon: Briefcase },
  { name: 'Projects', icon: FolderKanban },
  { name: 'Experience', icon: History },
  { name: 'Skills', icon: Sparkles },
  { name: 'Contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].name.toLowerCase());
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].name.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName) => {
    setIsOpen(false);
    const element = document.getElementById(sectionName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop: floating vertical sidebar */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed left-6 top-6 z-50 flex-col items-center gap-0.5 glass rounded-2xl p-2.5 border border-blue-500/20"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-9 h-9 flex items-center justify-center mb-1 text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          MA
        </motion.div>

        <div className="w-8 h-px bg-blue-500/20 mb-1" />

        {navItems.map(({ name, icon: Icon }) => {
          const isActive = activeSection === name.toLowerCase();
          return (
            <div key={name} className="relative group">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(name)}
                aria-label={name}
                className={`relative w-9 h-9 flex items-center justify-center rounded-xl transition-colors ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-blue-500 to-cyan-500'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={17} />
              </motion.button>

              {/* Tooltip */}
              <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 rounded-lg glass text-xs font-medium text-white whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                {name}
              </div>
            </div>
          );
        })}
      </motion.nav>

      {/* Mobile: top bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass' : 'bg-dark-navy/30'
        } backdrop-blur-md border-b ${isScrolled ? 'border-blue-500/20' : 'border-transparent'}`}
      >
        <div className="px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              MA
            </motion.div>

            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-2"
            >
              {navItems.map(({ name, icon: Icon }) => (
                <motion.button
                  key={name}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(name)}
                  className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon size={18} />
                  {name}
                </motion.button>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-sm mt-4"
              >
                Let's Talk
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
