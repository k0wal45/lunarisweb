// TODO: podmienić na lunaris-logo-dark.svg
//
// Znak zastępczy z projektu na kanwasie: tarcza z garbem i trzema kreskami.
// Ścieżka garbu jest przeniesiona 1:1; kreski mają klasę .streak, którą .brand:hover
// wydłuża o 20% (lunaris.css). Dekoracja: dostępna nazwa jest w linku obok.

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 40"
      width="64"
      height="40"
      aria-hidden="true"
      focusable="false"
    >
      {/* tarcza w cieniu */}
      <circle cx="20" cy="20" r="18" fill="var(--color-mare)" />
      {/* garb przybywający: światło z prawej, cień po lewej (design.md, sekcja 3) */}
      <path d="M20 2 A18 18 0 0 1 20 38 A12.728 18 0 0 1 20 2 Z" fill="var(--color-moon)" />
      {/* kratery */}
      <g fill="var(--moon-200)">
        <circle cx="24" cy="13" r="2.6" />
        <circle cx="29" cy="24" r="2" />
        <circle cx="21" cy="29" r="1.4" />
      </g>
      {/* obwódka */}
      <circle cx="20" cy="20" r="18" fill="none" stroke="var(--color-moon)" strokeWidth="1.5" />
      {/* smugi */}
      <g stroke="var(--color-moon)" strokeWidth="2.2" strokeLinecap="round">
        <line className="streak" x1="44" y1="13" x2="56" y2="13" />
        <line className="streak" x1="44" y1="20" x2="61" y2="20" />
        <line className="streak" x1="44" y1="27" x2="52" y2="27" />
      </g>
    </svg>
  );
}
