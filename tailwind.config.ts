import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper:          "#FAFAF8",   // main page background
        surface:        "#F5F4F0",   // card/section background
        "surface-alt":  "#EEECEA",   // slightly darker surface
        line:           "#D8D5CC",   // borders — slightly darker for contrast
        "line-dark":    "#B8B5AB",   // pencil sketch lines
        ink:            "#111111",   // primary text — richer black
        "ink-muted":    "#524F4B",   // secondary text — more readable
        "ink-faint":    "#8A8886",   // very faint / labels
        yellow:         "#FFE141",   // diagram fill / accent
        "yellow-soft":  "#FFFCE0",   // very light yellow bg tint
        pencil:         "#B8B5AB",   // for hand-drawn lines
      },
      fontFamily: {
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        body:    ["var(--font-space)", "system-ui", "sans-serif"],
        sketch:  ["var(--font-caveat)", "cursive"],
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
