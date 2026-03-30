export const fonts = {
  display: {
    name: "Sora",
    weights: [400, 500, 600, 700, 800],
    className: "font-display",
    variable: "--font-sora",
    source: "next/font/google",
  },
  body: {
    name: "Outfit",
    weights: [300, 400, 500, 600],
    className: "font-body",
    variable: "--font-outfit",
    source: "next/font/google",
  },
  mono: {
    name: "JetBrains Mono",
    weights: [400, 500],
    className: "font-mono",
    variable: "--font-jetbrains",
    source: "next/font/google",
  },
} as const;
