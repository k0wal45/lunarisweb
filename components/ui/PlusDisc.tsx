// Tarcza z plusem dla rozwijanych wierszy (design.md, sekcja 12: „Rozwijany wiersz”).
// Bez `open`: wewnątrz <details class="group/row"> — najechanie rozjaśnia obrys, otwarcie obraca plus.
// Z `open`: stan podaje rodzic (np. podmenu usług w nawigacji).

import { cn } from "@/lib/cn";

export function PlusDisc({ open }: { open?: boolean }) {
  const controlled = open !== undefined;
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-disc border border-ash",
        !controlled &&
          "transition-colors duration-(--dur-micro) ease-terminator group-hover/row:border-moon",
      )}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        focusable="false"
        className={cn(
          "transition-transform duration-(--dur-phase) ease-terminator",
          controlled ? open && "rotate-45" : "group-open/row:rotate-45",
        )}
      >
        <path
          d="M8 2.5v11M2.5 8h11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
