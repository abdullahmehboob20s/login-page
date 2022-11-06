/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "430px": "430px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        segoe: "segoe",
      },
      borderWidth: {
        "1px": "1px",
      },
      colors: {
        text: "#1a1f36",
        white: "white",
        black: "black",
        transparent: "transparent",
        link: "#635bff",
        "keel-cyan": "#80e9ff",
        "keel-paleBlurple": "#7a73ff",
        "keel-cobalt": "#0048e5",
      },
      width: {
        "540px": "540px",
      },

      maxWidth: {
        "540px": "540px",
      },
      backgroundImage: {
        "stripe-line": "linear-gradient(#eceef4 49%,#eceef400 50%)",
      },
    },
  },
  plugins: [],
};
