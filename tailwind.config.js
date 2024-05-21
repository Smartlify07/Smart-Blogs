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
        "black-100": "hsl(0,0%,50%)",
        pakistangreen: "hsl(141,89%,15%)",
        seagreen: "hsl(141,93%,28%)",
        malachite: "hsl(144,82%,47%)",
        white: "hsl(0,0%,100%)",
      },

      backgroundImage: {
        pattern: "url(./images/Authentication/pattern.jpg)",
      },

      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-20rem)" },
          "100%": { transform: "translateX(0%)" },
        },

        slideUp: {
          "0%": { transform: "translateY(-20rem)" },
          "100%": { transform: "translateY(0%)" },
        },
      },

      animation: {
        slideIn: "slideIn 0.3s 0s ease-in forwards",
        slideUp: "slideIn 0.3s 0s ease-in forwards",
      },
    },
  },
  plugins: [],
};
