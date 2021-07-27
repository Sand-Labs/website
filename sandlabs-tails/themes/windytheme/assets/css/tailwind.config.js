const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    purge: [],
    darkMode: 'media',
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      primary: "#6A9FB5",
      secondary: "#E7D9C8",
      secondaryLight: "#f3ece3",
      Secondary: "#CFAF8C",
      accent: "#E6B8C5",
      Accent: "#B77B93",
      dark: "#5F7395",
      darker: "#34435E",
    },
    fontFamily: {
      sans: ['Helvetica', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}