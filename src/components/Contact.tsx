import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Icon from './Icon';
import { useLanguage } from '../context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Replace these values with your EmailJS service details
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          to_name: 'Your Name',
          from_email: formData.email,
          to_email: 'your.email@example.com',
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-black-100 to-transparent opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent-alt opacity-5 blur-[100px]"></div>
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
            {t('contact.title')}
          </span>
          <h2 className="section-heading mb-6">
            {t('contact.subtitle')}
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="glass-card p-8 border border-white-100 border-opacity-10">
              <h3 className="text-2xl font-semibold mb-8 gradient-text">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-accent">
                    <Icon icon={FaEnvelope} size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-secondary hover:text-accent transition-colors animated-underline inline-block"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-accent">
                    <Icon icon={FaMapMarkerAlt} size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-secondary">Available for remote work globally</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4">Connect with Me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:text-accent hover:bg-tertiary/50 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Icon icon={FaGithub} size={22} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:text-accent hover:bg-tertiary/50 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Icon icon={FaLinkedin} size={22} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-tertiary/40 rounded-lg border border-white-100/5">
                <h4 className="text-lg font-medium mb-2 flex items-center">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                  Project Inquiry
                </h4>
                <p className="text-secondary text-sm">
                  Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 border border-white-100 border-opacity-10">
              <h3 className="text-2xl font-semibold mb-8 gradient-text">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white-100 mb-2 text-sm">
                    {t('contact.name')} <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-tertiary/50 text-white-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border border-white-100/10"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white-100 mb-2 text-sm">
                    {t('contact.email')} <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-tertiary/50 text-white-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border border-white-100/10"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-white-100 mb-2 text-sm">
                  {t('contact.message')} <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-tertiary/50 text-white-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent border border-white-100/10 resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full mt-6 px-6 py-4 bg-accent text-white-100 rounded-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <span>{t('contact.sending')}</span>
                ) : (
                  <>
                    <span>{t('contact.send')}</span>
                    <Icon icon={FaPaperPlane} size={14} />
                  </>
                )}
              </motion.button>
              
              {success && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-400 text-sm bg-green-400/10 p-3 rounded border border-green-400/20"
                >
                  {t('contact.success')}
                </motion.p>
              )}
              
              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-400 text-sm bg-red-400/10 p-3 rounded border border-red-400/20"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;