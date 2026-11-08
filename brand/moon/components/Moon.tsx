'use client';

// Lunaris web: rysowany księżyc do hero.
//
// - Czyste SVG, bez WebGL, canvas i bibliotek: ok. 2–3 KB po gzip.
// - Renderuje się na serwerze, więc jest widoczny od pierwszej klatki i nie przesuwa układu (CLS 0).
// - Wschód: 1,2 s od nowiu do dzisiejszej fazy. Potem światło idzie za kursorem.
//   Kursor na środku tarczy = pełnia, na krawędzi = kwadra, daleko = sierp.
// - Pętla animacji działa tylko wtedy, gdy coś się zmienia; w spoczynku zużycie CPU = 0.
// - Zatrzymuje się poza ekranem i w karcie w tle. Przy prefers-reduced-motion stoi w dzisiejszej fazie.
// - Na telefonie fazę zmienia przeciągnięcie palcem po tarczy.

import { useEffect, useId, useRef, type RefObject } from 'react';
import { litShape, moonPhase, sunForPhase, type Vec3 } from '@/lib/moon';

type MoonProps = {
  className?: string;
  /** Element, któremu ustawiamy --light-x / --light-y (np. nagłówek z klasą .headline-lit). */
  lightTarget?: RefObject<HTMLElement | null>;
  /** Do testów i materiałów: konkretna data zamiast dzisiejszej. */
  date?: Date;
};

const NEW_MOON = litShape([0, 0, -1]);
const RISE_MS = 1200;

// Rysunek powierzchni: kilka plam mórz i kraterów. Stałe, nie obracają się ze światłem.
const MARIA = [
  'M28 30c6-6 16-6 20 0s-2 13-10 13-16-7-10-13z',
  'M56 27c5-4 13-3 15 3s-3 10-9 9-10-8-6-12z',
  'M60 44c6-2 14 1 14 7s-7 9-13 7-7-12-1-14z',
  'M19 49c4-5 11-4 13 2s-1 14-7 15-10-12-6-17z',
  'M44 62c4-3 10-2 11 3s-4 8-8 7-6-7-3-10z',
];
const CRATERS: [number, number, number][] = [
  [36, 76, 4], [70, 71, 3], [79, 36, 2.4], [24, 31, 2], [53, 87, 2.2], [64, 15, 1.8],
];

// cubic-bezier(0.65, 0, 0.35, 1) w przybliżeniu (easeInOutCubic)
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function Moon({ className, lightTarget, date }: MoonProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const litRef = useRef<SVGPathElement>(null);
  const clipRef = useRef<SVGPathElement>(null);
  const clipId = 'moon-lit-' + useId().replace(/[^a-zA-Z0-9_-]/g, '');

  useEffect(() => {
    const svg = svgRef.current;
    const lit = litRef.current;
    const clip = clipRef.current;
    if (!svg || !lit || !clip) return;

    const fraction = moonPhase(date).fraction;
    const today = sunForPhase(fraction);

    let lastD = '';
    let lastT = '';
    const apply = (L: Vec3) => {
      const { d, angle } = litShape(L);
      const t = `rotate(${angle.toFixed(1)} 50 50)`;
      if (d !== lastD) { lit.setAttribute('d', d); clip.setAttribute('d', d); lastD = d; }
      if (t !== lastT) { lit.setAttribute('transform', t); clip.setAttribute('transform', t); lastT = t; }
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { apply(today); return; }

    const cur: Vec3 = [...sunForPhase(0)];
    let target: Vec3 = today;
    let rising = true;
    let start = 0;
    let raf = 0;
    let onScreen = true;

    const tick = (now: number) => {
      raf = 0;
      if (rising) {
        if (!start) start = now;
        const t = Math.min(1, (now - start) / RISE_MS);
        const L = sunForPhase(fraction * ease(t));
        cur[0] = L[0]; cur[1] = L[1]; cur[2] = L[2];
        apply(cur);
        if (t < 1) { raf = requestAnimationFrame(tick); return; }
        rising = false;
      }
      let moving = false;
      for (let i = 0; i < 3; i++) {
        const delta = target[i] - cur[i];
        if (Math.abs(delta) > 0.002) { cur[i] += delta * 0.12; moving = true; } else cur[i] = target[i];
      }
      apply(cur);
      if (moving) kick();
    };
    const kick = () => {
      if (!raf && onScreen && !document.hidden) raf = requestAnimationFrame(tick);
    };

    const aim = (e: PointerEvent) => {
      const r = svg.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const y = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const dist = Math.hypot(x, y);
      const z = Math.max(-0.9, 1 - 0.9 * dist); // środek: pełnia, krawędź: kwadra, daleko: sierp
      target = [x, -y, z];
      const h = lightTarget?.current;
      if (h && e.pointerType === 'mouse') {
        const hr = h.getBoundingClientRect();
        h.style.setProperty('--light-x', (((e.clientX - hr.left) / hr.width) * 100).toFixed(1) + '%');
        h.style.setProperty('--light-y', (((e.clientY - hr.top) / hr.height) * 100).toFixed(1) + '%');
      }
      if (!rising) kick();
    };
    const onMouse = (e: PointerEvent) => { if (e.pointerType === 'mouse') aim(e); };
    const onTouch = (e: PointerEvent) => { if (e.pointerType !== 'mouse') aim(e); };

    const fine = window.matchMedia('(pointer: fine)').matches;
    if (fine) window.addEventListener('pointermove', onMouse, { passive: true });
    svg.addEventListener('pointermove', onTouch, { passive: true });
    svg.addEventListener('pointerdown', onTouch, { passive: true });

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) kick(); else if (raf) { cancelAnimationFrame(raf); raf = 0; }
    });
    io.observe(svg);
    const onVis = () => (document.hidden ? (raf && cancelAnimationFrame(raf), (raf = 0)) : kick());
    document.addEventListener('visibilitychange', onVis);

    kick();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMouse);
      svg.removeEventListener('pointermove', onTouch);
      svg.removeEventListener('pointerdown', onTouch);
      document.removeEventListener('visibilitychange', onVis);
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
      style={{ touchAction: 'none', overflow: 'visible' }}
    >
      <defs>
        <clipPath id={clipId}>
          <path ref={clipRef} d={NEW_MOON.d} />
        </clipPath>
      </defs>

      {/* nieoświetlona tarcza (Morze) i morza w cieniu (światło popielate) */}
      <circle cx="50" cy="50" r="49.5" fill="#1B2232" />
      <g fill="#262D3D">
        {MARIA.map((d) => <path key={d} d={d} />)}
      </g>

      {/* światło (Księżyc) */}
      <path ref={litRef} d={NEW_MOON.d} fill="#E6E8EC" />

      {/* rysunek powierzchni widoczny tylko w świetle */}
      <g clipPath={`url(#${clipId})`}>
        <g fill="#A3AABA">
          {MARIA.map((d) => <path key={d} d={d} />)}
        </g>
        <g fill="none" stroke="#7A8396" strokeWidth="0.8">
          {CRATERS.map(([cx, cy, r]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} />)}
        </g>
      </g>

      {/* obrys tarczy (Krawędź) */}
      <circle cx="50" cy="50" r="49.5" fill="none" stroke="#2C3548" strokeWidth="0.5" />
    </svg>
  );
}
