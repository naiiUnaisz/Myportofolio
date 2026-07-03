import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-bold">
          <span className="text-white">Unai</span>
          <span className="text-neon-purple text-glow">Profile</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.key} 
              href={link.href}
              className="text-sm font-medium tracking-wide hover:text-neon-purple transition-colors duration-200"
            >
              {t(`navbar.${link.key}`).toUpperCase()}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-neon-purple/50 text-sm font-medium hover:bg-neon-purple/10 transition-all"
          >
            <span className={`${language === 'en' ? 'text-neon-purple' : 'text-gray-400'}`}>EN</span>
            <span className="text-gray-500">|</span>
            <span className={`${language === 'id' ? 'text-neon-purple' : 'text-gray-400'}`}>ID</span>
          </button>
        </div>
        {/* Mobile toggle */}
        <button 
          onClick={toggleLanguage}
          className="md:hidden flex items-center gap-1 px-3 py-1 rounded-full border border-neon-purple/50 text-sm font-medium hover:bg-neon-purple/10 transition-all"
        >
          <span className={`${language === 'en' ? 'text-neon-purple' : 'text-gray-400'}`}>EN</span>
          <span className="text-gray-500">|</span>
          <span className={`${language === 'id' ? 'text-neon-purple' : 'text-gray-400'}`}>ID</span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
