import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-secondary hover:text-white-100 transition-colors"
      aria-label={`Switch to ${language === 'en' ? 'Polish' : 'English'}`}
    >
      <Icon icon={FaGlobe} size={20} className="text-lg" aria-hidden="true" />
      <span className="font-medium">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher; 