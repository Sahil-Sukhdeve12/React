/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{{html,js},ts,jsx,tsx}"], //takes the list of array of all elements. 
  darkMode:"class",
  theme: {
    extend: {},
    darkMode: 'selector',
  },
  plugins: [],
}

