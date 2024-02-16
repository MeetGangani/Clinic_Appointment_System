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
      'a' : '#333333',
      'bColor' : '#FF4B2B',
      'MintGreen' : '#D7FDF0',
      'LoginBack' : '#F1F7ED',
      'LoginBackGround' : '#5C5D67',
      'black' : '#000000',
    },
    fontFamily: {
      'sans' : 'Montserrat',
    },
    backgroundImage: {
      'hero-pattern': "url('https://thumbs.dreamstime.com/b/medical-staff-clinic-banner-copy-space-right-side-hospital-healthcare-background-87324362.jpg ')",
      // 'footer-texture': "url('/img/footer-texture.png')",
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

