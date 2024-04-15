/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js",],
  content: ["./src/components/*.js",],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'coffee': '#A9804E',
      'green-white': '#EFE8DF',
      'soapstone': '#FDFCF6',
    },
  },
  plugins: [],
}

