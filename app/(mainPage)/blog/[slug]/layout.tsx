import BlogSection from "@/components/Blog/BlogSection";
import ContactSec from "@/components/ContactForm/ContactSec";
import Offers from "@/components/Offers/Offers";
import Panel from "@/components/reusable/Panel";

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <main className="flex flex-col pt-32 items-center justify-center w-full">
        <article className='lg:max-w-5xl flex flex-col items-center justify-start gap-8 w-full pb-12 border-base border-b-2 p-4'>
				  {children}
        </article>
			<BlogSection />
      <Panel
          title='Marketing w internecie to 1 krok do sukcesu!'
          text='Strona Internetowa to pierwszy krok jaki możesz podjąć aby rozbudować swój biznes i dać o sobie znać w internecie'
        /> 
      <Offers />
      <ContactSec />

    </main>
  )
}

export default layout