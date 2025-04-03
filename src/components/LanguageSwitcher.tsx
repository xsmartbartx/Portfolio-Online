import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';
import Icon from './Icon';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pl' : 'en';
    setLanguage(newLanguage);
    
    // Update document language
    document.documentElement.lang = newLanguage;
    
    // Update meta language tag
    const metaLang = document.querySelector('meta[http-equiv="Content-Language"]');
    if (metaLang) {
      metaLang.setAttribute('content', newLanguage);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.setAttribute('http-equiv', 'Content-Language');
      newMeta.setAttribute('content', newLanguage);
      document.head.appendChild(newMeta);
    }

    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={language === 'en' ? 'Switch to Polish' : 'Przełącz na angielski'}
    >
      <Icon icon={FaGlobe} size={20} className="text-lg" aria-hidden="true" />
      <span className="font-medium">{language.toUpperCase()}</span>
    </motion.button>
  );
};

export default LanguageSwitcher; 