"use client";

// Lunaris web: rysowany księżyc do hero.
//
// - Czyste SVG, bez WebGL, canvas i bibliotek.
// - Renderuje się na serwerze, więc jest widoczny od pierwszej klatki i nie przesuwa układu (CLS 0).
// - Startuje od razu w dzisiejszej fazie (bez animacji wejścia), światło od początku idzie za kursorem.
//   Kursor na środku tarczy = pełnia, na krawędzi = kwadra, daleko = sierp.
// - Cieniowanie: gradient radialny liczony od punktu podsłonecznego. Najjaśniej tam, gdzie
//   światło pada prostopadle; ku terminatorowi powierzchnia płynnie gaśnie do Morza, więc
//   granica światła i cienia jest miękka. Brzeg całej tarczy lekko ciemnieje do Nocy.
// - Pętla animacji działa tylko wtedy, gdy coś się zmienia; w spoczynku zużycie CPU = 0.
// - Zatrzymuje się poza ekranem i w karcie w tle. Przy prefers-reduced-motion stoi w dzisiejszej fazie.
// - Na telefonie fazę zmienia przeciągnięcie palcem po tarczy.

import { useEffect, useId, useRef, type RefObject } from "react";
import {
  litShade,
  litShape,
  moonPhase,
  sunForPhase,
  terminator,
  type Vec3,
} from "@/lib/moon";
import { CRATERS, MARIA, MOON_COLORS } from "@/lib/moon-surface";

type MoonProps = {
  className?: string;
  /** Element, któremu ustawiamy --light-x / --light-y (np. nagłówek z klasą headline-lit). */
  lightTarget?: RefObject<HTMLElement | null>;
  /** Do testów i materiałów: konkretna data zamiast dzisiejszej. */
  date?: Date;
};

const NEW_MOON_LIGHT: Vec3 = [0, 0, -1];

// Paleta i rysunek powierzchni: wspólne z <PhaseMoon /> (lib/moon-surface.ts)
const { NIGHT, MARE, MOON, FULL, MOON_200, MOON_300 } = MOON_COLORS;

