/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',],
  theme: {
    extend: {
      fontFamily:{
        Montserrat: ['Montserrat'],
        Sofia: ['Sofia Sans Condensed'],
        Roboto: ['Roboto'],
      },
      backgroundImage: {
        'backgroundCover': "url('/img/bg_pic.jpg')",
      }
    },
  },
  plugins: [],
}

