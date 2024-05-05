'use client'
import { useRef } from "react"
import Description from "./Description"
import Form from "./Form"

const ContactSec = () => {

  const ref: any = useRef()

  return (
    <section ref={ref} className={`relative bg-[#ededed] lg:bg-contain flex flex-col mx-auto gap-4 p-4 py-12 w-ful items-center justify-center shadow-inner`}>
      <h6 className="text-3xl lg:text-6xl font-bold text-center">Skontaktuj sie ze mną</h6>
      <p className="text-center">Jeśli interesują cie moje usługi i chcesz się skontaktować napisz do mnie tutaj lub tylko umieść swój email abym mógł się z tobą skontaktować</p>
      <div className="flex flex-col lg:flex-row my-8 w-full items-center justify-center">
        <Description />
        <Form />
      </div>
  
    </section>
  )
}

export default ContactSec
