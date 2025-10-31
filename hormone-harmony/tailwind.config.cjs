/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0F172A',
          primary: '#2563EB',
          accent: '#38BDF8',
          glow: '#A855F7',
          muted: '#94A3B8',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        glow: '0 25px 50px -20px rgba(37, 99, 235, 0.45)',
      },
      backgroundImage: {
        'grid-dots': 'radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.25) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
