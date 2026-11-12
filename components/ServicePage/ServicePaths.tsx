// „Dwie ścieżki”: porównanie strony kodowanej od zera i WordPressa w tabeli.

import DataTable from "@/components/DataTable";
import SectionHead from "@/components/SectionHead";
import { Container } from "@/components/ui";
import type { Service } from "@/lib/uslugi";

export default function ServicePaths({ paths }: { paths: Service["paths"] }) {
  if (!paths) return null;
  return (
    <Container as="section" aria-labelledby="sciezki-title" className="pt-(--section)">
      <SectionHead id="sciezki-title" title={paths.title}>
        {paths.note}
      </SectionHead>
      <DataTable
        columns={paths.columns}
        rows={paths.rows}
        colClassName="w-[34%]"
        minWidthClassName="min-w-180"
      />
    </Container>
  );
}
