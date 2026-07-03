import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

import { projectsData } from '../data/projects';

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGithubDropdown, setShowGithubDropdown] = useState(false);
  const { language, t } = useLanguage();

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const githubLinks = Array.isArray(project.links.github) 
    ? project.links.github 
    : [{ label: { en: "Source Code", id: "Kode Sumber" }, url: project.links.github }];

  return (
    <div className="min-w-[85vw] snap-center shrink-0 md:min-w-0 md:shrink h-full flex flex-col border border-neon-purple/30 rounded-2xl overflow-hidden bg-space-800/50 backdrop-blur-md group hover:border-neon-purple transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(176,38,255,0.2)] relative">
      
      {/* Image Carousel */}
      <div className="relative h-48 sm:h-56 w-full bg-space-900 border-b border-gray-800 flex items-center justify-center overflow-hidden">
        {project.images.length > 0 ? (
          <>
            {project.images.map((img, idx) => (
              <img 
                key={img} 
                src={img} 
                alt={`${project.title} screenshot ${idx + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
              />
            ))}
            
            {/* Carousel Controls */}
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage} 
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 rounded-full text-white hover:bg-neon-purple transition-colors z-20 backdrop-blur-sm"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-1.5 rounded-full text-white hover:bg-neon-purple transition-colors z-20 backdrop-blur-sm"
                  aria-label="Next Image"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Dots indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20">
                  {project.images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-neon-purple w-4' : 'bg-white/50 w-1.5'}`} 
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <span className="text-gray-500 font-medium">No Images</span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-grow flex flex-col">
          <h4 className="text-2xl font-heading font-bold mb-3 text-glow text-white">{project.title}</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.shortDescription[language]}
          </p>
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(project.techStackCard || project.techStack).map(tech => (
              <span 
                key={tech} 
                className="px-3 py-1 text-xs font-semibold rounded-full border border-neon-purple/50 text-neon-purple bg-neon-purple/5 shadow-[0_0_8px_rgba(176,38,255,0.1)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bottom Actions */}
        <div className="flex items-center gap-3 mt-auto pt-4">
          <Link 
            to={project.links.details}
            className="flex-1 text-center bg-neon-purple hover:bg-neon-purple/80 text-white py-2.5 rounded-xl font-medium transition-colors text-sm shadow-[0_0_10px_rgba(176,38,255,0.3)] hover:shadow-[0_0_20px_rgba(176,38,255,0.5)]"
          >
            {t('projects.viewDetails')}
          </Link>
          
          <div className="relative">
            <button 
              onClick={() => setShowGithubDropdown(!showGithubDropdown)}
              className="flex items-center justify-center border border-gray-600 hover:border-neon-purple text-gray-300 hover:text-neon-purple w-11 h-11 rounded-xl transition-all"
              aria-label="GitHub Repositories"
            >
              <FaGithub size={18} />
            </button>
            
            {showGithubDropdown && (
              <div className="absolute bottom-full right-0 mb-2 bg-space-800 border border-neon-purple/30 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden z-50 min-w-[150px]">
                {githubLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-neon-purple/10 transition-colors"
                    onClick={() => setShowGithubDropdown(false)}
                  >
                    {link.label[language]}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      const containerWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.firstChild?.offsetWidth + 24; // 24 is gap-6
      
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), projectsData.length - 1));
    };
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <motion.section 
      id="projects" 
      className="py-24 md:px-12 bg-space-900 border-t border-neon-purple/20 relative z-10 overflow-hidden"
      key={language}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto max-w-6xl relative z-10 px-6 md:px-0">
        
        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            className="w-full md:w-auto"
          >
            <h2 className="text-sm tracking-widest text-neon-purple font-semibold uppercase mb-4 drop-shadow-md">
              {t('projects.sectionTitle')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-glow">
              {t('projects.title')} <span className="text-white">{language === 'en' ? 'Projects' : 'Proyek'}</span>
            </h3>
            
            {/* Mobile-only text */}
            <p className="text-gray-400 text-sm mt-2 md:hidden">
              {t('projects.swipeInfo')}
            </p>
          </motion.div>
          
          <motion.a 
            href="https://github.com/naiiUnaisz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-purple mt-6 md:mt-0 flex items-center group transition-colors text-sm font-semibold tracking-wider font-sans"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <span className="hidden md:inline">{t('projects.viewAllProjects')}</span>
            <span className="md:hidden">{t('projects.github')}</span>
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Native Horizontal Scroll on Mobile, Grid on Desktop */}
        <motion.div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
             hidden: {},
             show: {
               transition: {
                 staggerChildren: 0.2
               }
             }
          }}
        >
          {projectsData.map((project, index) => (
             <motion.div
               key={project.id}
               variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
               }}
             >
                <ProjectCard project={project} />
             </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile-only dot indicators */}
        <div className="flex justify-center space-x-2 mt-4 md:hidden">
          {projectsData.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-neon-purple w-6' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
      </div>
    </motion.section>
  );
};

export default Projects;
