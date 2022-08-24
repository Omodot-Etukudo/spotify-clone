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
        'dark-red':'#261A1A',
        'main-bg':'#121212',
        'card-bg':'#181818',
        'card-hover':'#282828'
      },
      zIndex: {
        '-10': '-10',
        '-20':'-20,'
       },
       inset: {
        '66': '17rem',
       },
       margin: {
        '66': '15.55rem',
        '23':"5.6rem",
        '-23':'-5.6rem',
        "-31":"-6rem",
        "30":"8rem"
       },
       spacing: {
        '37':'9.5rem',
        '38':'9.8rem',
        '42':'10.6rem',
        '84': '20.1rem',
        '86': '21rem',
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
