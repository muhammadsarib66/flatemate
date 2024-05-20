
const withMT = require("@material-tailwind/react/utils/withMT");
const { colors } = require("@mui/material");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Montserrat: ["Montserrat", 'sans-serif'],
        Poppins : ["Poppins", 'sans-serif']
      },
      colors : {
        primary : "#023047",
        onPrimary: "#8ECAE6",
        secondary : "#FBFBFB",
        onSecondary : "#fbe9e3"
      }
        
    },
  },
  plugins: [],
});