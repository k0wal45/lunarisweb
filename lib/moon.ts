// Lunaris web: fazy księżyca i kształt oświetlonej części tarczy.
// Zero zależności. Używane przez <Moon /> i <MoonCaption />.

export type Vec3 = [number, number, number];

const SYNODIC = 29.530588853; // dni
const REF_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14); // nów 6.01.2000

export const PHASE_NAMES = [
  'nów', 'sierp przybywający', 'pierwsza kwadra', 'garb przybywający',
  'pełnia', 'garb ubywający', 'ostatnia kwadra', 'sierp ubywający',
] as const;

/** Dzisiejsza faza. Dokładność ok. 1 dnia, wystarcza do grafiki. */
export function moonPhase(date: Date = new Date()) {
  const days = (date.getTime() - REF_NEW_MOON) / 86_400_000;
  const age = ((days % SYNODIC) + SYNODIC) % SYNODIC;
  const fraction = age / SYNODIC; // 0 nów, 0.5 pełnia
  const illumination = (1 - Math.cos(2 * Math.PI * fraction)) / 2;
  const index = Math.round(fraction * 8) % 8;
  return { age, fraction, illumination, index, name: PHASE_NAMES[index] };
}

/** Kierunek słońca dla fazy (x w prawo, y w górę, z w stronę widza). */
export function sunForPhase(fraction: number): Vec3 {
  const a = 2 * Math.PI * fraction;
  return [Math.sin(a), 0, -Math.cos(a)];
}

/**
 * Oświetlona część tarczy dla dowolnego kierunku światła.
 * Rzut terminatora kuli to półelipsa o półosi r·|z|. Rysujemy ją
 * w układzie „światło z prawej” i obracamy w stronę światła.
 * Zwraca ścieżkę SVG (viewBox 0 0 100 100) i kąt obrotu w stopniach.
 */
export function litShape(light: Vec3, r = 50, c = 50) {
  const [x, y, z] = light;
  const len = Math.hypot(x, y, z) || 1;
  const nz = z / len;
  const rx = (r * Math.abs(nz)).toFixed(2);
  const sweep = nz > 0 ? 1 : 0; // 1 = garb, 0 = sierp
  const d =
    `M${c} ${c - r}A${r} ${r} 0 0 1 ${c} ${c + r}` +
    `A${rx} ${r} 0 0 ${sweep} ${c} ${c - r}Z`;
  const angle = Math.hypot(x, y) < 1e-4 ? 0 : (Math.atan2(-y, x) * 180) / Math.PI;
  return { d, angle };
}
