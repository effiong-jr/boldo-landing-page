/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      "dark-blue": "#0A2640",
      green: "#65E4A3",
      "light-grey": "#F1F1F1",
      "light-blue": "#0DBBFC",
      white: "#FFFFFF",
      "grey-blue": "#8FB6D5",
      gray: "#777777",
    },

    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
