/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prim-green': '#06D881',
        'prim-blue': '#167CE2',
        'prim-purple': '#741FBB'
      },
    },
    fontFamily: {
      'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
      'pixel': ['Silkscreen']
    }
  },
  plugins: [],
}