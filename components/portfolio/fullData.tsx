import { SiNextdotjs, SiSanity, SiTailwindcss } from 'react-icons/si';

export const oktech: any = {
  id: 1,
  title:'Oktech Klimatyzacje',
  subtitile: 'Strona Internetowa dla firmy montującej kliamtyzacje', 
  link:'oktech-klimatyzacje',
  techStack: [
    <SiNextdotjs />,
    <SiTailwindcss />,
    <SiSanity />,
  ],
  image: 'oktech/panel.png',
  tag: 'strony-internetowe',
  className: "col-span-1",
  thumbnail: "/img/strona.jpg",
  slugPage: [
    {
      title: 'Strona Internetowa',
      header: 'Prosta Strona Wizytówka',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, necessitatibus cupiditate rerum laudantium cumque nobis similique vitae possimus ut earum eum debitis, hic alias voluptas magnam aperiam vero sapiente assumenda ad asperiores impedit eveniet dicta, sunt omnis? Odit, veniam ullam, rem iste aliquam, earum velit suscipit minus eligendi nesciunt magnam eum dolorem incidunt totam autem neque! Earum laborum quod amet!',
      link: '/',
      image: '/img/oktech/thumbnail.png',
    },
    
  ]
}

export const werva: any = {
  id: 2,
  title:'Werva Solutions',
  subtitile: 'Logotyp, Wizytówki oraz Strona Internetowa', 
  link:'werva-solutions',
  techStack: [
    <SiNextdotjs />,
    <SiTailwindcss />,
    <SiSanity />,
  ],
  image: 'werva/panel.png',
  tag: 'strony-internetowe',
  className: "col-span-2",
  thumbnail: "/img/strona.jpg",
  slugPage: [
    {
      title: 'Strona Internetowa',
      header: 'Prosta Strona Wizytówka',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, necessitatibus cupiditate rerum laudantium cumque nobis similique vitae possimus ut earum eum debitis, hic alias voluptas magnam aperiam vero sapiente assumenda ad asperiores impedit eveniet dicta, sunt omnis? Odit, veniam ullam, rem iste aliquam, earum velit suscipit minus eligendi nesciunt magnam eum dolorem incidunt totam autem neque! Earum laborum quod amet!',
      link: 'https://wervasolutions.pl/',
      image: '/img/werva/thumbnail.png',
    },
    {
      title: 'Wizytówki i Logotyp',
      header: 'Projekty Wizytówek oraz Prosta Strona Internetowa',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, necessitatibus cupiditate rerum laudantium cumque nobis similique vitae possimus ut earum eum debitis, hic alias voluptas magnam aperiam vero sapiente assumenda ad asperiores impedit eveniet dicta, sunt omnis? Odit, veniam ullam, rem iste aliquam, earum velit suscipit minus eligendi nesciunt magnam eum dolorem incidunt totam autem neque! Earum laborum quod amet!',
      image: '/img/werva/thumbnail2.png',
    },
    
  ]
}

export const merkuryMedica: any = {
  id: 3,
  title:'Merkury Medica',
  subtitile: 'Logotyp, Wizytówki oraz inne materiały reklamowe', 
  link:'merkury-medica',
  techStack: [
    <SiNextdotjs />,
    <SiTailwindcss />,
    <SiSanity />,
  ],
  image: 'merkuryMedica/panel.png',
  tag: 'strony-internetowe',
  className: "col-span-1",
  thumbnail: "/img/wizytowka.jpg",
  slugPage: [
    {
      title: 'Wizytówki',
      header: 'Wiele projektów wizytówek',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, necessitatibus cupiditate rerum laudantium cumque nobis similique vitae possimus ut earum eum debitis, hic alias voluptas magnam aperiam vero sapiente assumenda ad asperiores impedit eveniet dicta, sunt omnis? Odit, veniam ullam, rem iste aliquam, earum velit suscipit minus eligendi nesciunt magnam eum dolorem incidunt totam autem neque! Earum laborum quod amet!',
      link: '/',
      image: '/img/oktech/thumbnail.png',
    },
    
  ]
}

export const bqCars: any = {
  id: 4,
  title:'BQ Cars Katowice',
  subtitile: 'Strona Internetowe, Logotyp oraz inne materiały reklamowe', 
  link:'bq-cars-katowice',
  techStack: [
    <SiNextdotjs />,
    <SiTailwindcss />,
    <SiSanity />,
  ],
  image: 'bqcars/panel.png',
  tag: 'strony-internetowe',
  className: "col-span-2",
  thumbnail: "/img/logotyp.jpg",
  slugPage: [
    {
      title: 'Logotyp',
      header: 'Projekt Skomplikowanego Logotypu',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, necessitatibus cupiditate rerum laudantium cumque nobis similique vitae possimus ut earum eum debitis, hic alias voluptas magnam aperiam vero sapiente assumenda ad asperiores impedit eveniet dicta, sunt omnis? Odit, veniam ullam, rem iste aliquam, earum velit suscipit minus eligendi nesciunt magnam eum dolorem incidunt totam autem neque! Earum laborum quod amet!',
      link: '/',
      image: '/img/oktech/thumbnail.png',
    },
    
  ]
}


export const GetFullPortfolioData= () => {
  const data = [oktech, bqCars, merkuryMedica, werva]

  return data
}
