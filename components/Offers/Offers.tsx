import OfferCard from "./Card"
import { MdOutlineWeb } from "react-icons/md"
import { PiPencilCircle } from "react-icons/pi"
import { FaAddressCard } from "react-icons/fa"
import CardMobile from "./CardMobile"
import AppearFromLeft from "../Animations/AppearFromLeft"
import AppearFromRight from "../Animations/AppearFromRight"

const Offers = () => {
  return (
    <section className={` bg-cover lg:bg-contain flex flex-col items-center justift-center gap-8 mx-auto p-4 my-12`}>
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <h5 className="text-3xl lg:text-5xl font-bold">Jakie usługi oferuje?</h5>
        <p className="lg:w-2/3 text-lg">Świadcze usługi tworzenia responsywnych i szybkich stron internetowycyh, logotypów i wszelkiego rodzaju materiałów reklamowych takich jak wizytówki czy banery reklamowe</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-16 items-center justify-center pb-12 pt-0 lg:pt-12 w-full">
        <AppearFromLeft>
          <OfferCard 
            title='Logotypy'
            text='Zapadające w pamięć oraz przyjemne dla oka logotypy dla każdej firmy'
            link='logotypy'
            img='logotyp.jpg'
            icon={<PiPencilCircle />}
          />
        </AppearFromLeft>

        <OfferCard 
          title='Strony Internetowe'
          text='Nowoczesne, responsywne strony internetowe kompatybilne z wszystkimi urządzeniami'
          link='strony-internetowe'
          img='strona.jpg'
          icon={<MdOutlineWeb />}
        />
        <AppearFromRight>
          <OfferCard 
            title='Materiały Reklamowe'
            text='Wizytówki, Banery Reklamowe i wiele innych rzeczy które pomogą Ci zdobyć klientów'
            link='grafika-komputerowa'
            img='wizytowka.jpg'
            icon={<FaAddressCard />}
          />
        </AppearFromRight>

        <CardMobile 
          title='Logotypy'
          text='Zapadające w pamięć oraz przyjemne dla oka logotypy dla każdej firmy'
          link='logotypy'
          img='logotyp.jpg'
          icon={<PiPencilCircle />}
        />
        <CardMobile 
          title='Strony Internetowe'
          text='Nowoczesne, responsywne strony internetowe kompatybilne z wszystkimi urządzeniami'
          link='strony-internetowe'
          img='strona.jpg'
          icon={<MdOutlineWeb />}
        />
        <CardMobile 
          title='Materiały Reklamowe'
          text='Wizytówki, Banery Reklamowe i wiele innych rzeczy które pomogą Ci zdobyć klientów'
          link='grafika-komputerowa'
          img='wizytowka.jpg'
          icon={<FaAddressCard />}
        />
        
        
    
      </div>
    </section>
  )
}

export default Offers
