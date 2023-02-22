/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screen: {
      sm: '375px',
      md: '728px',
      lg: '1440px',
    },
    extend: {
      colors: {
        almostWhite: 'hsl(0, 0%, 98%)',
        mediumGray: 'hsl(0, 0%, 41%)',
        almostBlack: 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        'epilogue': ['Epilogue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
