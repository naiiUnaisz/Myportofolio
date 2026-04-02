import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

import { projectsData } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectData = projectsData.find(project => project.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!projectData) {
    return (
      <div className="min-h-screen bg-space-900 flex flex-col items-center justify-center text-white font-sans">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-neon-purple hover:underline">Return to Home</Link>
      </div>
    );
  }

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectData.images.length) % projectData.images.length);
  };

  return (
    <div className="min-h-screen bg-space-900 text-white font-sans py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-neon-purple transition-colors font-medium">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-glow">{projectData.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            {projectData.shortDescription}
          </p>
        </motion.div>

        {/* Large Image Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-3xl overflow-hidden bg-space-800 border-2 border-neon-purple/20 shadow-[0_0_30px_rgba(176,38,255,0.15)] mb-16 group"
        >
          {projectData.images.map((img, idx) => (
             <img 
               key={img} 
               src={img} 
               alt={`${projectData.title} screenshot ${idx + 1}`} 
               className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} 
             />
          ))}

          {/* Carousel Controls */}
          {projectData.images.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-neon-purple transition-colors z-20 backdrop-blur-md opacity-0 group-hover:opacity-100 duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-neon-purple transition-colors z-20 backdrop-blur-md opacity-0 group-hover:opacity-100 duration-300"
              >
                <ChevronRight size={24} />
              </button>
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
                {projectData.images.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-neon-purple w-6' : 'bg-white/50 w-2 hover:bg-white'}`} 
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Main Description */}
          <motion.div 
            className="md:col-span-2 prose prose-invert max-w-none"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-6 text-white border-b border-gray-800 pb-4">
              Project Overview
            </h3>
            
            <div className="text-gray-300 space-y-4 leading-relaxed font-sans whitespace-pre-wrap mb-8">
              {projectData.fullDescription}
            </div>

            {projectData.features && projectData.features.length > 0 && (
              <>
                <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-4 mt-8">KEY FEATURES</h3>
                <ul className="space-y-3">
                  {projectData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-purple-500 text-sm mt-1">▶</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>

          {/* Sidebar (Tech Stack & Links) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-10"
          >
            {/* Tech Stack */}
            <div className="glass p-8 rounded-3xl border border-neon-purple/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 blur-3xl rounded-full" />
              
              <h4 className="text-lg font-heading font-bold mb-6 text-white">Technologies Used</h4>
              <div className="flex flex-wrap gap-3 relative z-10">
                {projectData.techStack.map(tech => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 font-medium rounded-full border border border-neon-purple text-white shadow-[0_0_10px_rgba(176,38,255,0.2)] hover:bg-neon-purple hover:shadow-[0_0_20px_rgba(176,38,255,0.5)] transition-all cursor-default text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Actions */}
            <div className="glass p-8 rounded-3xl border border-neon-purple/20">
              <h4 className="text-lg font-heading font-bold mb-6 text-white">Resources</h4>
              
              <a 
                href={projectData.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-space-800 hover:bg-space-700 p-4 rounded-2xl border border-gray-700 hover:border-gray-500 transition-colors group"
              >
                <div className="flex items-center space-x-3 text-gray-300 group-hover:text-white transition-colors">
                  <FaGithub size={24} />
                  <span className="font-medium">Source Code</span>
                </div>
                <div className="bg-gray-800 p-2 rounded-xl group-hover:bg-gray-700 group-hover:text-neon-purple transition-colors">
                  <ArrowLeft className="w-4 h-4 rotate-135" style={{ transform: 'rotate(135deg)' }} />
                </div>
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
