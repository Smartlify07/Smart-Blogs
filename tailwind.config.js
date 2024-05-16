/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik,sans-serif"],
        playfair: ["Playfair Display, serif"],
        sourcesans: ["Source Sans 3, sans-serif"],
      },

      colors: {
        darkgreen: "hsl(144, 51%, 10%)",
        black: "hsl(0,0%,1%)",
        pakistangreen: "hsl(141,89%,15%)",
        seagreen: "hsl(141,93%,28%)",
        malachite: "hsl(144,82%,47%)",
        white: "hsl(0,0%,100%)",
      },
    },
  },
  plugins: [],
};
