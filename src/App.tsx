import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './context/LanguageContext';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
          <div className="flex items-center gap-4">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.home')}</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.about')}</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.projects')}</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">{t('nav.contact')}</a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center bg-grid-pattern">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('hero.greeting')}</h2>
            <h3 className="text-3xl text-gray-700 dark:text-gray-300 mb-4">{t('hero.role')}</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400">{t('hero.description')}</p>
          </div>
        </section>

        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('about.title')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">{t('about.description')}</p>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('projects.title')}</h2>
            {/* Add your projects here */}
          </div>
        </section>

        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('contact.title')}</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">{t('contact.name')}</label>
                <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">{t('contact.email')}</label>
                <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">{t('contact.message')}</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                {t('contact.send')}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  // Initialize theme on app load
  useTheme();

  return (
    <LanguageProvider>
      <Router>
        <div className="relative z-0 theme-transition">
          <Navbar />
          <ThemeToggle />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
