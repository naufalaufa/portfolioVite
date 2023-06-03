/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      syne: ["Syne", "sans-serif"],
      Algreya: ["Alegreya SC", "serif"],
    },
  },
  plugins: [],
};
