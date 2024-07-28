/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': [ "New Rocker", "san-serif"],
        'body': [ "Pirata One", "sans-serif"],
        'read': [ "Texturina", "sans-serif"]
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    screens: {
      'maxsm': { 'max': '675px' },
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    }
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

