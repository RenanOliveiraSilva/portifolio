/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
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
