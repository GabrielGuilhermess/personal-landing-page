export const spacing = {
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  20: "20px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  64: "64px",
  80: "80px",
  96: "96px",
  128: "128px",
} as const;

export const radius = {
  none: "0px",
  detail: "4px",
  control: "6px",
  surface: "8px",
  round: "999px",
} as const;

export const borders = {
  width: "1px",
} as const;

export const elevation = {
  none: "none",
  raised: "0 8px 24px rgba(17, 19, 24, 0.10)",
} as const;

export const motion = {
  fast: 120,
  normal: 180,
  slow: 240,
  easing: "cubic-bezier(.2,.8,.2,1)",
} as const;

export const breakpoints = {
  mobileMin: 360,
  mobile: 390,
  tablet: 768,
  desktop: 1280,
  desktopWide: 1440,
} as const;

export const container = {
  360: { gutter: 16, content: 328 },
  390: { gutter: 20, content: 350 },
  768: { gutter: 32, content: 704 },
  1280: { gutter: 80, content: 1120 },
  1440: { gutter: 96, content: 1248 },
} as const;
