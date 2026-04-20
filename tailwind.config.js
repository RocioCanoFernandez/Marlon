/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocre: '#C9852E',
        terra: '#A75424',
        brown_red: '#6E2D1E',
        brown_dark: '#4A2418',
        gold: '#D6A14A',
        black_base: '#0D0806',
        warm_white: '#F6E7CE'
      }
    },
  },
  plugins: [],
}
