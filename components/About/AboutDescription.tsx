'use client'
import { useRef } from "react";
import {motion, useInView} from 'framer-motion'

import { IoPersonOutline } from 'react-icons/io5'
import { MdOutlineWeb } from 'react-icons/md'
import AppearFromLeft from "../Animations/AppearFromLeft";


const AboutDescription = () => {
  return (
    <div className="flex flex-col gap-4 lg:max-w-[50vw]">
      <h3 className="text-3xl lg:text-6xl font-bold">Z kim będziesz pracować?</h3>
      <p className="text-lg">Od pierwszego kontaktu z klientem po finalną realizację projektu, jestem z Tobą na każdym etapie. Lunaris Web to jedna osoba, która specjalizuje się w kompleksowej tworzeniu stron internetowych, logotypów i innych materiałów reklamowych. Nazywam się Daniel Kowalski i chce pomóc ci w rozrastaniu twojego bizensu</p>
      <div className="flex flex-wrap gap-4 items-center justify-start w-full">
         
        <div className="flex-1">
          <AppearFromLeft>
            <div className="flex gap-4 items-center">
              <div className="grid place-items-center rounded-full h-20  aspect-square text-white text-3xl bg-secondary">
                <IoPersonOutline />
              </div>
              <p className="text-3xl font-bold">Wszystko w rękach jednej osoby</p>
            </div>
          </AppearFromLeft>
        </div>

        <div className="flex-1">
          <AppearFromLeft>
            <div className="flex gap-4 items-center">
              <div className="grid place-items-center rounded-full h-20  aspect-square text-white text-3xl bg-secondary">
              <MdOutlineWeb />
              </div>
              <p className="text-3xl font-bold">Od kontaktu po realizacje</p>
            </div>
          </AppearFromLeft>
        </div>

      </div>

      
    </div>
  )
}

export default AboutDescription
