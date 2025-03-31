import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  // Initialize theme on app load
  useTheme();

  return (
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
  );
}

export default App;
