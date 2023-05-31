/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors');

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'minimal-react': "url('../public/minimal-react.webp')"
      },
      fontFamily: {
        'logofont': ['Comfortaa', 'monospace'],
        'aboutfont': ['Baloo\\ 2', 'cursive']
      },
      colors: {
        'blue-cpp': '#659ad2',
        'blue-gray': '#41506b',
        'blue-mui': '#007fff',
        'blue-react': '#61dafb',
        'blue-tailwind': '#38bdf8',
        'gray-bash': '#3e474a',
        'gray-chip': '#393939',
        'green-arduino': '#008184',
        'green-dark': '#263849',
        'green-light': '#90f6d7',
        'green-new': '#35bcbf',
        'purple-gatsby': '#663399',
        'white-light': '#eeeeee',
        'yellow-js': '#f0db4f',
        ...colors
      }
    },
  },
  plugins: [],
});
