// O mnie: zdjęcie po lewej, „kim jestem” i metryczka po prawej, wyrównane do dołu zdjęcia.

import Image from "next/image";
import FactList from "@/components/FactList";
import { Container, Typography } from "@/components/ui";
import { ABOUT_INTRO } from "@/lib/o-mnie";
import seated from "@/public/img/daniel-kowalski-stolek.jpg";

export default function AboutIntro() {
  return (
    <Container as="section" aria-label="Kim jestem" className="pt-16 md:pt-24">
      <div className="grid grid-cols-12 items-end gap-x-(--gutter) gap-y-12">
        <figure className="col-span-11 m-0 bg-mare md:col-span-6">
          <Image
            src={seated}
            alt={ABOUT_INTRO.photoAlt}
            placeholder="blur"
            preload
            sizes="(min-width: 961px) 45vw, 92vw"
            className="block aspect-4/5 h-auto w-full object-cover"
          />
        </figure>

        <div className="col-span-12 pb-2 md:col-span-5 md:col-start-8">
          <Typography variant="lead" className="max-w-[40ch]">
            {ABOUT_INTRO.lead}
          </Typography>
          <Typography tone="muted" className="mt-6 max-w-[46ch]">
            {ABOUT_INTRO.text}
          </Typography>
          <FactList items={ABOUT_INTRO.facts} className="mt-12" />
        </div>
      </div>
    </Container>
  );
}
