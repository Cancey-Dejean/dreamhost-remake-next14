import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["var(--font-body)", "sans-serif"],
    },
    colors: {
      primary: "var(--color-primary)",
      black: "var(--color-black)",
      white: "var(--color-white)",
      transparent: "transparent",
      "gray-300": "var(--color-gray-300)",
      offwhite: "var(--color-offWhite)",
      darkPurple: "var(--color-darkPurple)",
    },
    gridTemplateColumns: {
      "16": "repeat(16, minmax(0, 1fr))",
      "18": "repeat(18, minmax(0, 1fr))",
      "20": "repeat(20, minmax(0, 1fr))",
    },

    borderRadius: {
      16: "16px",
      32: "32px",
    },
    extend: {
      gridColumn: {
        "span-11": "span 11 / span 11",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
      },
      gridColumnStart: {
        10: "10",
      },
      fontSize: {
        base: ["1rem", "1.5rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "4xl": ["2rem", "125%"],
        "5xl": ["2.5rem", "125%"],
        "6xl": ["3rem", "125%"],
        "8xl": ["4rem", "125%"],
        "9xl": ["4.5rem", "122%"],
        "10xl": ["5rem", "120%"],
        "11xl": ["5.5rem", "118%"],
      },
    },
  },
  plugins: [],
};
export default config;
