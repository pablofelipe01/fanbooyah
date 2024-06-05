/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with class strategy
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // App directory and its subdirectories
    './components/**/*.{js,ts,jsx,tsx}',  // Components directory in the root
  ],
  theme: {
    extend: {
      zIndex: {
        '1000': '1000',
      },
      minHeight: {
        'screen': '100vh',
      },
      colors: {
        gray: {
          900: '#151515',
          800: '#333333',
        },
        green: {
          500: '#03f73c',
        },
        red: {
          500: '#fc0101',
        },
      },
    },
  },
  plugins: [],
};
