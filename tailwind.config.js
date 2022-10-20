const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        transparent:'transparent',
        current:'currentColor',
        grey:colors.slate,
        primary:{
          50:'#ffffff',
          'lightgreen':'#849F27',
          'naveyblack':'#171717',
          'black':'#000000',
          'alotlightgreen':'#80e27e',
          'p-dark':'#29434e',
          'olivedrab':'#6B8E23'
        },
        fontSize: {
          'p_1': ' 1.0625rem',
          'title_size':'2.125rem'
        },
       

      },
    },
    // animation:{
    //   spin:"spin 6s linear infinte"
    // },
    screens:{
    sm:'640px',
    md:'768px',
    lg:'1024px',
    xl:'1280px',
    '2xl':'1536px',
  },
},
  plugins: [],
}