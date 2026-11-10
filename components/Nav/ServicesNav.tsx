"use client";

// Podmenu „Usługi” w dwóch odmianach:
// - ServicesDropdown: desktop; otwiera się najechaniem myszą albo kliknięciem/Enterem,
//   zamyka Escape, kliknięciem obok i wyjściem fokusu. Wzorzec „disclosure” (przycisk + lista linków),
//   bez role="menu", bo to nawigacja, a nie menu aplikacji.
// - MenuServices: menu na telefonie; rozwijany wiersz z plusem w tarczy (design.md, sekcja 12).

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import { TextLink, textLinkVariants } from "@/components/ui";
import { cn } from "@/lib/cn";

export type ServiceLink = { href: string; label: string };

type Props = {
  label: string;
  items: readonly ServiceLink[];
  pathname: string;
  prefetch?: boolean;
};

const isCurrent = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(href + "/");

const TURN = "transition-transform duration-(--dur-phase) ease-terminator";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
      className={cn(TURN, open && "rotate-180")}
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ServicesDropdown({ label, items, pathname, prefetch }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const id = useId();
  const current = items.some((i) => isCurrent(pathname, i.href));

  useEffect(() => {
    if (!open) return;
    const onDown = (e: globalThis.PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  // najechanie tylko dla myszy; krótkie opóźnienie zamknięcia wybacza zjazd kursora na listę
  const onEnter = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const onLeave = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = window.setTimeout(() => setOpen(false), 160);
  };
  const onBlur = (e: FocusEvent) => {
    if (!rootRef.current?.contains(e.relatedTarget as Node | null))
      setOpen(false);
  };
  // myszą lista jest już otwarta od najechania, więc klik jej nie zamyka; klawiatura i dotyk przełączają
  const onClick = (e: MouseEvent) => {
    const native = e.nativeEvent as globalThis.PointerEvent;
    if (native.pointerType === "mouse") setOpen(true);
    else setOpen((o) => !o);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onBlur={onBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onClick}
        className={cn(
          textLinkVariants({ variant: "nav" }),
          "inline-flex cursor-pointer items-center gap-1.5",
          current && "underline",
        )}
      >
        {label}
        <Chevron open={open} />
      </button>

      {/* pt-4 to most nad szczeliną między przyciskiem a listą, żeby hover nie gasł po drodze */}
      <div
        id={id}
        hidden={!open}
        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
      >
        <ul className="min-w-64 border border-edge bg-night py-2">
          {items.map((item) => (
            <li key={item.href}>
              <TextLink
                href={item.href}
                prefetch={prefetch}
                variant="nav"
                className="block px-5 py-2.5 whitespace-nowrap"
                aria-current={
                  isCurrent(pathname, item.href) ? "page" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </TextLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PlusDisc({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-11 shrink-0 items-center justify-center rounded-disc border border-ash"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        focusable="false"
        className={cn(TURN, open && "rotate-45")}
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

export function MenuServices({
  label,
  items,
  pathname,
  prefetch,
  onNavigate,
}: Props & { onNavigate: () => void }) {
  const current = items.some((i) => isCurrent(pathname, i.href));
  // na podstronie usługi lista jest od razu rozwinięta
  const [open, setOpen] = useState(current);
  const id = useId();

  return (
    <div className="border-b border-edge">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-6 py-2 text-left font-display text-menu underline-offset-[0.15em]",
          current && "underline",
        )}
      >
        {label}
        <PlusDisc open={open} />
      </button>

      <ul id={id} hidden={!open} className="flex flex-col pb-4">
        {items.map((item) => (
          <li key={item.href}>
            <TextLink
              href={item.href}
              prefetch={prefetch}
              variant="nav"
              target="touch"
              className="text-lead"
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              onClick={onNavigate}
            >
              {item.label}
            </TextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
