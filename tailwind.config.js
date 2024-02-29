/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        bg : "#f8fcf8",
        texthigh :"#69a769",
        text : "#0e1b0e"
      },
      fontFamily: {
        Poppins: "Poppins"
      }
    },
  },
  plugins: [],
}

