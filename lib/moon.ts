// Lunaris web: fazy księżyca i kształt oświetlonej części tarczy.
// Zero zależności. Używane przez <Moon /> i <MoonCaption />.

export type Vec3 = [number, number, number];

const SYNODIC = 29.530588853; // dni
const REF_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14); // nów 6.01.2000

export const PHASE_NAMES = [
  "nów",
  "sierp przybywający",
  "pierwsza kwadra",
  "garb przybywający",
  "pełnia",
  "garb ubywający",
  "ostatnia kwadra",
  "sierp ubywający",
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
  const angle =
    Math.hypot(x, y) < 1e-4 ? 0 : (Math.atan2(-y, x) * 180) / Math.PI;
  return { d, angle };
}

/**
 * Sam terminator: ta sama półelipsa co w litShape (od dołu do góry tarczy), w układzie „światło z prawej”.
 * Rysujemy ją grubą, rozmytą linią w kolorze Morza pod maską światła, więc ciemnienie idzie
 * wzdłuż prawdziwej granicy cienia: przy sierpie wklęsłej, przy garbie wypukłej.
 * Okrągły gradient sam tego nie umiał i każda faza wyglądała jak „rogalik”.
 * `opacity` gaśnie ku pełni, gdzie terminator schodzi na brzeg tarczy i nie powinien go ściemniać.
 */
export function terminator(light: Vec3, r = 50, c = 50) {
  const [x, y, z] = light;
  const len = Math.hypot(x, y, z) || 1;
  const nz = z / len;
  const across = Math.hypot(x, y) / len;
  const rx = (r * Math.abs(nz)).toFixed(2);
  const sweep = nz > 0 ? 1 : 0;
  // szerokość światła na równiku: wąski sierp dostaje węższe pasmo cienia, żeby nie zgasł cały
  const litWidth = r * (1 + nz);
  const width = Math.min(30, Math.max(8, litWidth * 0.9));
  return {
    d: `M${c} ${c + r}A${rx} ${r} 0 0 ${sweep} ${c} ${c - r}`,
    opacity: Math.min(1, across * 2).toFixed(3),
    width: width.toFixed(2),
    blur: (width / 3.75).toFixed(2),
  };
}

/**
 * Gradient cienia części oświetlonej, w tym samym obróconym układzie co litShape
 * (światło z prawej). Środek = rzut punktu podsłonecznego na tarczę: przy pełni środek tarczy,
 * przy kwadrze prawy brzeg. Promień sięga mniej więcej terminatora, więc tam powierzchnia
 * gaśnie do Morza; przy pełni jest dłuższy, żeby brzeg tylko lekko ściemniał.
 * W pionie gradient jest rozciągnięty co najmniej do promienia tarczy, więc sierp świeci
 * wzdłuż całego brzegu, a nie jako okrągła plama.
 * Zwraca stringi gotowe do setAttribute (viewBox 0 0 100 100).
 */
export function litShade(light: Vec3, r = 50, c = 50) {
  const [x, y, z] = light;
  const len = Math.hypot(x, y, z) || 1;
  const across = Math.hypot(x, y) / len; // 0 pełnia/nów, 1 kwadra
  const toward = z / len; // 1 pełnia, -1 nów
  let cx = c + r * across;
  // odległość od punktu podsłonecznego do terminatora + zapas tylko w okolicy pełni
  let rx = Math.max(
    6,
    r * (across + toward) + 60 * Math.max(toward, 0) ** 2 * (1 - across) ** 2,
  );
  if (toward < 0) {
    // sierp: punkt podsłoneczny jest po niewidocznej stronie, a jego rzut wypadał w cieniu,
    // więc cały sierp gasł do Morza. Światło liczymy od oświetlonego brzegu, promień = szerokość
    // sierpa na równiku z zapasem rosnącym ku nowiu. Przy kwadrze (toward = 0) wynik jak wyżej.
    cx = c + r;
    rx = Math.max(6, r * (1 + toward)) * (1 - 0.6 * toward);
  }
  const ry = Math.max(rx, r);
  const k = ry / rx;
  const transform = `translate(0 ${(c * (1 - k)).toFixed(2)}) scale(1 ${k.toFixed(4)})`;
  return { cx: cx.toFixed(2), r: rx.toFixed(2), transform };
}
