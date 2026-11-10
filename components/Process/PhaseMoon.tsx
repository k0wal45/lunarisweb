"use client";

// Księżyc sekcji procesu: ta sama tarcza i powierzchnia co w hero, ale fazę ustawia prop `fraction`
// (0 nów, 0,5 pełnia). Zmiana fazy płynie (ścieżka maski liczona co klatkę z lib/moon),
// przy prefers-reduced-motion przeskakuje od razu. Bez kursora i bez wschodu.

import { useEffect, useId, useRef, useState } from "react";
import { litShade, litShape, sunForPhase, terminator } from "@/lib/moon";
import { CRATERS, MARIA, MOON_COLORS } from "@/lib/moon-surface";

const { NIGHT, MARE, MOON, FULL, MOON_200, MOON_300 } = MOON_COLORS;

const DURATION = 900; // ms; dłużej niż --dur-phase, bo to duża powierzchnia
const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; // zbliżone do --ease-terminator

function geometry(fraction: number) {
  const light = sunForPhase(fraction);
  const shape = litShape(light);
  const shade = litShade(light);
  return {
    d: shape.d,
    transform: `rotate(${shape.angle.toFixed(1)} 50 50)`,
    shade,
    term: terminator(light),
  };
}

type Props = { fraction: number; className?: string };

export default function PhaseMoon({ fraction, className }: Props) {
  const uid = useId().replace(/:/g, "");
  const clipId = `pm-clip-${uid}`;
  const shadeId = `pm-shade-${uid}`;
  const limbId = `pm-limb-${uid}`;
  const blurId = `pm-blur-${uid}`;

  const clipRef = useRef<SVGPathElement>(null);
  const shadeRef = useRef<SVGGElement>(null);
  const gradRef = useRef<SVGRadialGradientElement>(null);
  const termRef = useRef<SVGPathElement>(null);
  const blurRef = useRef<SVGFEGaussianBlurElement>(null);
  const shown = useRef(fraction);

  // pierwszy render (także na serwerze) od razu w docelowej fazie
  const [init] = useState(() => geometry(fraction));

  useEffect(() => {
    const from = shown.current;
    const to = fraction;
    if (from === to) return;

    const apply = (f: number) => {
      const g = geometry(f);
      clipRef.current?.setAttribute("d", g.d);
      clipRef.current?.setAttribute("transform", g.transform);
      shadeRef.current?.setAttribute("transform", g.transform);
      const grad = gradRef.current;
      if (grad) {
        grad.setAttribute("cx", g.shade.cx);
        grad.setAttribute("r", g.shade.r);
        grad.setAttribute("gradientTransform", g.shade.transform);
      }
      const term = termRef.current;
      if (term) {
        term.setAttribute("d", g.term.d);
        term.setAttribute("stroke-opacity", g.term.opacity);
        term.setAttribute("stroke-width", g.term.width);
      }
      blurRef.current?.setAttribute("stdDeviation", g.term.blur);
      shown.current = f;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION);
      apply(from + (to - from) * ease(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [fraction]);

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <path ref={clipRef} d={init.d} transform={init.transform} />
        </clipPath>
        <radialGradient
          ref={gradRef}
          id={shadeId}
          gradientUnits="userSpaceOnUse"
          cx={init.shade.cx}
          cy="50"
          r={init.shade.r}
          gradientTransform={init.shade.transform}
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
          <feGaussianBlur ref={blurRef} stdDeviation={init.term.blur} />
        </filter>
        <radialGradient id={limbId} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={NIGHT} stopOpacity="0" />
          <stop offset="0.8" stopColor={NIGHT} stopOpacity="0" />
          <stop offset="1" stopColor={NIGHT} stopOpacity="0.35" />
        </radialGradient>
      </defs>

      {/* nieoświetlona tarcza */}
      <circle cx="50" cy="50" r="49.5" fill={MARE} />

      {/* część oświetlona pod jedną maską (opacity < 1 = jedna warstwa, bez jasnej linii na terminatorze) */}
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
        <g ref={shadeRef} transform={init.transform}>
          <circle cx="50" cy="50" r="50" fill={`url(#${shadeId})`} />
          {/* cień wzdłuż terminatora (lib/moon: terminator) */}
          <path
            ref={termRef}
            d={init.term.d}
            fill="none"
            stroke={MARE}
            strokeWidth={init.term.width}
            strokeOpacity={init.term.opacity}
            filter={`url(#${blurId})`}
          />
        </g>
      </g>

      {/* ściemnienie brzegu całej tarczy */}
      <circle cx="50" cy="50" r="50" fill={`url(#${limbId})`} />
    </svg>
  );
}
