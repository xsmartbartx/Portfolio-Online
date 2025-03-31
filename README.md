# Portfolio Online

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and minimalist design
- 📱 Fully responsive across all devices
- ✨ Smooth animations using Framer Motion
- 📝 Contact form with EmailJS integration
- 🎯 Sections for showcasing projects, skills, and experience

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- EmailJS
- React Icons

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-online.git
cd portfolio-online
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your EmailJS credentials:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Open your browser and navigate to `http://localhost:3000`.

## Customization

### Personal Information
- Update your personal details in the `Hero.tsx` component
- Modify the projects data in the `Projects.tsx` component
- Update your skills and experience in the `About.tsx` component
- Change contact information in the `Contact.tsx` component

### Styling
- The main styling is in `index.css` and uses Tailwind CSS
- Color scheme can be modified in `tailwind.config.js`

## Deployment

Build the project for production:
```bash
npm run build
# or
yarn build
```

The built files will be in the `build` directory and can be deployed to hosting services like Vercel, Netlify, or GitHub Pages.

## License

This project is open source and available under the [MIT License](LICENSE).
