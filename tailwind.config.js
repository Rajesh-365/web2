/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '24': '6rem', // 112px – used for top spacing under header
      },
    },
  },
  plugins: [],
};
