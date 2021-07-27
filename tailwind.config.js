module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
       },
      fontSize:{
        'xxs':'0.65rem'
      },
      fontFamily: {
        'vietnam': 'Be Vietnam'
      },
      colors: {
        'spotify-green':'#1db954',
        'dark-red':'#261A1A'
      },
      zIndex: {
        '-10': '-10',
       },
       inset: {
        '66': '17rem',
       },
       margin: {
        '66': '15.55rem',
        '23':"5.6rem",
        "-31":"-6rem",
        "30":"8rem"
       },
       spacing: {
        
        '110': '30rem'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
