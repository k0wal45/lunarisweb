import { client } from "@/sanity/client";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Post } from "@/utils/interface";
import { PortableText } from "@portabletext/react";
import classes from './post.module.css'
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";



const getPost = async (slug:string) => {
  const EVENTS_QUERY = `*[
    _type == "post" && slug.current == "${slug}"
    ][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
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


// export async function generateMetadata(slug:string) {

//   const product = await getPost(slug)
 
//   return {
//     title: product.title,
//   }
// }

const slug = async ({params}: Params) => {

  const event: Post = await getPost(params?.slug)

  const component = {
    types: {
      image: ({value}: any) => (
        <Image src={urlForImage(value).url()} alt="Post Image" width={800} height={500}/>
      ),
    }
  }
  

  return (
    <section className={`${classes.post} flex p-4 flex-col items-center justify-center gap-8 w-full `}>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{event?.title}</h1>
        <div className="flex gap-4">
          {event?.tags?.map((tag) => (
            <Link key={tag?.slug?.current} href={`${tag.slug?.current}`} className="p-2 rounded-xl bg-yellow-500">{tag.name}</Link>
          ))}
        </div>
        <span className="text-sm text-base">{new Date(event?.publishedAt).toDateString()}</span>
      </div>
      <div className="flex flex-col gap-2 lg:max-w-5xl w-full rounded-xl p-8 text-black">
        <PortableText 
          value={event?.body}
          components={component}
        />
      </div>
    </section>
  )
}

export default slug
