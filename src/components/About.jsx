import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const techSkills = [
  "HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL", "Bootstrap", "Tailwind", "Flutter"
];
const toolSkills = ["Git", "GitHub", "VS Code"];
const designSkills = ["Canva", "PicsArt"];
const softSkills = ["Problem Solving", "Continuous Learning", "Teamwork", "Adaptability"];

const SkillBadge = ({ skill }) => (
  <span className="px-5 py-2 border border-neon-purple/30 bg-space-800/40 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-neon-purple hover:bg-neon-purple/20 transition-all cursor-default glow-purple-hover">
    {skill}
  </span>
);

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-24 px-6 md:px-12 bg-space-900/50 backdrop-blur-md border-y border-neon-purple/20 overflow-hidden relative z-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-24 items-start">
          
          {/* Left Column: About Text & CV Button */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm tracking-widest text-neon-purple font-semibold uppercase mb-4">
              Get To Know Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-glow">
              About <span className="text-white">Me</span>
            </h3>
            
            <div className="prose prose-invert max-w-none mb-10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-sans">
                Hi! My name is Unaisah. I am a student currently learning and growing in the field of web development. I enjoy building web applications that are simple, clean, and easy to use.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-sans">
                I have learned the basics of HTML, CSS, and JavaScript, and I am currently exploring backend development using PHP with Laravel, as well as Flutter.
              </p>
              <p className="text-white font-medium text-lg md:text-xl leading-relaxed bg-gradient-to-r from-neon-purple to-[#ff6bdf] bg-clip-text text-transparent italic">
                "While my studies focus on fullstack development, I find myself more interested in the backend side. I am continuously learning and working on small projects to grow as a developer who can create meaningful, functional applications."
              </p>
            </div>

            <a 
              href="/cv_unaisah.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-neon-purple border border-neon-purple text-white font-semibold px-8 py-4 rounded-full hover:bg-transparent glow-purple-hover transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>

          {/* Right Column: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6 drop-shadow-md">Tech Skills</h4>
              <div className="flex flex-wrap gap-3">
                {techSkills.map(skill => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6 drop-shadow-md">Tools</h4>
              <div className="flex flex-wrap gap-3">
                {toolSkills.map(skill => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>

             <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6 drop-shadow-md">Design</h4>
              <div className="flex flex-wrap gap-3">
                {designSkills.map(skill => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6 drop-shadow-md">Soft Skills</h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map(skill => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default About;
