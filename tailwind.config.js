/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D28D9',
          50: '#EDE9F6',
          100: '#DCD4F0',
          200: '#B9A9E3',
          300: '#967FD6',
          400: '#7454C9',
          500: '#6D28D9',
          600: '#5A21B5',
          700: '#481A91',
          800: '#36146D',
          900: '#240D49',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#06B6D4',
          600: '#0591A8',
          700: '#046D7C',
          800: '#034850',
          900: '#012324',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};