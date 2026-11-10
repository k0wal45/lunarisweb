// Wspólny rysunek księżyca: paleta (design.md, sekcja 4) i powierzchnia (morza, kratery).
// Używane przez <Moon /> w hero i <PhaseMoon /> w sekcji procesu, żeby oba wyglądały tak samo.

export const MOON_COLORS = {
  NIGHT: "#0E1320",
  MARE: "#1B2232",
  ASH: "#8A94A8",
  MOON: "#E6E8EC",
  FULL: "#FFFFFF",
  MOON_200: "#A3AABA",
  MOON_300: "#7A8396",
  MOON_500: "#262D3D",
} as const;

// Rysunek powierzchni: kilka plam mórz i kraterów. Stałe, nie obracają się ze światłem.
export const MARIA = [
  "M28 30c6-6 16-6 20 0s-2 13-10 13-16-7-10-13z",
  "M56 27c5-4 13-3 15 3s-3 10-9 9-10-8-6-12z",
  "M60 44c6-2 14 1 14 7s-7 9-13 7-7-12-1-14z",
  "M19 49c4-5 11-4 13 2s-1 14-7 15-10-12-6-17z",
  "M44 62c4-3 10-2 11 3s-4 8-8 7-6-7-3-10z",
];

export const CRATERS: [number, number, number][] = [
  [36, 76, 4],
  [70, 71, 3],
  [79, 36, 2.4],
  [24, 31, 2],
  [53, 87, 2.2],
  [64, 15, 1.8],
];
