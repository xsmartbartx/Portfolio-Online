import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import Icon from './Icon';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-tertiary/30 backdrop-blur-sm fixed top-24 right-6 z-50 border border-white-100/10 theme-transition glass-card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-6 h-6"
      >
        {isDark ? (
          <Icon 
            icon={FaSun} 
            size={22} 
            className="text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
          />
        ) : (
          <Icon 
            icon={FaMoon} 
            size={22} 
            className="text-accent-alt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
          />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 