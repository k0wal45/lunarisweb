import { client } from "@/sanity/client";
import { Post } from "@/utils/interface";
import { PortableText } from "@portabletext/react";
import classes from './post.module.css'
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { Fragment } from "react";
import { redirect } from "next/navigation";

export const revalidate = 10

const getPost = async (slug:string) => {
  const EVENTS_QUERY = `*[
    _type == "post" && slug.current == "${slug}"
    ][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    _id,
    body,
    tags[]-> {
      _id,
      color,
      name
    }
    
    }`
  ;
    const event = await client.fetch(EVENTS_QUERY);
    return event
}

const slug = async ({params}: any) => {

  const event: Post = await getPost(params?.slug)

  const component = {
    types: {
      image: ({value}: any) => (
        <Image src={urlForImage(value).url()} alt="Post Image" width={800} height={500}/>
      ),
    }
  }

  

  return (
    !event ? redirect('/not-found') :
    <Fragment>
      <Image src={urlForImage(event?.mainImage).url()} width={1300} height={1000} alt={event?.title} className="w-full rounded-br-[6rem] lg:rounded-br-[13rem]" />
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold">{event?.title}</h1>
        <ul className="flex gap-4 my-2">
          {event.tags?.map((tag: any) => (
          <li key={tag._id} className={`px-2 py-1 rounded-xl text-md font-bold`} style={{background: tag.color}}>{tag.name}</li>
          ))}
        </ul>
        <span className="text-sm text-base">{new Date(event?.publishedAt).toDateString()}</span>
      </div>
      <div className={classes.post}>
        <PortableText 
          value={event?.body}
          components={component}
        />
      </div>
    </Fragment>
    
  )
}

export default slug
