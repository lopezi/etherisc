/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'special-blue': 'rgb(33, 53, 71)',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

