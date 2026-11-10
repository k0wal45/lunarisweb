"use client";

// Proces „Od nowiu do pełni” (design.md: hasło procesu, sekcja 12 „Proces”, sekcja 11 „Fazy”).
// Po lewej 4 etapy z glifami faz, po prawej duży księżyc w fazie aktywnego etapu.
//
// Zmiana etapu:
// - sama co 5 s; odliczanie pokazuje linia pod aktywnym etapem, a koniec jej animacji przełącza etap,
//   więc pauza linii = pauza timera,
// - kliknięcie w etap wybiera go i odlicza 5 s od nowa (automat działa dalej),
// - pauza: przycisk-tarcza pod listą (WCAG 2.2.2), fokus z klawiatury w sekcji, sekcja poza ekranem,
// - prefers-reduced-motion: automat startuje zatrzymany; można go włączyć tym samym przyciskiem.

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FocusEvent,
} from "react";
import { Button, Container, Grid, Typography } from "@/components/ui";
import { litShape, sunForPhase } from "@/lib/moon";
import { cn } from "@/lib/cn";
import PhaseMoon from "./PhaseMoon";

type Step = {
  title: string;
  text: string;
  /** faza księżyca: 0 nów, 0,5 pełnia */
  fraction: number;
  phase: string;
};

// TODO: potwierdzić terminy i zakres etapów (wzorzec sprzedażowy 7: tylko sprawdzalne obietnice).
// faza, przy której oświetlona jest dana część tarczy (0–1): odwrotność illumination z lib/moon
const lit = (part: number) => Math.acos(1 - 2 * part) / (2 * Math.PI);

const STEPS: Step[] = [
  {
    title: "Rozmowa i wycena",
    text: "Rozmawiamy o firmie, celu strony i budżecie. Po rozmowie wysyłam wycenę z zakresem i terminem.",
    fraction: lit(0.25),
    phase: "sierp przybywający",
  },
  {
    title: "Projekt i prototyp",
    text: "Projektuję układ i wygląd. Klikasz w prototyp i zgłaszasz poprawki, zanim powstanie kod.",
    fraction: lit(0.5),
    phase: "pierwsza kwadra",
  },
  {
    title: "Wdrożenie i publikacja",
    text: "Koduję stronę, podpinam domenę i analitykę. Przed publikacją sprawdzam Lighthouse i dostępność.",
    fraction: lit(0.75),
    phase: "garb przybywający",
  },
  {
    title: "Opieka i rozwój",
    text: "Po publikacji dbam o aktualizacje i kopie zapasowe. Stronę rozwijamy razem z firmą.",
    fraction: lit(1),
    phase: "pełnia",
  },
];

const INTERVAL = 5000;

const illumination = (f: number) =>
  Math.round(((1 - Math.cos(2 * Math.PI * f)) / 2) * 100);

