import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Icon from './Icon';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', title: t('nav.home') },
    { id: 'about', title: t('nav.about') },
    { id: 'projects', title: t('nav.projects') },
    { id: 'contact', title: t('nav.contact') },
  ];

  return (
    <nav 
      className={`w-full px-6 py-5 fixed top-0 z-30 transition-all duration-300 theme-transition ${
        scrolled 
          ? 'bg-primary bg-opacity-80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-bold"
          >
            <span className="gradient-text">Portfolio</span>
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="hidden md:flex items-center gap-12"
        >
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a
                href={`#${link.id}`}
                className="text-secondary hover:text-white-100 animated-underline py-2 font-medium"
              >
                {link.title}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
          >
            <LanguageSwitcher />
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: (navLinks.length + 1) * 0.1 }}
          >
            <a
              href="#contact"
              className="btn-primary"
            >
              {t('nav.getInTouch')}
            </a>
          </motion.li>
        </motion.ul>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex z-20">
          <button
            type="button"
            className="flex items-center justify-center text-white-100 transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <Icon icon={FaTimes} size={24} className="text-white-100" />
            ) : (
              <Icon icon={FaBars} size={24} className={`${scrolled ? 'text-white-100' : 'text-accent'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 w-full max-w-sm h-screen glass-card border-l border-white-100 border-opacity-10 shadow-xl z-10 theme-transition"
            >
              <div className="flex flex-col h-full p-10">
                <div className="flex justify-end mb-10">
                  <button 
                    onClick={toggleMenu}
                    className="text-white-100 hover:text-accent"
                    aria-label="Close menu"
                  >
                    <Icon icon={FaTimes} size={24} />
                  </button>
                </div>
                <ul className="flex flex-col gap-8">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <a
                        href={`#${link.id}`}
                        className="text-white-100 text-2xl font-medium hover:text-accent transition-colors block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
                  >
                    <LanguageSwitcher />
                  </motion.li>
                </ul>
                <div className="mt-auto">
                  <a 
                    href="#contact" 
                    className="btn-primary w-full text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.getInTouch')}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 