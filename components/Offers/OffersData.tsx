import { BiWorld } from 'react-icons/bi'
import { FaGlobe, FaTrophy } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'
import { RiMegaphoneFill } from 'react-icons/ri'

export const stronyInternetowe = {
  slug: 'strony-internetowe',
  hero: {
    header: 'strony internetowe',
    title: 'Najlepsza wizytówka twojego biznesu',
    text: 'Stworzymy dla Ciebie stronę internetową, która wyróżni Twoją markę w sieci',
    img: 'coding.mp4',
    list: [
      'Zwiększona widoczność i dostępność',
      'Profesjonalny wizerunek firmy w sieci',
      'Skuteczny'

    ]
  },
  advanteges: {
    title: 'Jakie są korzyści posiadania strony internetowej?',
    text: 'Strona internetowa zwiększa widoczność Twojej firmy, działa 24/7, buduje profesjonalny wizerunek i ułatwia komunikację z klientami. Umożliwia skuteczny marketing, dotarcie do globalnych klientów, zwiększa ruch i przychody. To kluczowe narzędzie, które zapewnia przewagę nad konkurencją.',
    list: [
      {
        title: 'Zwiększona Widoczność i Dostępność',
        icon: <FaGlobe />,
      },
      {
        title: 'Profesjonalny Wizerunek',
        icon: <GoGraph />,
      },
      {
        title: 'Szerszy Zasięg Rynkowy',
        icon: <BiWorld />,
      },
      {
        title: 'Marketing i Reklama',
        icon: <RiMegaphoneFill />
      },
      {
        title: 'Przewaga nad Konkurencją',
        icon: <FaTrophy />,
      },
    ]
  }
  
}


export const fullOffersData = [stronyInternetowe]