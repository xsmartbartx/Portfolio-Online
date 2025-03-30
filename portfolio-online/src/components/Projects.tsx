import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce website with shopping cart functionality, user authentication, and payment integration.",
      image: "https://via.placeholder.com/500x300?text=E-commerce+Project",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      githubLink: "https://github.com/yourusername/ecommerce-project",
      demoLink: "https://ecommerce-demo.yourdomain.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity tool that helps users organize tasks with drag-and-drop functionality, prioritization, and deadline tracking.",
      image: "https://via.placeholder.com/500x300?text=Task+Management+App",
      tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/task-manager"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations and a clean design.",
      image: "https://via.placeholder.com/500x300?text=Portfolio+Website",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio",
      demoLink: "https://yourdomain.com"
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">My Projects</h2>
          <div className="w-20 h-1 bg-tertiary mx-auto mb-8" />
          <p className="text-secondary max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was built with a focus on user experience, performance, and clean code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-black-100 rounded-full text-white-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white-100 hover:text-secondary transition-colors"
                    title="View Code"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white-100 hover:text-secondary transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 