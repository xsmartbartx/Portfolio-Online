import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'projects', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <nav className="w-full px-6 py-5 fixed top-0 z-20 bg-primary bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-xl md:text-2xl font-bold text-white-100">
            Portfolio
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-secondary hover:text-white-100 transition-colors duration-200"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex">
          <button
            type="button"
            className="flex items-center justify-center text-secondary"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="fixed top-20 right-0 w-full max-w-[300px] p-6 min-h-[calc(100vh-5rem)] bg-tertiary rounded-l-xl shadow-xl"
            >
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-secondary hover:text-white-100 transition-colors duration-200 text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 