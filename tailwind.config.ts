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
    extend: {},
  },
  plugins: [],
};
export default config;
