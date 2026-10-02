/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#a855f7',
        accent: '#f59e0b',
        dark: '#0f172a',
        panel: '#111827',
      },
      boxShadow: {
        glow: '0 20px 45px rgba(124, 58, 237, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(168,85,247,0.22), transparent 28%), radial-gradient(circle at bottom right, rgba(59,130,246,0.22), transparent 30%)',
      },
    },
  },
  plugins: [],
};
