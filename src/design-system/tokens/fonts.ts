export const fonts = {
  sans: {
    name: "Instrument Sans",
    weights: [400, 500, 600],
    className: "font-body",
    variable: "--font-instrument-sans",
    source: "next/font/google",
  },
  mono: {
    name: "IBM Plex Mono",
    weights: [400, 500],
    className: "font-mono",
    variable: "--font-ibm-plex-mono",
    source: "next/font/google",
  },
} as const;
