/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#E3646E', // Cor anterior
        customPurple: '#BB72E9',
        customBlue: '#3996DB',
        customGreen: '#82BC4F',
        customYellow: '#EABD5F',
      }
    },
  },
  plugins: [],
}