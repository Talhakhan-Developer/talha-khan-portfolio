/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      primary: "#6cb4ee",
      dark: "#201e1f",
      gradientStart: "#c5e1ff",
      gradientEnd: "#d4acff",
      green: "#13ce66",
      grayDark: "#848191",
      gray: "#bebbbb",
      white: "#ffffff",
    },
    fontSize: {
      h1: "52px",
      h2: "32px",
      h3: "24px",
      nav: "18px",
      h4: "16px",
    },
    height: {
      nav: "65px",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      poppin: ["Poppins", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
