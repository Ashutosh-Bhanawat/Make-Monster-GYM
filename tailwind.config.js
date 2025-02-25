/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Muli', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        'monster-red': '#ff0000',
      },
    },
  },
  plugins: [],
};