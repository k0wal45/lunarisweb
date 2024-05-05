import BlogSection from "@/components/Blog/BlogSection";

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <main className="flex flex-col pt-32 p-4 items-center justify-center">
        <article className='lg:max-w-5xl flex flex-col items-center justify-start gap-8 w-full pb-12 border-base border-b-2'>
				  {children}
        </article>
			<BlogSection />
    </main>
  )
}

export default layout