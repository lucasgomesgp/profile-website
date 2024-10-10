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
      },
      keyframes: {
        "text-animation-tech": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-128px * 8))" }
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
