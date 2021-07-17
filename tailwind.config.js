module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'vietnam': 'Be Vietnam'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
