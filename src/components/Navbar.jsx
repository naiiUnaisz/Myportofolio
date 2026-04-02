import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
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
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-wide hover:text-neon-purple transition-colors duration-200"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
