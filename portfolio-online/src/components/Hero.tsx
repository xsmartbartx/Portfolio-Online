import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="section relative flex flex-col justify-center">
      <div className="absolute inset-0 max-w-7xl mx-auto">
        <div className="absolute top-20 right-5 w-1/3 h-56 bg-tertiary rounded-full filter blur-[120px]" />
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg text-secondary mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white-100">Your Name</span>
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Full-Stack Developer | UI/UX Designer
          </h3>
          <p className="text-secondary max-w-md mb-8">
            I craft responsive websites and web applications that deliver exceptional user experiences.
          </p>
          
          <div className="flex gap-4 mb-8">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white-100 hover:text-secondary transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white-100 hover:text-secondary transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex justify-end"
        >
          <div className="relative w-72 h-72 rounded-full bg-tertiary/30 backdrop-blur-sm flex items-center justify-center">
            <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-tertiary to-primary">
              {/* You can add your profile image here */}
              <div className="w-full h-full bg-gradient-to-br from-black-100 to-black-200 flex items-center justify-center text-white-100">
                <span className="text-2xl">Your Photo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 