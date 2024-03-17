import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import urlBuilder from "@sanity/image-url";
import {getImageDimensions} from '@sanity/asset-utils'

const slug = async ({ params }: { params: { slug: string } }) => {

const EVENTS_QUERY = `*[
  _type == "post"
  && slug.current == "${params.slug}"
][0]`;

const events = await client.fetch<SanityDocument[]>(EVENTS_QUERY);




  return (
    <div className="flex flex-col gap-8">
            <Link href='/' className="bg-blue-400 p-4 rounded-xl text-xl text-white">Home</Link>

    </div>
  )
}

export default slug
