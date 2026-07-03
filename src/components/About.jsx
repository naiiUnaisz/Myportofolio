import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, MapPin, Briefcase, Target, Code, BookOpen, Database, Globe, MessageSquare, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skillCategories = {
  en: [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript (Basic)", "PHP", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["Laravel", "Bootstrap", "Tailwind CSS", "Flutter (Basic)"]
    },
    {
      title: "Database",
      skills: ["MySQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      title: "Soft Skills",
      skills: [ "Continuous Learning", "Communication", "Teamwork", "Adaptability", "Attention to Detail"]
    }
  ],
  id: [
    {
      title: "Bahasa",
      skills: ["HTML", "CSS", "JavaScript (Dasar)", "PHP", "SQL"]
    },
    {
      title: "Kerangka Kerja",
      skills: ["Laravel", "Bootstrap", "Tailwind CSS", "Flutter (Dasar)"]
    },
    {
      title: "Database",
      skills: ["MySQL"]
    },
    {
      title: "Alat",
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      title: "Keterampilan Lunak",
      skills: ["Semangat Belajar", "Komunikasi", "Kerja Sama Tim", "Kemampuan Beradaptasi", "Teliti Terhadap Detail"]
    }
  ]
};

const quickInfo = {
  en: [
    { icon: GraduationCap, title: "Education", value: "Active Software Engineering Technology Student", subValue: "IDN Polytechnic Bogor" },
    { icon: MapPin, title: "Location", value: "Bogor, Indonesia" },
    { icon: Briefcase, title: "Looking For", value: "Software Engineering Internship" },
    { icon: Target, title: "Career Goal", value: "Backend Software Engineer, (Web Development)" }
  ],
  id: [
    { icon: GraduationCap, title: "Pendidikan", value: "Mahasiswa Teknologi Rekayasa Perangkat Lunak Aktif", subValue: "Politeknik IDN Bogor" },
    { icon: MapPin, title: "Lokasi", value: "Bogor, Indonesia" },
    { icon: Briefcase, title: "Dicari", value: "Magang Rekayasa Perangkat Lunak" },
    { icon: Target, title: "Tujuan Karir", value: "Backend Software Engineer, (Web Development)" }
  ]
};

const currentlyLearning = {
  en: [
    { icon: Code, text: "JavaScript DOM" },
    { icon: Globe, text: "Laravel" },
    { icon: Database, text: "Database Design" },
    { icon: MessageSquare, text: "English Communication" },
    { icon: BookOpen, text: "Git & GitHub" }
  ],
  id: [
    { icon: Code, text: "JavaScript DOM" },
    { icon: Globe, text: "Laravel" },
    { icon: Database, text: "Desain Database" },
    { icon: MessageSquare, text: "Komunikasi Bahasa Inggris" },
    { icon: BookOpen, text: "Git & GitHub" }
  ]
};

const SkillBadge = ({ skill }) => (
  <span className="px-5 py-2 border border-neon-purple/30 bg-space-800/40 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-neon-purple hover:bg-neon-purple/20 transition-all cursor-default glow-purple-hover">
    {skill}
  </span>
);

const QuickInfoCard = ({ icon: Icon, title, value, subValue }) => (
  <motion.div 
    whileHover={{ y: -3 }}
    className="p-5 bg-space-800/60 border border-neon-purple/20 rounded-xl hover:border-neon-purple/40 transition-all"
  >
    <Icon className="text-2xl mb-2 text-neon-purple" />
    <h4 className="text-sm font-bold tracking-widest uppercase text-neon-purple mb-2">{title}</h4>
    <p className="text-white font-medium">{value}</p>
    {subValue && <p className="text-gray-400 text-sm mt-1">{subValue}</p>}
  </motion.div>
);

const LearningItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-3">
    <Icon className="text-neon-purple flex-shrink-0" size={20} />
    <span className="text-gray-300">{text}</span>
  </div>
);

const About = () => {
  const { language, t } = useLanguage();

  const aboutDescription = {
    en: [
      "Hi, I'm Unaisah!",
      "I am an active Software Engineering Technology student at IDN Polytechnic Bogor with a strong passion for web development.",
      "I enjoy learning by building real-world projects that help me strengthen both my technical and problem-solving skills. My current learning journey focuses on HTML, CSS, JavaScript, Laravel, MySQL, and Flutter, while continuously strengthening my understanding of backend development with Laravel and MySQL.",
      "At the moment, I am preparing for my software engineering internship and actively building personal projects to gain practical experience. My long-term goal is to become a backend software engineer and contribute to products that create real value for users."
    ],
    id: [
      "Halo, saya Unaisah!",
      "Saya adalah mahasiswa Teknologi Rekayasa Perangkat Lunak aktif di Politeknik IDN Bogor dengan passion yang kuat dalam pengembangan web.",
      "Saya suka belajar dengan membangun proyek dunia nyata yang membantu saya memperkuat keterampilan teknis dan pemecahan masalah. Perjalanan belajar saya saat ini fokus pada HTML, CSS, JavaScript, Laravel, MySQL, dan Flutter, sambil terus memperkuat pemahaman saya tentang pengembangan backend dengan Laravel dan MySQL.",
      "Saat ini, saya sedang mempersiapkan magang rekayasa perangkat lunak dan aktif membangun proyek pribadi untuk mendapatkan pengalaman praktis. Tujuan jangka panjang saya adalah menjadi backend software engineer dan berkontribusi pada produk yang menciptakan nilai nyata bagi pengguna."
    ]
  };

  return (
    <motion.section 
      id="about" 
      className="py-24 px-6 md:px-12 bg-space-900 border-t border-neon-purple/20 relative z-10"
      key={language}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Baris Pertama: About Me + Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          {/* Kolom Kiri: About Me */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-sm tracking-widest text-neon-purple font-semibold uppercase mb-4">
              {t('about.sectionTitle')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-glow">
              {t('about.title')} <span className="text-white">{language === 'en' ? 'Me' : 'Saya'}</span>
            </h3>
            
            <div className="prose prose-invert max-w-none">
              {aboutDescription[language].map((para, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed mb-4 font-sans">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-col items-start mt-8">
              <a 
                href={language === 'en' ? '/Cv-Unaisah(inggris).pdf' : '/Cv-Unaisah(indo).pdf'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-4 h-14 rounded-xl font-semibold transition-all text-base shadow-[0_0_10px_rgba(176,38,255,0.3)] hover:shadow-[0_0_20px_rgba(176,38,255,0.5)]"
              >
                <Download size={24} />
                {t('about.downloadCV')}
              </a>
              <p className="mt-2 text-xs text-gray-400 italic">
                {t('about.downloadCVHelper')}
              </p>
            </div>
          </motion.div>

          {/* Kolom Kanan: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            {skillCategories[language].map((category, index) => (
              <div key={index}>
                <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => <SkillBadge key={skill} skill={skill} />)}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Baris Kedua: Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-16"
        >
          <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">{t('about.quickInfo')}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickInfo[language].map((info, index) => (
              <QuickInfoCard key={index} {...info} />
            ))}
          </div>
        </motion.div>

        {/* Baris Ketiga: Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="p-6 md:p-8 bg-space-800/60 border border-neon-purple/20 rounded-xl">
            <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-6">{t('about.currentlyLearning')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {currentlyLearning[language].map((item, index) => (
                <LearningItem key={index} {...item} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
