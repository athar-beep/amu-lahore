import type { Config } from "tailwindcss";

/**
 * Àmú Lahore — editorial design system.
 * Warm ivory parchment · deep ink · muted olive · aged brass (sparingly).
 * All colours are CSS vars so the identity retunes in one place.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2.5rem", xl: "3rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        parchment: "rgb(var(--parchment) / <alpha-value>)",
        stone: "rgb(var(--stone) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        olive: "rgb(var(--olive) / <alpha-value>)",
        brass: "rgb(var(--brass) / <alpha-value>)",
        "brass-deep": "rgb(var(--brass-deep) / <alpha-value>)",
        terracotta: "rgb(var(--terracotta) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { editorial: "72ch", narrow: "58ch" },
    },
  },
  plugins: [],
};

export default config;
