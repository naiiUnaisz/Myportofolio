import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const ContactItem = ({ icon: Icon, title, value, href }) => {
  const content = (
    <>
      <div className="bg-space-800 p-4 rounded-full border border-gray-700 group-hover:border-neon-purple transition-colors shrink-0">
        <Icon className="text-neon-purple w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-400 text-sm tracking-wide mb-1 uppercase font-semibold">{title}</p>
        <p className="text-white font-medium text-base whitespace-normal break-words">{value}</p>
      </div>
    </>
  );

  const containerClasses = "flex items-start space-x-4 glass p-6 rounded-2xl glow-purple-hover w-full group transition-all duration-300 hover:shadow-[0_0_20px_rgba(176,38,255,0.2)]";

  if (href) {
    return (
      <motion.a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClasses + " cursor-pointer"}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div 
      className={containerClasses}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {content}
    </motion.div>
  );
};

const Contact = () => {
  const { language, t } = useLanguage();

  return (
    <motion.section 
      id="contact" 
      className="py-24 px-6 md:px-12 bg-space-900 border-t border-neon-purple/20 relative z-10"
      key={language}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto max-w-4xl text-left">
        
        {/* Top: Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start"
        >
          <h2 className="text-sm tracking-widest text-neon-purple font-semibold uppercase mb-4">
            {t('contact.sectionTitle')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow">
            {t('contact.title')}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            {t('contact.description')}
          </p>
        </motion.div>

        {/* Middle: 2x2 Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <ContactItem 
              icon={MapPin} 
              title={t('contact.location')} 
              value="Cileungsi, West Java, Indonesia." 
            />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <ContactItem 
              icon={Mail} 
              title={t('contact.email')} 
              value="unaiiunais207@gmail.com" 
              href="mailto:unaiiunais207@gmail.com" 
            />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <ContactItem 
              icon={Phone} 
              title={t('contact.whatsapp')} 
              value="+62 878-3706-4731" 
              href="https://wa.me/6287837064731" 
            />
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <ContactItem 
              icon={Clock} 
              title={t('contact.availability')} 
              value={t('contact.availabilityValue')} 
            />
          </motion.div>
        </motion.div>
        
        {/* Bottom: Social Media */}
        <motion.div 
          className="flex flex-col items-start border-t border-gray-800 pt-10 mt-10 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300 font-medium mb-6 tracking-wide text-lg">{t('contact.connectWithMe')}</p>
          <div className="flex justify-start space-x-6">
            <a 
              href="https://github.com/naiiUnaisz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 rounded-full border border-neon-purple/50 flex items-center justify-center text-gray-300 hover:text-white hover:border-neon-purple hover:bg-neon-purple/20 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(176,38,255,0.1)] hover:shadow-[0_0_20px_rgba(176,38,255,0.3)]"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/unaisahhadi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 rounded-full border border-neon-purple/50 flex items-center justify-center text-gray-300 hover:text-white hover:border-neon-purple hover:bg-neon-purple/20 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(176,38,255,0.1)] hover:shadow-[0_0_20px_rgba(176,38,255,0.3)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:unaiiunais207@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 rounded-full border border-neon-purple/50 flex items-center justify-center text-gray-300 hover:text-white hover:border-neon-purple hover:bg-neon-purple/20 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(176,38,255,0.1)] hover:shadow-[0_0_20px_rgba(176,38,255,0.3)]"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.instagram.com/unaiunaish_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 rounded-full border border-neon-purple/50 flex items-center justify-center text-gray-300 hover:text-white hover:border-neon-purple hover:bg-neon-purple/20 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_10px_rgba(176,38,255,0.1)] hover:shadow-[0_0_20px_rgba(176,38,255,0.3)]"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </motion.div>

      </div>
      
      {/* Footer minimal */}
      <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm space-y-2">
        <p>{t('footer.copyright')}</p>
        <p>{t('footer.builtWith')}</p>
      </div>
    </motion.section>
  );
};

// Helper untuk Instagram Icon dengan warna asli atau kustom
const InstagramIcon = () => <FaInstagram size={24} />;

export default Contact;
