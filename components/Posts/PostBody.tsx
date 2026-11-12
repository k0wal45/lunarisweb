// Treść wpisu: spis treści przyklejony z lewej (na telefonie nad tekstem), tekst w `.prose`
// (app/globals.css) i ramka o autorze pod tekstem.

import { Container } from "@/components/ui";
import type { Post } from "@/lib/wiedza";
import AuthorBox from "./AuthorBox";
import PostToc from "./PostToc";

export default function PostBody({ post }: { post: Post }) {
  const { Body } = post;
  if (!Body) return null;
  return (
    <Container className="pt-16 md:pt-24">
      <div className="grid grid-cols-12 items-start gap-x-(--gutter)">
        <PostToc items={post.toc} />
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <div className="prose">
            <Body />
          </div>
          <AuthorBox />
        </div>
      </div>
    </Container>
  );
}
