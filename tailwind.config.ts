import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefbf4",
          100: "#d6f5e3",
          200: "#b0eacc",
          300: "#7cdaae",
          400: "#45c38b",
          500: "#22a971",
          600: "#14895b",
          700: "#106e4b",
          800: "#10573d",
          900: "#0e4733",
          950: "#06281d",
        },
        surface: {
          0: "#ffffff",
          50: "#f8f9fb",
          100: "#f0f2f5",
          200: "#e4e7ec",
          300: "#cdd3dc",
          400: "#9ba4b4",
          500: "#6b7486",
          600: "#4a5264",
          700: "#363d4e",
          800: "#252b39",
          850: "#1b2030",
          900: "#111624",
          950: "#0a0e1a",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(69, 195, 139, 0.12), 0 12px 30px rgba(34, 169, 113, 0.18)",
        "glow-lg": "0 0 0 1px rgba(69, 195, 139, 0.18), 0 18px 48px rgba(34, 169, 113, 0.24)",
        card: "0 18px 45px rgba(17, 22, 36, 0.08)",
        "card-hover": "0 24px 55px rgba(17, 22, 36, 0.16)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34, 169, 113, 0.12)" },
          "50%": { boxShadow: "0 0 0 12px rgba(34, 169, 113, 0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out both",
        "slide-up": "slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        float: "float 6s ease-in-out infinite",
        pulse_glow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
