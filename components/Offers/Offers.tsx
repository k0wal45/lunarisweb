import OfferCard from "./Card"
import { MdOutlineWeb } from "react-icons/md"
import { PiPencilCircle } from "react-icons/pi"
import { FaAddressCard } from "react-icons/fa"

const Offers = () => {
  return (
    <section className="flex flex-col items-center justift-center gap-8 mx-auto text-white p-4 my-12">
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <h6 className="text-4xl font-bold">Jakie usługi oferuje?</h6>
        <p className="lg:w-2/3">Świadcze usługi tworzenia kompelksowych stron internetowycyh, logotypów i wszelkiego rodzaju materiałów reklamowych takich jak wizytówki czy banery</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-16 items-center justify-center py-12">
        <OfferCard 
          title='Logotypy'
          text='Nowoczesne, responsywne strony internetowe kompatybilne z wszystkimi urządzeniami.'
          link='logotypy'
          img='placeholder.jpg'
          icon={<PiPencilCircle />}
        />
        <OfferCard 
          title='Strony Internetowe'
          text='Nowoczesne, responsywne strony internetowe kompatybilne z wszystkimi urządzeniami.'
          link='strony-internetowe'
          img='placeholder.jpg'
          icon={<MdOutlineWeb />}
        />
        <OfferCard 
          title='Materiały Reklamowe'
          text='Wizytówki, Banery Reklamowe i wiele innych rzeczy które pomogą ci zdobyć klientów'
          link='grafika koputerowa'
          img='placeholder.jpg'
          icon={<FaAddressCard />}
        />
        
        
    
      </div>
    </section>
  )
}

export default Offers