export default function Moon({ className, lightTarget, date }: MoonProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const clipRef = useRef<SVGPathElement>(null);
  const shadeRef = useRef<SVGGElement>(null);
  const shadeGradRef = useRef<SVGRadialGradientElement>(null);
  const termRef = useRef<SVGPathElement>(null);
  const blurRef = useRef<SVGFEGaussianBlurElement>(null);
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const clipId = "moon-lit-" + uid;
  const shadeId = "moon-shade-" + uid;
  const limbId = "moon-limb-" + uid;
  const blurId = "moon-blur-" + uid;
  // Pierwsza klatka (SSR): bez czytania bieżącej daty w renderze (Next zabrania new Date()
  // przy prerenderze). Bez propa `date` rysujemy nów, a efekt po montażu od razu ustawia
  // dzisiejszą fazę, bez animacji wejścia.
  const initLight = date
    ? sunForPhase(moonPhase(date).fraction)
    : NEW_MOON_LIGHT;
  const initShape = litShape(initLight);
  const initShade = litShade(initLight);
  const initTerm = terminator(initLight);
  const initTransform = `rotate(${initShape.angle.toFixed(1)} 50 50)`;

  useEffect(() => {
    const svg = svgRef.current;
    const clip = clipRef.current;
    const shade = shadeRef.current;
    const grad = shadeGradRef.current;
    const term = termRef.current;
    const blur = blurRef.current;
    if (!svg || !clip || !shade || !grad || !term || !blur) return;

    const fraction = moonPhase(date).fraction;
    const today = sunForPhase(fraction);

    let lastD = "";
    let lastT = "";
    let lastG = "";
    let lastTm = "";
    const apply = (L: Vec3) => {
      const { d, angle } = litShape(L);
      const t = `rotate(${angle.toFixed(1)} 50 50)`;
      if (d !== lastD) {
        clip.setAttribute("d", d);
        lastD = d;
      }
      if (t !== lastT) {
        clip.setAttribute("transform", t);
        shade.setAttribute("transform", t);
        lastT = t;
      }
      const { cx, r, transform } = litShade(L);
      const g = `${cx} ${r} ${transform}`;
      if (g !== lastG) {
        grad.setAttribute("cx", cx);
        grad.setAttribute("r", r);
        grad.setAttribute("gradientTransform", transform);
        lastG = g;
      }
      const tm = terminator(L);
      const tmKey = `${tm.d} ${tm.opacity} ${tm.width}`;
      if (tmKey !== lastTm) {
        term.setAttribute("d", tm.d);
        term.setAttribute("stroke-opacity", tm.opacity);
        term.setAttribute("stroke-width", tm.width);
        blur.setAttribute("stdDeviation", tm.blur);
        lastTm = tmKey;
      }
    };

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      apply(today);
      return;
    }

    const cur: Vec3 = [...today];
    let target: Vec3 = today;
    let raf = 0;
    let onScreen = true;
    apply(cur);

    const tick = () => {
      raf = 0;
      let moving = false;
      for (let i = 0; i < 3; i++) {
        const delta = target[i] - cur[i];
        if (Math.abs(delta) > 0.002) {
          cur[i] += delta * 0.12;
          moving = true;
        } else cur[i] = target[i];
      }
      apply(cur);
      if (moving) kick();
    };
    const kick = () => {
      if (!raf && onScreen && !document.hidden)
        raf = requestAnimationFrame(tick);
    };

    const aim = (e: PointerEvent) => {
      const r = svg.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const dist = Math.hypot(x, y);
      const z = Math.max(-0.9, 1 - 0.9 * dist); // środek: pełnia, krawędź: kwadra, daleko: sierp
      target = [x, -y, z];
      const h = lightTarget?.current;
      if (h && e.pointerType === "mouse") {
        const hr = h.getBoundingClientRect();
        h.style.setProperty(
          "--light-x",
          (((e.clientX - hr.left) / hr.width) * 100).toFixed(1) + "%",
        );
        h.style.setProperty(
          "--light-y",
          (((e.clientY - hr.top) / hr.height) * 100).toFixed(1) + "%",
        );
      }
      kick();
    };
    const onMouse = (e: PointerEvent) => {
      if (e.pointerType === "mouse") aim(e);
    };
    const onTouch = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") aim(e);
    };

    const fine = window.matchMedia("(pointer: fine)").matches;
    if (fine)
      window.addEventListener("pointermove", onMouse, { passive: true });
    svg.addEventListener("pointermove", onTouch, { passive: true });
    svg.addEventListener("pointerdown", onTouch, { passive: true });

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) kick();
      else if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(svg);
    const onVis = () =>
      document.hidden ? (raf && cancelAnimationFrame(raf), (raf = 0)) : kick();
    document.addEventListener("visibilitychange", onVis);

    kick();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMouse);
      svg.removeEventListener("pointermove", onTouch);
      svg.removeEventListener("pointerdown", onTouch);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, [date, lightTarget]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{ touchAction: "none", overflow: "visible" }}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            ref={clipRef}
            d={initShape.d}
            transform={initTransform}
            suppressHydrationWarning
          />
        </clipPath>

        {/* cień części oświetlonej: blask w punkcie podsłonecznym → czysta powierzchnia → Morze przy terminatorze.
            userSpaceOnUse w układzie obróconym „światło z prawej” (ten sam obrót co ścieżka światła). */}
        <radialGradient
          ref={shadeGradRef}
          id={shadeId}
          gradientUnits="userSpaceOnUse"
          cx={initShade.cx}
          cy="50"
          r={initShade.r}
          gradientTransform={initShade.transform}
          suppressHydrationWarning
        >
          <stop offset="0" stopColor={FULL} stopOpacity="0.45" />
          <stop offset="0.3" stopColor={FULL} stopOpacity="0" />
        </radialGradient>

        {/* rozmycie linii terminatora; obszar filtra stały, bo przy kwadrze ścieżka ma zerową szerokość */}
        <filter
          id={blurId}
          filterUnits="userSpaceOnUse"
          x="-20"
          y="-20"
          width="140"
          height="140"
        >
          <feGaussianBlur
            ref={blurRef}
            stdDeviation={initTerm.blur}
            suppressHydrationWarning
          />
        </filter>

        {/* ściemnienie brzegu całej tarczy (po obu stronach terminatora tak samo) */}
        <radialGradient id={limbId} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={NIGHT} stopOpacity="0" />
          <stop offset="0.8" stopColor={NIGHT} stopOpacity="0" />
          <stop offset="1" stopColor={NIGHT} stopOpacity="0.35" />
        </radialGradient>
      </defs>

      {/* nieoświetlona tarcza (Morze) i morza w cieniu */}
      <circle cx="50" cy="50" r="49.5" fill={MARE} />
      {/* <g fill={MOON_500}>
        {MARIA.map((d) => (
          <path key={d} d={d} />
        ))}
      </g> */}

      {/* część oświetlona: światło (Księżyc), rysunek powierzchni i cieniowanie pod jedną maską,
          żeby wygładzona krawędź terminatora nie zostawiała jasnej linii. opacity < 1 wymusza
          jedną warstwę: maska tnie gotowy wynik raz, a nie każdy element osobno (Chrome) */}
      <g clipPath={`url(#${clipId})`} opacity="0.999">
        <circle cx="50" cy="50" r="50" fill={MOON} />
        <g fill={MOON_200}>
          {MARIA.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g fill="none" stroke={MOON_300} strokeWidth="0.8">
          {CRATERS.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />
          ))}
        </g>
        <g ref={shadeRef} transform={initTransform} suppressHydrationWarning>
          <circle cx="50" cy="50" r="50" fill={`url(#${shadeId})`} />
          {/* cień wzdłuż terminatora (lib/moon: terminator) */}
          <path
            ref={termRef}
            d={initTerm.d}
            fill="none"
            stroke={MARE}
            strokeWidth={initTerm.width}
            strokeOpacity={initTerm.opacity}
            filter={`url(#${blurId})`}
            suppressHydrationWarning
          />
        </g>
      </g>
    </svg>
  );
}
