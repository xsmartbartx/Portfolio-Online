import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: FaLaptopCode,
      title: t('about.skills.frontend'),
      description: 'React, TypeScript, Next.js, Tailwind CSS'
    },
    {
      icon: FaServer,
      title: t('about.skills.backend'),
      description: 'Node.js, Express, MongoDB, PostgreSQL'
    },
    {
      icon: FaPaintBrush,
      title: t('about.skills.design'),
      description: 'Figma, Adobe XD, Responsive Design'
    },
    {
      icon: FaMobileAlt,
      title: t('about.skills.mobile'),
      description: 'React Native, Progressive Web Apps'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t('about.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center max-w-3xl mx-auto mb-16"
        >
          {t('about.description')}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              className="glass-card p-6 text-center"
            >
              <Icon icon={skill.icon} size={40} className="text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-secondary">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 