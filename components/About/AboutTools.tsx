// O mnie: portret, narzędzia jako etykiety i oś czasu „Po drodze” (pozycje bez roku są pomijane).

import Image from "next/image";
import { Container, Tag, Typography } from "@/components/ui";
import { ABOUT_TOOLS } from "@/lib/o-mnie";
import { sierotki } from "@/lib/sierotki";
import portrait from "@/public/img/daniel-kowalski-portret.jpg";

export default function AboutTools() {
  const timeline = ABOUT_TOOLS.timeline.filter((t) => t.year);
  return (
    <Container as="section" aria-labelledby="narzedzia-title" className="pt-(--section)">
      <div className="grid grid-cols-12 items-center gap-x-(--gutter) gap-y-8">
        <figure className="col-span-8 m-0 bg-mare md:col-span-4">
          <Image
            src={portrait}
            alt={ABOUT_TOOLS.photoAlt}
            placeholder="blur"
            sizes="(min-width: 961px) 30vw, 62vw"
            className="block aspect-4/5 h-auto w-full object-cover"
          />
        </figure>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <Typography id="narzedzia-title" variant="h2">
            {ABOUT_TOOLS.title}
          </Typography>
          <Typography tone="muted" className="mt-6 max-w-[48ch]">
            {ABOUT_TOOLS.lead}
          </Typography>

          <ul aria-label="Technologie" className="mt-8 flex flex-wrap gap-2">
            {ABOUT_TOOLS.tools.map((t) => (
              <Tag key={t} as="li">
                {t}
              </Tag>
            ))}
          </ul>

          {timeline.length > 0 && (
            <>
              <Typography as="h3" variant="h3" className="mt-16">
                {ABOUT_TOOLS.timelineTitle}
              </Typography>
              <ol className="mt-6 border-t border-edge">
                {timeline.map((t) => (
                  <li
                    key={t.text}
                    className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-6 border-b border-edge py-5"
                  >
                    <span className="text-ui font-medium text-ash tabular-nums">{t.year}</span>
                    <span>{sierotki(t.text)}</span>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </div>
    </Container>
  );
}
