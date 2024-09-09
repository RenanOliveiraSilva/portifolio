/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 255, 255, 1)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        slide: 'slide 4s ease-in-out infinite alternate',
      },
      colors: {
        customRed: '#E3646E',
        customPurple: '#BB72E9',
        customBlue: '#3996DB',
        customGreen: '#82BC4F',
        customYellow: '#EABD5F',
        customGray: '#292C34',
        backgroundColor: '#16181d',
      },
      backgroundImage: {
        pattern: 'url(/Background_Intro.png)',
        patternMobile: 'url(/Background_Intro_Mobile.png)',
      },
      fontFamily: {
        asap: ['Asap', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        maven: ['Maven Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
