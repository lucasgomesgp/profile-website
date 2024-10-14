import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-principal": "#171717",
        "purple-principal": "#A53DFF",
        "yankees-blue": "#1D2939",
        "charcoal": "#1D2939",
        "cadet-grey": "#98A2B3",
        "white-light": "#F0F1F3",
        "outline-button": "rgba(255, 255, 255, 0.10)",
      },
      fontFamily: {
        lufga: ["var(--font-lufga)"],
        urbanist: ["var(--font-urbanist)"]
      },
      animation: {
        "scroll-infinite-texts": "text-animation-tech 10s linear infinite",
        "right": "moveRight 2s ease-in 1",
        "left": "moveLeft 2s ease-in 1",
        "opacity": "opacity 1.5s .5s ease-in 1 forwards",
      },
      keyframes: {
        "text-animation-tech": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-128px * 8))" }
        },
        "moveLeft": {
          "from": {
            "left": "-100%",
          },
          "to": {
            "left": "0",
          }
        },
        "moveRight": {
          "from": {
            "right": "-100%",
          },
          "to": {
            "right": "0",
          }
        },
        "opacity": {
          "from": {
            "opacity": "0",
            "bottom": "0",
          },
          "to": {
            "opacity": "1",
            "bottom": "112px",
          }
        }
      },
      boxShadow: {
        "input": "0px 4px 150px 5px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
};
export default config;
