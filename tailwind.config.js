module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        floatingr: '0 0 0 calc(50% - 1px)',
      },
      colors: {
        primary: {
          light: '#ffebee',
          DEFAULT: '#ffcdd2',
          dark: '#ef9a9a',
        },
        secondary: {
          light: '#e0f2f1',
          DEFAULT: '#b2dfdb',
          dark: '#80cbc4',
        },
      },
      borderRadius: {
        50: '50%',
      },
      backgroundImage: theme => ({
        'rabbit-turtle': "url('/images/background.png')",
      }),
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
