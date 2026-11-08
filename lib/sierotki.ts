// Twarde spacje w polskim tekście (design.md, sekcja 2: zasady pisma).
//
// - po jednoliterowych wyrazach: a, i, o, u, w, z (także wielką literą),
// - między liczbą a jednostką: 16 px, 3 000 zł, 2,5 s, 2 tygodnie.
//
// Używamy przy renderze treści, żeby „w” czy „z” nie zostawały same na końcu linii.

export const NBSP = ' ';

// Jednoliterowy wyraz: przed nim początek tekstu, odstęp albo znak otwierający.
// Lookbehind patrzy na oryginalny tekst, więc łapie też ciągi typu „a i w domu”.
const SINGLE_LETTER = /(?<=^|[\s („"'‚[–—-])([aiouwz]) (?=\S)/giu;

// Liczba, spacja, jednostka zakończona granicą wyrazu (np. „5 stron” nie pasuje do „s”).
const NUMBER_UNIT = /(\d) (?=(?:px|zł|%|ms|s|dni|tygodnie|min)(?![\p{L}\p{N}]))/gu;

export function sierotki(text: string): string {
  return text.replace(SINGLE_LETTER, `$1${NBSP}`).replace(NUMBER_UNIT, `$1${NBSP}`);
}
