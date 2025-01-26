/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '641px',
      'md':'700px',
      'lg': '1025px'
    },
    extend: {
      // listStyleImage: {
      //   ring:url(''),
      // },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        // Add more custom font families as needed
      }
    },
  },
  plugins: [],
}

