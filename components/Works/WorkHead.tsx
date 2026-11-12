// Nagłówek studium przypadku: okruszki, nazwa, lead, metryczka i link do strony na żywo.

import FactList from "@/components/FactList";
import PageHead from "@/components/PageHead";
import { WORK_PAGE, WORKS_PAGE, type Work } from "@/lib/realizacje";

export default function WorkHead({ work }: { work: Work }) {
  const { facts } = WORK_PAGE;
  return (
    <PageHead
      id="realizacja-title"
      trail={[{ href: "/realizacje", label: WORKS_PAGE.title }]}
      crumb={work.name}
      title={work.name}
      lead={work.lead}
    >
      <FactList
        columns={4}
        className="mt-16"
        items={[
          { label: facts.sector, value: work.sector },
          { label: facts.scope, value: work.scope },
          { label: facts.technology, value: work.technology },
          { label: facts.year, value: work.year },
        ]}
      />
      {work.liveUrl && (
        <p className="mt-8 text-ui">
          <a
            href={work.liveUrl}
            className="underline decoration-1 underline-offset-[0.2em] hover:decoration-2"
          >
            {WORK_PAGE.live}
          </a>
        </p>
      )}
    </PageHead>
  );
}
