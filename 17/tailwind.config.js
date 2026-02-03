/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2C5F2D',
          light: '#3D7A3E',
          dark: '#1E4620',
        },
        wood: {
          DEFAULT: '#8B4513',
          light: '#A0522D',
          dark: '#654321',
        },
        gold: {
          DEFAULT: '#DAA520',
          light: '#F0E68C',
          dark: '#B8860B',
        }
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
