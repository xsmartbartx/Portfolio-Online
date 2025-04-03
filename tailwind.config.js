/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        tertiary: "#1e293b",
        accent: "#38bdf8",
        "accent-alt": "#a78bfa",
        "black-100": "#111827",
        "black-200": "#030712",
        "white-100": "#f8fafc",
        "gradient-start": "#0f172a",
        "gradient-end": "#0c0a2a",
      },
      boxShadow: {
        card: "0px 20px 50px -15px rgba(2, 12, 27, 0.7)",
        glow: "0 0 15px 3px rgba(56, 189, 248, 0.2)",
        "glow-purple": "0 0 15px 3px rgba(167, 139, 250, 0.2)",
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      screens: {
        'xs': '475px',
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at top right, rgba(20, 30, 60, 0.5), transparent 50%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px 3px rgba(56, 189, 248, 0.2)' },
          '50%': { boxShadow: '0 0 25px 5px rgba(56, 189, 248, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 