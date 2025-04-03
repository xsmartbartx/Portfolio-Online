import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';
import Icon from './Icon';

interface SkillCategory {
  icon: IconType;
  title: string;
  skills: string[];
}

const About = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: FaLaptopCode,
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      icon: FaServer,
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API"]
    },
    {
      icon: FaPaintBrush,
      title: "Design",
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Wireframing"]
    },
    {
      icon: FaMobileAlt,
      title: "Other",
      skills: ["Git", "Docker", "CI/CD", "Testing", "Performance Optimization"]
    }
  ];
  
  return (
    <section id="about" className="section relative">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-accent opacity-5 blur-[100px]"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-accent-alt opacity-5 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm text-accent bg-tertiary bg-opacity-30 border border-accent border-opacity-20">About Me</span>
          <h2 className="section-heading mb-6">
            My <span className="gradient-text">Journey</span> So Far
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Passionate about creating intuitive, beautiful digital experiences that solve real problems.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden glass-card p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                {/* Replace this with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center">
                  <span className="text-white-100 text-xl">About Image</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-l-2 border-b-2 border-accent"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 border-t-2 border-r-2 border-accent-alt"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <div className="w-10 h-1 bg-accent mr-4"></div>
              My Background
            </h3>
            <div className="space-y-6 accent-border">
              <p className="text-secondary">
                I'm a passionate <span className="text-white-100">Full-Stack Developer</span> with a strong foundation in modern web technologies. With a keen eye for design and robust technical skills, I specialize in building immersive digital experiences.
              </p>
              <p className="text-secondary">
                With over <span className="text-white-100">X years</span> of experience in the industry, I've had the privilege of working on diverse projects ranging from interactive web applications to enterprise solutions, always focusing on scalable architecture and intuitive interfaces.
              </p>
              <p className="text-secondary">
                I'm committed to continuous learning, staying at the forefront of emerging technologies and best practices to deliver cutting-edge solutions that exceed expectations.
              </p>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className="w-10 h-1 bg-accent mr-4"></div>
                Education
              </h3>
              <div className="space-y-6">
                <div className="glass-card p-6 transition-all duration-300 hover:shadow-glow">
                  <h4 className="text-xl font-medium gradient-text">Bachelor's in Computer Science</h4>
                  <p className="text-secondary mt-2">Your University • 2018-2022</p>
                </div>
                <div className="glass-card p-6 transition-all duration-300 hover:shadow-glow-purple">
                  <h4 className="text-xl font-medium gradient-text">Advanced Web Development</h4>
                  <p className="text-secondary mt-2">Online Course • 2023</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-12 text-center">
            <span className="gradient-text">Skills</span> & Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300">
                    <Icon icon={category.icon} size={24} className="text-accent" />
                  </div>
                  <h4 className="text-xl font-semibold ml-4">{category.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-tertiary rounded-full text-secondary text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 