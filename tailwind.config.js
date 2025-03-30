/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0d16",
        secondary: "#94a3b8",
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
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        'hero-pattern': "url('/noise.png'), radial-gradient(circle at top right, rgba(20, 30, 60, 0.5), transparent 50%)",
        'grid-pattern': "url('/grid.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
} 