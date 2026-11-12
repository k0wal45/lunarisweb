// Spis treści wpisu: lista kotwic z liniami, przyklejona na desktopie.

import type { Post } from "@/lib/wiedza";
import { POST_PAGE } from "@/lib/wiedza";

export default function PostToc({ items }: { items: Post["toc"] }) {
  if (items.length === 0) return null;
  return (
    <nav
      aria-label="Spis treści"
      className="col-span-12 mb-12 text-ui md:sticky md:top-8 md:col-span-3 md:mb-0"
    >
      <span className="text-small font-medium text-ash">{POST_PAGE.toc}</span>
      <ol className="mt-4 border-t border-edge">
        {items.map((t) => (
          <li key={t.id} className="border-b border-edge">
            <a
              href={`#${t.id}`}
              className="block py-3 text-ash no-underline transition-colors duration-(--dur-micro) hover:text-moon"
            >
              {t.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
