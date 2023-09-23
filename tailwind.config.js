/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HeroesApp': "url('/assets/Projects/HeroesApp.jpg')",
        'ChessCounterApp': "url('/assets/Projects/ChessCounterApp.jpg')",
      },
      colors: {
        'primary': '#64C1E3',
        'secondary': '#7765E3',
        'tertiary': '#242038',
        'backGray': '#F3F4F6',
        'alert': 'rgba(100, 193, 227, 0.3)',
      },
      boxShadow: {
        'pages': '0px 0px 9px 0px rgba(0,0,0,0.25)',
        'title': '0px 45px 29px -24px rgba(100,193,227,0.3)'
      },
      borderRadius: {
        'pages': '50px',
      },
      fontFamily: {
        'Hahmlet': ['Hahmlet', 'cursive'],
        'titles': ['Inconsolata', 'cursive'],
      },
    },
  },
  plugins: [],
}

