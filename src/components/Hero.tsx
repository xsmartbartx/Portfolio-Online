import React from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.getAttribute('data-speed') || '0');
        const xOffset = x * speed * 50;
        const yOffset = y * speed * 50;
        htmlEl.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const text = title.textContent || '';
    title.textContent = '';
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    typeWriter();
  }, [t('hero.name')]);

  return (
    <section id="home" ref={heroRef} className="section overflow-hidden flex flex-col justify-center items-center pt-28 md:pt-32 theme-transition">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent opacity-5 rounded-full filter blur-[80px] parallax" data-speed="0.5"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-accent-alt opacity-5 rounded-full filter blur-[80px] parallax" data-speed="-0.3"></div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent border-opacity-30 text-sm text-secondary backdrop-blur-sm bg-tertiary bg-opacity-20 shadow-glow theme-transition"
          >
            <span className="text-accent">Available</span> for freelance projects
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl text-accent mb-4"
          >
            {t('hero.greeting')}
          </motion.h2>
          
          <motion.h1
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            {t('hero.name')}
          </motion.h1>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-secondary mb-8"
          >
            {t('hero.role')}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-grey-100 mb-12 max-w-2xl mx-auto"
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 mb-8 justify-center md:justify-start"
          >
            <a 
              href="https://github.com/xsmartbartx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white-100 border-opacity-20 text-white-100 hover:text-accent hover:border-accent transition-all duration-300 theme-transition"
              aria-label="GitHub"
            >
              <Icon icon={FaGithub} size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white-100 border-opacity-20 text-white-100 hover:text-accent hover:border-accent transition-all duration-300 theme-transition"
              aria-label="LinkedIn"
            >
              <Icon icon={FaLinkedin} size={22} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="btn-primary px-8 py-4"
            >
              {t('hero.cta')}
            </motion.a>
            <a href="#contact" className="btn-secondary px-8 py-4">
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="hidden md:flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-accent to-accent-alt opacity-10 blur-md animate-pulse"></div>
            <div className="w-80 h-80 relative overflow-hidden rounded-full border-2 border-white-100 border-opacity-10 shadow-lg">
              <div className="w-full h-full relative">
                {/* Profile image placeholder with better styling */}
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center text-white-100 overflow-hidden">
                  {/* You can replace this with an actual image */}
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-tertiary opacity-50"></div>
                    <span className="text-2xl font-medium relative z-10">Your Photo</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-accent parallax" data-speed="0.8"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 rounded-full bg-accent-alt parallax" data-speed="-0.6"></div>
            <div className="absolute top-10 -left-8 w-6 h-6 rounded-full border-2 border-accent border-opacity-40 parallax" data-speed="0.4"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-secondary text-sm mb-2">Scroll Down</span>
        <Icon icon={FaArrowDown} className="text-accent animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero; 