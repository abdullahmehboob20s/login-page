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
        "light-blue": "rgb(247,250,252)",
        "light-blue-2": "#eceef4",
        grayish: "rgb(60,66,87)",
      },

      width: {
        "540px": "540px",
      },

      maxWidth: {
        "540px": "540px",
        "382px": "382px",
      },
      backgroundImage: {
        "stripe-line": "linear-gradient(#eceef4 49%,#eceef400 50%)",
      },

      spacing: {
        "100vh": "100vh",
        "1px": "1px",
        "40px": "40px",
        "10px": "10px",
      },
    },
  },
  plugins: [],
};
