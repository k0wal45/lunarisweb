import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

   

const BlogItem = (post: any) => {

  return (
    <Link href={'/blog/' + post.post.slug.current} key={post.post._id} 
    className="
      flex flex-col gap-2 w-[23rem] h-min rounded-xl shadow-none
      lg:hover:translate-y-[-4px] lg:hover:translate-x-2 lg:hover:shadow-xl bg-neutral-800 text-white
      duration-200 transition-all
      lg:group
    ">
      <Image src={urlForImage(post.post.mainImage).url()} alt={post.post.title} width={400} height={300} className='w-full h-48 rounded-xl group-hover:translate-y-[-4px] group-hover:translate-x-2
        duration-200 transition-all'/>
      <div className="flex flex-col gap-2 p-4
        group-hover:translate-y-[-4px] group-hover:translate-x-2
        duration-200 transition-all
      ">
        <ul className="flex gap-4 ">
          {post.post.tags?.map((tag: any) => (
          <li key={tag._id} className={`px-2 py-1 rounded-xl text-sm font-bold`} style={{background: tag.color}}>{tag.name}</li>
          ))}
        </ul>

        <h2 className=" text-lg font-bold">{post.post.title}</h2>
        <p className="text-neutral-300">{post.post.excerpt}</p>
        <span className="text-sm text-base">{new Date(post?.post.publishedAt).toDateString()}</span>
      </div>

    </Link>
  )
}

export default BlogItem