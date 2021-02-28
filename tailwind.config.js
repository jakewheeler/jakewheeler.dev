const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  theme: {
    extend: {
      colors: {
        offwhite: '#F5F5F5',
      },
    },
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  plugins: [require('@tailwindcss/typography')],
};
