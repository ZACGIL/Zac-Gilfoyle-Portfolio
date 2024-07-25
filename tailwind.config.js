/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'maxsm': { 'max': '675px' },
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    }
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

