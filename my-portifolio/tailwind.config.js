const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#2b2d42', // Cor anterior
        coolGray: '#8d99ae',
        paleSky: '#edf2f4',
        crimsonRed: '#ef233c',
        darkRed: '#d90429',
        white: '#FEFEFE'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
