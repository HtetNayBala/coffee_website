/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'serif': ['Noto Serif'],
        'sans':[' \'Montserrat\', sans-serif']
      }
    },
  },
}
