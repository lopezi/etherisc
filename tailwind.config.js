/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      ...colors,
      'special-blue': 'rgb(33, 53, 71)',
      'baby-blue':     '#d4effe',
      'footer-color': 'rgb(59, 0, 185)',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

