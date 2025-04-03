import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce website with shopping cart functionality, user authentication, and secure payment integration. Optimized for performance and SEO.",
      image: "https://via.placeholder.com/800x450?text=E-commerce+Project",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      githubLink: "https://github.com/yourusername/ecommerce-project",
      demoLink: "https://ecommerce-demo.yourdomain.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity tool that helps users organize tasks with drag-and-drop functionality, prioritization, and deadline tracking. Features real-time updates and collaboration.",
      image: "https://via.placeholder.com/800x450?text=Task+Management+App",
      tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/task-manager",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations and a clean design optimized for all devices.",
      image: "https://via.placeholder.com/800x450?text=Portfolio+Website",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio",
      demoLink: "https://yourdomain.com"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with beautiful visualizations and 7-day forecasts. Uses geolocation and provides detailed weather metrics.",
      image: "https://via.placeholder.com/800x450?text=Weather+Dashboard",
      tags: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      githubLink: "https://github.com/yourusername/weather-app",
      demoLink: "https://weather-app.yourdomain.com"
    },
  ];

  const filters = ['all', 'React', 'TypeScript', 'Node.js', 'API Integration'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="section relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black-100 to-transparent opacity-40"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm text-accent bg-tertiary bg-opacity-30 border border-accent border-opacity-20">
            {t('projects.title')}
          </span>
          <h2 className="section-heading mb-6">
            Featured <span className="gradient-text">{t('projects.featuredProjects')}</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>
        
        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                activeFilter === filter
                  ? 'bg-accent text-white-100 shadow-glow'
                  : 'bg-tertiary bg-opacity-30 text-secondary hover:bg-opacity-50'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects - Larger cards for the first two projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {filteredProjects
            .filter(project => project.featured)
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: project.id * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black-100 to-transparent z-10 opacity-60"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-accent bg-opacity-90 rounded-full text-xs font-medium">
                    Featured
                  </div>
                </div>
                
                <div className="p-8 relative">
                  <h3 className="text-2xl font-bold mb-3 text-white-100">{project.title}</h3>
                  <p className="text-secondary mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-3 py-1 bg-tertiary bg-opacity-60 rounded-full text-white-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-6">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                      title="View Code"
                    >
                      <Icon icon={FaGithub} size={18} />
                      <span>Source Code</span>
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                        title="Live Demo"
                      >
                        <Icon icon={FaExternalLinkAlt} size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Regular Projects - Grid layout for the rest */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects
            .filter(project => !project.featured)
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden hover:shadow-card group"
              >
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-100 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white-100 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-0.5 bg-tertiary bg-opacity-60 rounded-full text-white-100"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-0.5 bg-tertiary bg-opacity-60 rounded-full text-white-100">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white-100 hover:text-accent transition-colors"
                        title="View Code"
                      >
                        <Icon icon={FaGithub} size={18} />
                      </a>
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white-100 hover:text-accent transition-colors"
                          title="Live Demo"
                        >
                          <Icon icon={FaExternalLinkAlt} size={16} />
                        </a>
                      )}
                    </div>
                    <a 
                      href={project.demoLink || project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-accent transition-colors flex items-center gap-1 text-sm"
                    >
                      {t('projects.viewProject')} <Icon icon={FaArrowRight} size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        
        {/* More projects button */}
        <div className="flex justify-center mt-16">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 justify-center mx-auto px-8 py-4 mt-16"
          >
            <span>{t('projects.viewAllProjects')}</span>
            <Icon icon={FaGithub} size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 