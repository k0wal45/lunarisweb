// Znak Lunaris web. Źródło: public/svg/logo.svg (ta sama geometria, kolory wpisane na sztywno).
//
// Siatka 56 × 28, 1 jednostka = 1/28 wysokości znaku:
// - księżyc: środek (14, 14), obwódka r = 14, tarcza w cieniu r = 13 (obwódka 1),
//   garb: prawa połowa r = 13, terminator to półelipsa rx = 10, ry = 13;
// - kratery: r = 3, 2 i 1,25;
// - smugi: wysokość 2, zaokrąglenie 1, rzędy w osi y = 8, 14, 20 (symetrycznie ±6 od środka),
//   zewnętrzne rzędy zaczynają się 3 od księżyca (x = 31), środkowy 6 (x = 34) i kończy się na 56,
//   dolny: odcinek 10 + przerwa 2 + kreska 4.
// Przy najechaniu na link-rodzica z klasą `group` smugi wydłużają się o 20% po kolei.
// Krótka kreska przesuwa się o 2 = 10 × 0,2, więc przerwa w dolnym rzędzie zostaje równa.
// Opóźnienie działa tylko przy najechaniu, powrót jest od razu. Dekoracja: dostępna nazwa jest w linku.

import { cn } from "@/lib/cn";

const LIGHT = "fill-[#ced2dc]";

const STREAK =
  "[transform-box:fill-box] transition-transform duration-(--dur-micro) ease-terminator motion-reduce:group-hover:delay-0";
// wydłużenie od lewej krawędzi (od księżyca w prawo)
const GROW = cn(STREAK, "origin-left group-hover:scale-x-[1.2]");

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0 overflow-visible", className)}
      viewBox="0 0 56 28"
      width="72"
      height="36"
      aria-hidden="true"
      focusable="false"
    >
      {/* obwódka i tarcza w cieniu */}
      <circle cx="14" cy="14" r="14" className={LIGHT} />
      <circle cx="14" cy="14" r="13" className="fill-mare" />
      {/* garb: światło z prawej */}
      <path d="M14 1A13 13 0 0 1 14 27A10 13 0 0 1 14 1Z" className={LIGHT} />
      {/* kratery */}
      <g className="fill-moon-300">
        <circle cx="17" cy="7" r="3" />
        <circle cx="22" cy="14" r="2" />
        <circle cx="16" cy="20" r="1.25" />
      </g>

      {/* smugi: po kolei */}
      <g className={LIGHT}>
        <rect className={GROW} x="31" y="7" width="15" height="2" rx="1" />
        <rect
          className={cn(GROW, "group-hover:delay-100")}
          x="34"
          y="13"
          width="22"
          height="2"
          rx="1"
        />
        <rect
          className={cn(GROW, "group-hover:delay-200")}
          x="31"
          y="19"
          width="10"
          height="2"
          rx="1"
        />
        <rect
          className={cn(
            STREAK,
            "group-hover:translate-x-0.5 group-hover:delay-300",
          )}
          x="43"
          y="19"
          width="4"
          height="2"
          rx="1"
        />
      </g>
    </svg>
  );
}

/** Logo + znak słowny „Lunaris” z dopiskiem „web” (sekcja 3: znak słowny i układ). */
export function Wordmark() {
  return (
    <span className="font-display text-[26px] leading-none tracking-[-0.01em]">
      LunarisWeb
    </span>
  );
}
