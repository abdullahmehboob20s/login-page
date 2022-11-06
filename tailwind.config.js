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
        sohne: "sohne",
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
      boxShadow: {
        form: "0 15px 35px 0 rgba(60, 66, 87, 0.08), 0 5px 15px 0 rgba(0, 0, 0, 0.12)",
        checkbox:
          "rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px",
        focus:
          "rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(58 151 212 / 36%) 0px 0px 0px 4px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px",
      },
    },
  },
  plugins: [],
};
