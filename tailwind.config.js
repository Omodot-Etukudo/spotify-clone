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
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
