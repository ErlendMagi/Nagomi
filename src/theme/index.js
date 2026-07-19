export const COLORS = {
  bg: '#0D0D0D',
  surface: '#161616',
  surfaceAlt: '#1E1E1E',
  border: '#2A2A2A',
  text: '#F0EDE6',
  textMuted: '#888880',
  textFaint: '#444',
  accent: '#E8A838',       // warm amber — Nagomi brand
  accentDim: '#7A4F10',
  fire: '#FF6B2B',
  fireGlow: '#FF6B2B33',
  success: '#4CAF7D',
  danger: '#E05A5A',

  // Rep band gradient: 0 reps (grey) → 40 reps (bright gold)
  bands: [
    '#333333', // 0–4
    '#4A3820', // 5–9
    '#6B4A1A', // 10–14
    '#8A5F1A', // 15–19
    '#A87020', // 20–24
    '#C88228', // 25–29
    '#E09630', // 30–34
    '#E8A838', // 35–39
    '#FFD060', // 40+ (known)
  ],
};

export const FONTS = {
  regular: undefined,  // system default
  mono: undefined,
};

export const RADIUS = {
  sm: 8,
  md: 14,
  lg: 22,
  xl: 32,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
};
