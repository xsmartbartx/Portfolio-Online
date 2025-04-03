import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import Icon from './Icon';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/xsmartbartx',
      color: theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
      color: theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/yourusername',
      color: theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
    },
    { icon: FaDribbble, url: "https://dribbble.com/yourusername", label: "Dribbble" },
    { icon: FaEnvelope, url: "mailto:your.email@example.com", label: "Email" }
  ];
  
  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" }
  ];
  
  return (
    <footer className="relative pt-20 overflow-hidden theme-transition">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold gradient-text"
            >
              MiejskiSurfer
            </motion.h2>
            <p className="text-secondary">
              Full-Stack Developer <span className="inline-block mx-2 w-1 h-1 rounded-full bg-accent"></span> UI/UX Designer
            </p>
            <p className="text-secondary text-sm max-w-xs">
              Creating exceptional digital experiences through innovative code and thoughtful design.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={link.color}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon icon={link.icon} size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.url}
                    className="text-secondary hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span> {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4"
            >
              Get in Touch
            </motion.h3>
            <p className="text-secondary mb-4">
              Have a project in mind or want to discuss opportunities?
            </p>
            <motion.a 
              href="#contact" 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="btn-primary inline-block"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-white-100/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-secondary text-sm">
                &copy; {currentYear} <span className="text-accent">MiejskiSurfer</span>. All Rights Reserved.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-secondary text-sm flex items-center justify-center">
                Crafted with <Icon icon={FaHeart} size={14} className="text-accent mx-1" /> and modern tech
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white-100/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary text-sm">
              © {new Date().getFullYear()} MiejskiSurfer. All rights reserved.
            </p>
            <p className="text-secondary text-sm flex items-center">
              <span>Currently using {theme === 'dark' ? 'dark' : 'light'} theme</span>
              <span className={`ml-2 w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-white-100' : 'bg-tertiary'}`}></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 