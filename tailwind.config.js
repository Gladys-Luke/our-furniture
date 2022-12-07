/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nav: "#F9F1E7",
        button: "#E89F71",
        product: "#E5E5E5",
        pops: "#ffffffb8"

    }, 
    height: {
      headerH: "28rem",
  }, 
  width: {
    widthH: "25rem",
},

    },
  },
  plugins: [],
}