// prefers-reduced-motion jako zewnętrzny stan (na serwerze: false)
const RM = "(prefers-reduced-motion: reduce)";
const subscribeRM = (cb: () => void) => {
  const mq = window.matchMedia(RM);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const useReducedMotion = () =>
  useSyncExternalStore(
    subscribeRM,
    () => window.matchMedia(RM).matches,
    () => false,
  );

/** Glif fazy 44 px (design.md, sekcja 11): obrys tarczy w Popiele + oświetlona część w kolorze Księżyc. */
function PhaseGlyph({
  fraction,
  active,
}: {
  fraction: number;
  active: boolean;
}) {
  const { d, angle } = litShape(sunForPhase(fraction));
  return (
    <svg
      viewBox="0 0 100 100"
      className="size-11 shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={d}
        transform={`rotate(${angle.toFixed(1)} 50 50)`}
        className={cn(
          "transition-[fill] duration-(--dur-phase) ease-terminator",
          active ? "fill-moon" : "fill-ash",
        )}
      />
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        strokeWidth="4"
        className="stroke-ash"
      />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9.5 7v10M14.5 7v10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9 7.2v9.6a.6.6 0 0 0 .9.5l7.6-4.8a.6.6 0 0 0 0-1L9.9 6.7a.6.6 0 0 0-.9.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Process() {
  const [active, setActive] = useState(0);
  // null = wybór domyślny (gra, chyba że użytkownik ogranicza ruch); true/false = decyzja użytkownika
  const [userPlay, setUserPlay] = useState<boolean | null>(null);
  // licznik kliknięć: nowy key paska = odliczanie od zera, także po kliknięciu w aktywny etap
  const [restart, setRestart] = useState(0);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [inView, setInView] = useState(false);
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      rootMargin: "-20% 0px -20% 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const playing = userPlay ?? !reduced;
  const paused = keyboardFocus || !inView;
  const step = STEPS[active];

  const next = () => setActive((i) => (i + 1) % STEPS.length);
  const choose = (i: number) => {
    setActive(i);
    setRestart((n) => n + 1);
  };
  // pauzujemy tylko przy fokusie z klawiatury: fokus po kliknięciu myszą nie zatrzymuje automatu
  const onFocus = (e: FocusEvent) =>
    setKeyboardFocus((e.target as HTMLElement).matches(":focus-visible"));
  const onBlur = (e: FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null))
      setKeyboardFocus(false);
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="proces-title"
      className="overflow-x-clip"
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <Container size="base">
        <Grid rows="md" className="items-center">
          <div className="col-span-12 md:col-span-6">
            <Typography id="proces-title" variant="h2">
              Od nowiu do pełni.
            </Typography>
            <Typography
              variant="body"
              tone="muted"
              className="mt-6 max-w-[44ch]"
            >
              Cztery etapy, w których strona nabiera światła. Na każdym wiesz,
              co się dzieje i co będzie dalej.
            </Typography>
          </div>

          {/* desktop: księżyc po prawej, częściowo poza kadrem (design.md, sekcja 11); telefon: wyśrodkowany nad listą */}
          <figure className="col-span-12 md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1">
            <PhaseMoon
              fraction={step.fraction}
              className="mx-auto block aspect-square w-[70vw] max-w-sm sm:w-[52vw] md:mr-[calc(-1*clamp(40px,6vw,140px))] md:ml-auto md:w-full md:max-w-none"
            />
            <figcaption className="mt-6 text-center text-small text-ash md:text-right">
              Etap {active + 1} z {STEPS.length}: {step.phase},{" "}
              <span className="tabular-nums">
                {illumination(step.fraction)}%
              </span>{" "}
              tarczy
            </figcaption>
          </figure>

          <div className="col-span-12 md:col-span-6">
            <ol className="border-t border-edge">
              {STEPS.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.title} className="relative border-b border-edge">
                    <button
                      type="button"
                      aria-current={isActive ? "step" : undefined}
                      onClick={() => choose(i)}
                      className="grid w-full cursor-pointer grid-cols-[2.75rem_1fr] items-start gap-x-5 py-6 text-left"
                    >
                      <PhaseGlyph fraction={s.fraction} active={isActive} />
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block font-display text-h3 font-medium transition-colors duration-(--dur-phase) ease-terminator",
                            isActive ? "text-moon" : "text-ash",
                          )}
                        >
                          <span className="tabular-nums">{i + 1}.</span>{" "}
                          {s.title}
                        </span>
                        <span className="mt-2 block max-w-[52ch] text-ui text-ash">
                          {s.text}
                        </span>
                      </span>
                    </button>

                    {/* odliczanie do następnego etapu: koniec animacji = zmiana etapu */}
                    {isActive && playing && (
                      <span
                        key={restart}
                        aria-hidden="true"
                        onAnimationEnd={next}
                        className="absolute inset-x-0 -bottom-px h-px origin-left bg-moon animate-[step-progress_linear_forwards]"
                        style={{
                          animationDuration: `${INTERVAL}ms`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="mt-6 flex items-center gap-4">
              <Button
                variant="disc"
                size="icon"
                aria-label={
                  playing
                    ? "Zatrzymaj automatyczną zmianę etapów"
                    : "Włącz automatyczną zmianę etapów"
                }
                onClick={() => setUserPlay(!playing)}
              >
                {playing ? <PauseIcon /> : <PlayIcon />}
              </Button>
              <Typography as="span" variant="small" tone="muted">
                {playing
                  ? "Etapy zmieniają się co 5 s"
                  : "Automatyczna zmiana zatrzymana"}
              </Typography>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
