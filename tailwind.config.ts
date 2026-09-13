import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2F6BFF",
          primary: "#2F6BFF",
          400: "#2F6BFF",
          500: "#2F6BFF",
          600: "#2F6BFF",
        },
        background: "var(--background)",
        surface: {
          DEFAULT: "var(--surface)",
          0: "var(--surface)",
          50: "var(--background)",
          950: "#111318",
        },
        text: "var(--text)",
        muted: "var(--muted)",
        divider: "var(--divider)",
      },
      fontFamily: {
        display: ["var(--font-instrument-sans)", "sans-serif"],
        body: ["var(--font-instrument-sans)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      fontSize: {
        micro: ["0.75rem", { lineHeight: "1.5" }],
        metadata: ["0.8125rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        "heading-sm": ["1.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-md": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-lg": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        display: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["1.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      spacing: {
        18: "4.5rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "8px",
        "2xl": "8px",
        "3xl": "8px",
        "4xl": "8px",
      },
      boxShadow: {
        glow: "none",
        "glow-lg": "none",
        card: "none",
        "card-hover": "none",
        raised: "0 8px 24px rgba(17, 19, 24, 0.10)",
      },
      transitionDuration: {
        fast: "120ms",
        normal: "180ms",
        slow: "240ms",
      },
      transitionTimingFunction: {
        system: "cubic-bezier(.2,.8,.2,1)",
      },
      animation: {
        "fade-in": "none",
        "slide-up": "none",
        float: "none",
        pulse_glow: "none",
      },
    },
  },
  plugins: [],
};

export default config;
