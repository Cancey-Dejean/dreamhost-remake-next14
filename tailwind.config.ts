import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      "4k": "3000px",
      full: "100%",
    },
    fontFamily: {
      body: ["var(--font-body)", "sans-serif"],
    },
    colors: {
      primary: "var(--color-primary)",
      black: "var(--color-black)",
      white: "var(--color-white)",
      transparent: "transparent",
      "gray-300": "#f7f9fa",
    },
    gridTemplateColumns: {
      "18": "repeat(18, minmax(0, 1fr))",
      "20": "repeat(20, minmax(0, 1fr))",
    },
    extend: {
      fontSize: {
        "8xl": ["4rem", "125%"],
        "9xl": ["4.5rem", "122%"],
        "10xl": ["5rem", "125%"],
        "11xl": ["5.5rem", "118%"],
      },
    },
  },
  plugins: [],
};
export default config;
