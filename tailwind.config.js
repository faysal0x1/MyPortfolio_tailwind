const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#172554",
        secondary: "#10B981",
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
