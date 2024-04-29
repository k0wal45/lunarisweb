import { client } from "@/sanity/client";
import BlogItem from "./BlogItem";
import { Post } from "@/utils/interface";

const getPosts = async () => {
  const EVENTS_QUERY = `*[
    _type == "post"
    ][0...4] | order(publishedAt) {
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

const BlogSection = async () => {

	const posts: any = await getPosts()

  return (
		<section className='
		relative p-4 lg:m-12
		flex flex-col items-center justify-center gap-8
	'>
		<div className="flex flex-col gap-8 items-center justify-center lg:w-1/2 text-center">
			<h5 className="text-3xl lg:text-6xl font-bold">Sprawdź najnowsze posty na blogu</h5>
			<p>Znajdziesz tu najnowsze posty z naszego bloga. Dowiedz się wiecej o tworzeniu storn internetowych i nie tylko!</p>
		</div>

		<div className=" w-full flex justify-around items-start">
		{
        posts?.map((post: Post) => (
          <BlogItem post={post} />
        ))
      }
		</div>

	</section>
  )
}

export default BlogSection