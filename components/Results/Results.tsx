import React from "react";
import { Button, Container, Typography } from "../ui";
import Link from "next/link";

type ResultType = {
  id: number;
  name: string;
  tag: string;
  stat?: string;
  statInfo: string;
  href: string;
};

const RESULTS_DATA = [
  {
    id: 1,
    name: "Bielik Summit",
    tag: "wydarzenie AI",
    stat: "450+",
    statInfo: "uczestników",
    href: "/realizacje/bielik-summit-2025",
  },
  {
    id: 2,
    name: "Stan Floty",
    tag: "aplikacja internetowa",
    stat: "",
    statInfo: "aplikacja do zarządania wypożyczalnia",
    href: "/realizacje/bielik-summit-2025",
  },
  {
    id: 3,
    name: "Oktech Śląsk",
    tag: "indentyfikacja wizualna",
    stat: "1",
    statInfo: "styl w całej firmie",
    href: "/realizacje/bielik-summit-2025",
  },
];

const Results = () => {
  return (
    <Container size="base" className="flex-col">
      <div className="flex flex-wrap justify-between items-center gap-4 p-8">
        <Typography variant="h2">Wyniki, nie obietnice</Typography>
        <Button variant="secondary" href="/realizacje">
          Zobacz realizacje
        </Button>
      </div>
      {RESULTS_DATA.map((result: ResultType) => (
        <Link
          href={result.href}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 last:items-end border-y border-edge hover:border-white p-8 bg-transparent duration-200 group"
          key={result.id}
        >
          <Typography variant="h2" className="relative w-fit">
            {result.name}
            <span className="absolute block top-0 w-full h-full border-b border-white scale-x-0 group-hover:scale-x-100 duration-100 origin-left"></span>
          </Typography>
          <Typography
            variant="body"
            tone="muted"
            className="sm:text-center self-center"
          >
            {result.tag}
          </Typography>
          <div className="flex items-end sm:justify-end gap-2 self-center">
            {result.stat && (
              <Typography as="p" variant="stat">
                {result.stat}
              </Typography>
            )}
            <Typography as="p" variant="body" tone="muted">
              {result.statInfo}
            </Typography>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default Results;
