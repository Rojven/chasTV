/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '426px',
        sm: '641px',
        md: '769px',
        lg: '1025px',
        xl: '1281px',
      },
      colors: {
        black: '#191624',
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
      },
      keyframes: {
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
      },
    },
  },
};
