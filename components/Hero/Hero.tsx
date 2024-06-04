
import Image from "next/image"
import BtnLink from "../reusable/btn-link"
import classes from './hero.module.css'
import TyperWriter from "./TypeWriter/TypeWriter"
import AppearFromLeft from "../Animations/AppearFromLeft"

function Hero() {

	const heroText = [
		'Tworzymy Strony Internetowe',
		3000, 
		'Tworzymy Logotypy',
		3000,
		'Tworzymy Banery Reklamowe',
		3000,
		
	]

return (
		<section className="flex justify-center items-end min-h-screen max-w-screen relative overflow-hidden border-b-2 border-neutral-200 pb-0">
			<div className="text-start flex flex-col lg:flex-row lg:pb-0 pt-32 lg:pt-0 justify-center items-center gap-24">
				<div className="flex flex-col gap-4 max-w-md p-4 lg:p-0">
						<AppearFromLeft>
							<h1 className="text-5xl font-[800] h-40"><TyperWriter sequence={heroText}/></h1>
						</AppearFromLeft>
						
						<AppearFromLeft>
							<p className="text-xl" >W dzisiejszych czasach strona internetowa i efektywny logotyp stanowią kluczowe elementy marketingu, które mają ogromne znaczenie zarówno online, jak i w świecie biznesu poza siecią.</p>
						</AppearFromLeft>

						<BtnLink link="/kontakt">Skontaktuj się po darmową wycenę</BtnLink> 
				</div>
				<div className={classes.circleContainer}>
					<Image src='/img/beztla.png' alt="Daniel Kowalski Zdjęcie" width={700} height={900} className="h-[30rem] lg:h-[90vh] lg:w-auto block z-30 object-cover"/>
				</div>

			</div>

    </section>
	)
}

export default Hero
