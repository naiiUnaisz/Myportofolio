import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import unaiImg from '../assets/unes.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden overflow-x-hidden pt-20">
      
      {/* Background PORTFOLIO text */}
      <motion.div 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span 
          className="text-[14vw] sm:text-[16vw] md:text-[13vw] lg:text-[10rem] font-bold font-heading opacity-10 tracking-[0.05em] leading-none drop-shadow-lg"
          style={{ color: '#b026ff' }} // deep neon purple
        >
          PORTFOLIO
        </span>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center justify-center text-center space-y-8 mt-10 md:mt-16">
        
        {/* Name Text */}
        <motion.div 
          key={t('hero.greeting')}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p 
            className="text-gray-300 font-medium tracking-widest text-sm uppercase mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            {t('hero.greeting')}
          </motion.p>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold font-heading leading-tight text-white text-glow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            Unaisah
          </motion.h1>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          className="relative group mt-4 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glowing outer halo (soft) */}
          <div className="absolute inset-0 rounded-full bg-neon-purple opacity-20 blur-2xl group-hover:opacity-30 transition-all duration-500"></div>
          
          {/* Image Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden z-20 flex items-center justify-center">
            <img 
              src={unaiImg} 
              alt="Unaisah" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(176,38,255,0.4)]"
            />
          </div>
        </motion.div>

        {/* Job Titles */}
        <motion.div 
          key={t('hero.title')}
          className="flex flex-col items-center mt-2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-white">
            {t('hero.title')}
          </h2>
          <div className="flex items-center gap-4 mb-24 md:mb-32">
            <div className="h-[2px] bg-neon-purple w-8 opacity-50"></div>
            <p className="text-gray-400 text-sm tracking-[0.2em] font-medium uppercase">
              {t('hero.subtitle')}
            </p>
            <div className="h-[2px] bg-neon-purple w-8 opacity-50"></div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium mb-2 text-white">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 text-neon-purple" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
