import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  // Cast the icon component to the correct type
  const GlobeIcon = FaGlobe as IconType;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <GlobeIcon size={20} className="text-lg" />
      <span className="font-medium">{language.toUpperCase()}</span>
    </motion.button>
  );
};

export default LanguageSwitcher; 