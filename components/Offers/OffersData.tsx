import { FaGlobe, FaPalette, FaTools } from 'react-icons/fa'
import { FaBoltLightning, FaMagnifyingGlass } from 'react-icons/fa6'

export const stronyInternetowe = {
  slug: 'strony-internetowe',
  hero: {
    header: 'strony internetowe',
    title: 'Profesjonalne i responsywne Strony Internetowe',
    text: 'Stworzymy dla Ciebie stronę internetową, która wyróżni Twoją markę w sieci.',
  },
  services: {
    title: 'Czym charakteryzują się nasze strony?',
    text: 'Tworzymy unikalne strony internetowe od podstaw, przeprowadzamy redesign istniejących witryn, optymalizujemy ich responsywność i wydajność. Integrujemy strony z systemami CMS, dbamy o SEO, łączymy z mediami społecznościowymi oraz oferujemy wsparcie techniczne i utrzymanie.',
    list: [
      {
        title: 'Tworzenie stron internetowych',
        icon: <FaGlobe />,
      },
      {
        title: 'Redisgn istniejących stron',
        icon: <FaPalette />,
      },
      {
        title: 'Zoptymalizowane pod kątem prędkości',
        icon: <FaBoltLightning />,
      },
      {
        title: 'Optymalizacja pod kątem SEO',
        icon: <FaMagnifyingGlass />,
      },
      {
        title: 'Możliwość edycji niektórych treści',
        icon: <FaTools />,
      },
    ]
  }
  
}


export const fullOffersData = [stronyInternetowe]