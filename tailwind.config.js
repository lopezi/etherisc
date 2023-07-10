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
      'sky-300'     :  'rgb(125, 211, 252)',
      'sky-400'     :  'rgb(56, 189, 248)',
      'sky-500'     :  'rgb(14, 165, 233)',
      'sky-600'     :  'rgb(2, 132, 199)',
      'sky-700'     :  'rgb(3, 105, 16)',
      'sky-800'     :  'rgb(7, 89, 133)',
      'sky-900'     :  'rgb(12, 74, 110)',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

