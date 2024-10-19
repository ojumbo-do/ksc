/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.{html,js}",
    "./src/**/*.{html,js}",
    "./src/**/**/*.{html,js}",
    "./src/**/**/**/*.{html,js}",
    "./src/**/**/**/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0D4929",
          light: "#106b39",
          dark: "#023119",
        },
        secondary: {
          DEFAULT: "#FBCB00",
          light: "#ffde0d",
          dark: "#d19700",
        },

        tertiary: "#FBCB00",
        success: "#2ECC71",
        info: "#3490DC",
        warning: "#F1C40F",
        danger: "#E74C3C",
        light: "#F8F9FA",
        dark: "#343A40",
        white: "#FFFFFF",
        gray: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#C6C6C6",
          400: "#868E96",
          500: "#5A6268",
          600: "#343A40",
          700: "#212529",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
