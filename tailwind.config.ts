import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // All colors reference CSS vars — dark mode swaps the var values
        paper:          "rgb(var(--color-paper) / <alpha-value>)",
        surface:        "rgb(var(--color-surface) / <alpha-value>)",
        "surface-alt":  "rgb(var(--color-surface-alt) / <alpha-value>)",
        line:           "rgb(var(--color-line) / <alpha-value>)",
        "line-dark":    "rgb(var(--color-line-dark) / <alpha-value>)",
        ink:            "rgb(var(--color-ink) / <alpha-value>)",
        "ink-muted":    "rgb(var(--color-ink-muted) / <alpha-value>)",
        "ink-faint":    "rgb(var(--color-ink-faint) / <alpha-value>)",
        yellow:         "rgb(var(--color-yellow) / <alpha-value>)",
        "yellow-soft":  "rgb(var(--color-yellow-soft) / <alpha-value>)",
        pencil:         "rgb(var(--color-pencil) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        body:    ["var(--font-space)", "system-ui", "sans-serif"],
        sketch:  ["var(--font-serif)", "Georgia", "serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6rem", { lineHeight: "0.9rem", letterSpacing: "0.12em" }],
        fluid:      ["clamp(2rem,4vw,3.2rem)",     { lineHeight: "1.1" }],
        "fluid-lg": ["clamp(2.5rem,5vw,4rem)",     { lineHeight: "1.05" }],
        "fluid-sm": ["clamp(1.2rem,2.2vw,1.8rem)", { lineHeight: "1.2" }],
      },
      animation: {
        marquee:        "marquee 35s linear infinite",
        "marquee-slow": "marquee 55s linear infinite",
        "draw-line":    "drawLine 1s ease forwards",
        "fade-up":      "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drawLine: {
          from: { strokeDashoffset: "300" },
          to:   { strokeDashoffset: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
