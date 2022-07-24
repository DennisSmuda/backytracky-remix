/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js,css}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
