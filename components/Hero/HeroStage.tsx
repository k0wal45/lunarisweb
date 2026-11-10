"use client";

// Kliencka część hero: nagłówek oświetlony i księżyc.
// Ref nagłówka idzie do <Moon />, który ustawia --light-x / --light-y za kursorem.
// Lead i przyciski przychodzą jako children i zostają wyrenderowane na serwerze.

import { useRef, type ReactNode } from "react";
import Moon from "@/components/Moon";
import { Container, Grid, Typography } from "@/components/ui";

// Telefon i tablet: księżyc za tekstem, w tle hasła. Wyciszony (opacity + wygaszenie ku dołowi),
// bez reakcji na dotyk, żeby nie blokował przewijania (Moon ma touch-action: none).
// Desktop: absolutny, środek w pionie, wychodzi poza prawą krawędź o clamp(80px, 12vw, 220px).
const MOON_BOX = [
  "pointer-events-none absolute -top-10 -right-[28vw] z-0 aspect-square w-[100vw] opacity-30",
  "[mask-image:linear-gradient(to_bottom,black_45%,transparent_95%)]",
  "sm:-right-[20vw] sm:w-[80vw]",
  "md:pointer-events-auto md:top-1/2 md:right-[calc(-1*clamp(80px,12vw,220px))] md:-translate-y-1/2",
  "md:w-[min(54vw,860px)] md:opacity-100 md:[mask-image:none]",
].join(" ");

type Props = {
  title: string;
  children: ReactNode;
};

export default function HeroStage({ title, children }: Props) {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      {/* tło hero: na telefonie wyciszony za tekstem, na desktopie po prawej */}
      <div className={MOON_BOX}>
        <Moon className="block h-auto w-full" lightTarget={headlineRef} />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center pt-4 pb-6">
        <Grid>
          {/* tekst w kolumnach 1–6, wyrównany do lewej */}
          <div className="col-span-12 min-w-0 md:col-span-6">
            <Typography
              ref={headlineRef}
              id="hero-title"
              variant="display"
              tone="lit"
            >
              {title}
            </Typography>
            {children}
          </div>
        </Grid>
      </Container>
    </>
  );
}
