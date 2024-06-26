import BlogSection from "@/components/Blog/BlogSection";
import ContactSec from "@/components/ContactForm/ContactSec";
import FaqSection from "@/components/FAQ/FaqSection";
import Offers from "@/components/Offers/Offers";
import Panel from "@/components/reusable/Panel";

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <main className="flex flex-col pt-32 items-center justify-center w-full overflow-x-hidden">
        <article className='lg:max-w-4xl flex flex-col items-center justify-start gap-8 w-full pb-12 border-base border-b-2 p-4 text-lg'>
				  {children}
        </article>
			<BlogSection />
      <Panel
          title='Marketing w internecie to 1 krok do sukcesu!'
          text='Strona Internetowa to pierwszy krok jaki możesz podjąć aby rozbudować swój biznes i dać o sobie znać w internecie'
        /> 
      <Offers />
      <ContactSec />
      <FaqSection />
    </main>
  )
}

export default layout