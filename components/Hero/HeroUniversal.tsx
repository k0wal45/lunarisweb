import AppearFromLeft from "@/components/Animations/AppearFromLeft"
import AppearFromRight from "@/components/Animations/AppearFromRight"

const Hero = ({slug, title, text}: {slug: string, title: string, text: string}) => {
  return (
    <section className="flex flex-col mt-40 mb-16 gap-12 items-center justify-center text-center">
      <AppearFromLeft>
				<p className="text-xl tracking-[4px] text-neutral-600 uppercase">{slug}</p>
			</AppearFromLeft>
			<AppearFromRight>
				<h1 className="text-4xl lg:text-6xl font-[500] max-w-6xl">{title}</h1>
			</AppearFromRight>
			<AppearFromLeft>
				<p className="text-xl">{text}</p>
			</AppearFromLeft>

    </section>
  )
}

export default Hero