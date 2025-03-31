import { useState, useEffect } from 'react';
import { themeToggle } from '../utils/themeToggle';

type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(themeToggle.getTheme());
  
  useEffect(() => {
    // Initialize theme on component mount
    themeToggle.initTheme();
    setTheme(themeToggle.getTheme());
    
    // Create a function to handle theme changes
    const handleThemeChange = () => {
      setTheme(themeToggle.getTheme());
    };
    
    // Add event listener for custom theme change events
    window.addEventListener('themeChange', handleThemeChange);
    
    return () => {
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, []);
  
  const toggleTheme = () => {
    themeToggle.toggleTheme();
    setTheme(themeToggle.getTheme());
    // Dispatch a custom event so other components can react to theme changes
    window.dispatchEvent(new Event('themeChange'));
  };
  
  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
} 