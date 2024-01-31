/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'CambridgeBlue' : '#89B6A5',
      'EnglishViolet' : '#4C3B4D',
      'MintGreen' : '#C9EDDC',
      'DimGray' : '#6A706E',
      'white' : '#FFFFFF',
    },
  
    // colors:{
    //   'green': '#317874',
    //   transparent: 'transparent',
    //   'white': '#ffffff',
    //   'purple': '#3f3cbb',
    //   'midnight': '#121063',
    //   'metal': '#565584',
    //   'tahiti': '#3ab7bf',
    //   'silver': '#ecebff',
    //   'bubble-gum': '#ff77e9',
    //   'bermuda': '#78dcca',
    //   'black': '#ffff',
    // },
    extend: {},
  },
  plugins: [],
}

