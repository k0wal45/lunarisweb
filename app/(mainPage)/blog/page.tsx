
import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { Post } from "@/utils/interface";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import BlogItem from "@/components/Blog/BlogItem";

export const revalidate = 10

// export const metadata: Metadata = {
//   title: "Lunaris Web - Blog",
//   description: "Tworzymy innowacyjne i błyskawiczne strony internetowe, bezpieczne oraz dostosowane do potrzeb klienta. Wejdź do świata internetu już teraz!",
// }

const getPost = async () => {
  const EVENTS_QUERY = `*[
    _type == "post"
    ] | order(publishedAt) {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    _id,
    tags[]-> {
      _id,
      slug,
      name
    }
    
    }`
  ;
    const event = await client.fetch(EVENTS_QUERY);
    return event
}



const BlogPage = async () => {

  const event: any = await getPost()

  return (
    <main className="flex gap-8 flex-wrap mt-72 min-h-screen">
      {
        event.map((post: Post) => (
          <BlogItem post={post} />
        ))
      }
    </main>
  )
}

export default BlogPage