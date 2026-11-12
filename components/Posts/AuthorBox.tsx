// Ramka „O autorze” pod wpisem: zdjęcie, imię Brygadą, jedno zdanie i link do O mnie.

import Image from "next/image";
import { TextLink, Typography } from "@/components/ui";
import { POST_PAGE } from "@/lib/wiedza";
import portrait from "@/public/img/daniel-kowalski-portret.jpg";

export default function AuthorBox() {
  return (
    <aside
      aria-label="O autorze"
      className="mt-24 grid max-w-[64ch] grid-cols-[120px_minmax(0,1fr)] items-start gap-6 border-y border-edge py-8"
    >
      <Image
        src={portrait}
        alt={POST_PAGE.author}
        sizes="120px"
        className="block h-37.5 w-30 object-cover"
      />
      <div>
        <Typography as="p" variant="h3">
          {POST_PAGE.author}
        </Typography>
        <Typography variant="ui" tone="muted" className="mt-2">
          {POST_PAGE.authorBio}
        </Typography>
        <p className="mt-4 text-ui">
          <TextLink href={POST_PAGE.authorLink.href}>{POST_PAGE.authorLink.label}</TextLink>
        </p>
      </div>
    </aside>
  );
}
