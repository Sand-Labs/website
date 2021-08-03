module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: "#6A9FB5",
        secondary: "#E7D9C8",
        secondaryLight: "#f3ece3",
        Secondary: "#CFAF8C",
        accent: "#E6B8C5",
        Accent: "#B77B93",
        dark: "#5F7395",
        darker: "#34435E",
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        helv: ["Helvetica"],
        scp: ['Source Code Pro'],
        ptSans: ['PT Sans'],
        merri: ['Merriweather'],
        peach: ['Georgia',]
    },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
  },
}
}
