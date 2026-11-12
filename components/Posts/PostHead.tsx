// Nagłówek wpisu: okruszki do Wiedzy, tytuł, lead i podpis autora ze zdjęciem, datą i czasem czytania.

import Image from "next/image";
import JsonLd from "@/components/JsonLd";
import PageHead from "@/components/PageHead";
import { articleLd } from "@/lib/seo";
import { postHref } from "@/lib/wiedza-kinds";
import { KNOWLEDGE_PAGE, POST_PAGE, postMeta, type Post } from "@/lib/wiedza";
import portrait from "@/public/img/daniel-kowalski-portret.jpg";

export default function PostHead({ post }: { post: Post }) {
  const meta = postMeta(post);
  return (
    <PageHead
      as="header"
      id="wpis-title"
      trail={[{ href: "/wiedza", label: KNOWLEDGE_PAGE.title }]}
      title={post.title}
      lead={post.lead}
      titleClassName="max-w-[20ch]"
      leadClassName="max-w-[52ch]"
    >
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.desc,
          path: postHref(post.slug),
          date: post.date,
        })}
      />
      <div className="mt-12 flex items-center gap-4">
        <Image src={portrait} alt="" sizes="48px" className="block h-15 w-12 object-cover" />
        <p className="text-small font-medium">
          <span className="block">{POST_PAGE.author}</span>
          {meta && <span className="block font-normal text-ash tabular-nums">{meta}</span>}
        </p>
      </div>
    </PageHead>
  );
}
