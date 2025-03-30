import { motion } from 'framer-motion';

const About = () => {
  const technologies = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", 
    "React", "Node.js", "Express", "MongoDB",
    "Tailwind CSS", "Git", "Figma", "Docker"
  ];
  
  return (
    <section id="about" className="section bg-black-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-tertiary mx-auto mb-8" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-secondary mb-4">
              I'm a passionate Full-Stack Developer with a strong foundation in modern web technologies. 
              I specialize in building robust, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-secondary mb-4">
              With over X years of experience in the industry, I've worked on various projects ranging from 
              small business websites to complex web applications. My approach combines technical expertise 
              with creative problem-solving.
            </p>
            <p className="text-secondary">
              I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              I believe in writing clean, maintainable code and creating intuitive user experiences.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-tertiary rounded-lg text-white-100 hover:shadow-card transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="mb-4">
                <h4 className="text-lg font-medium">Bachelor's in Computer Science</h4>
                <p className="text-secondary">Your University • 2018-2022</p>
              </div>
              <div>
                <h4 className="text-lg font-medium">Additional Certifications</h4>
                <p className="text-secondary">Full-Stack Web Development • Online Course</p>
                <p className="text-secondary">UI/UX Design • Design Institute</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 