/** @type {import('tailwindcss').Config} */

import { transform } from "typescript";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        filter: "0 0 0.5rem #ffdbc3",
      },
      animation: {
        fadeOut: "fadeOut .9s ease-in-out forwards",
        fadeIn: "fadeIn 2s ease-in-out forwards",
        outImage: "outImage .7s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "75%, 100%": {
            transform: "translateX(-500px)",
            opacity: "0",
            display: "none",
          },
        },
        outImage: {
          to: {
            transform: "translateX(50px) skew(-90deg, 150deg)",
            opacity: "0",
            display: "none",
          },
        },
      },
      colors: {
        "primary-text": "#FFDBC3",
        "secondary-text": "#DF5FAA",
        "bg-primary": "#872d62",
        primary: "#290A1C",
        secondary: "#58193E",
        tertiary: "#B64587",
        javascript: "#efd81d",
        html: "#dd4b25",
        css: "#254bdd",
        react: "#58c4dc",
      },
      theme: {},
    },
  },
  plugins: [],
};
