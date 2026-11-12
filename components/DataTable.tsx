// Tabela (design.md, sekcja 12: `.tbl`): nagłówki kolumn w Popiele nad linią Popiół, wiersze z liniami
// Krawędź, pierwsza kolumna jako nagłówek wiersza. Szeroka tabela przewija się w ramce, nie strona.
//   <DataTable columns={["Kryterium", "Od zera", "WordPress"]} rows={[["Szybkość", "…", "…"]]} />

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  columns: readonly string[];
  /** pierwsza komórka wiersza = nagłówek wiersza */
  rows: readonly (readonly [string, ...ReactNode[]])[];
  caption?: string;
  /** szerokość kolumn danych, np. "w-[34%]" */
  colClassName?: string;
  /** minimalna szerokość tabeli, poniżej której pojawia się przewijanie */
  minWidthClassName?: string;
  className?: string;
};

const CELL = "border-b border-edge py-4 pr-4 text-left align-top";

export default function DataTable({
  columns,
  rows,
  caption,
  colClassName,
  minWidthClassName,
  className,
}: Props) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <table className={cn("w-full border-collapse text-ui", minWidthClassName)}>
        {caption && (
          <caption className="caption-top pb-3 text-left text-small font-medium text-ash">
            {caption}
          </caption>
        )}
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={cn(CELL, "border-ash text-small font-medium text-ash", i > 0 && colClassName)}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([head, ...cells]) => (
            <tr key={head}>
              <th scope="row" className={cn(CELL, "font-medium")}>
                {head}
              </th>
              {cells.map((cell, i) => (
                <td key={i} className={CELL}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
