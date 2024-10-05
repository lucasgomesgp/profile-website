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

      },
      fontFamily: {
        lufga: ["var(--font-lufga)"],
        urbanist: ["var(--font-urbanist)"]
      }
    },
  },
  plugins: [],
};
export default config;
