import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
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
    <section id="contact" className="section bg-black-200">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Contact Me</h2>
          <div className="w-20 h-1 bg-tertiary mx-auto mb-8" />
          <p className="text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="flex items-start gap-4 mb-6">
              <FaEnvelope className="text-tertiary mt-1" size={22} />
              <div>
                <h4 className="text-lg font-medium">Email</h4>
                <a href="mailto:your.email@example.com" className="text-secondary hover:text-white-100 transition-colors">
                  your.email@example.com
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-6">Connect with Me</h3>
            <div className="flex gap-6">
              <a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary hover:text-white-100 transition-colors"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary hover:text-white-100 transition-colors"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-tertiary p-8 rounded-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white-100 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-100 text-white-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-white-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-100 text-white-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black-100 text-white-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-tertiary resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex justify-center items-center"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {success && (
                <p className="mt-4 text-green-400 text-sm">
                  Your message has been sent successfully. I'll get back to you soon!
                </p>
              )}
              
              {error && (
                <p className="mt-4 text-red-400 text-sm">{error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 