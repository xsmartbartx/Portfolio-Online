type Theme = 'light' | 'dark';

/**
 * Theme toggle utility for light/dark mode functionality
 */
export const themeToggle = {
  // Get current theme from localStorage or default to 'dark'
  getTheme: (): Theme => {
    return (localStorage.getItem('theme') as Theme) || 'dark';
  },

  // Set theme in localStorage and apply changes to HTML element
  setTheme: (theme: Theme): void => {
    localStorage.setItem('theme', theme);
    const htmlElement = document.documentElement;
    
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.setAttribute('data-theme', 'light');
    }
    
    // Dispatch a custom event that can be listened to by components
    window.dispatchEvent(new Event('themeChange'));
  },

  // Toggle between light and dark themes
  toggleTheme: (): void => {
    const currentTheme = themeToggle.getTheme();
    const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
    themeToggle.setTheme(newTheme);
  },

  // Initialize theme based on localStorage or system preference
  initTheme: (): void => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      themeToggle.setTheme(savedTheme as Theme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      themeToggle.setTheme(prefersDark ? 'dark' : 'light');
    }
    
    // Add listener for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        themeToggle.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}; 