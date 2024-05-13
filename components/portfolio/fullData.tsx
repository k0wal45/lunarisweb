import { SiNextdotjs, SiSanity, SiTailwindcss } from 'react-icons/si';

const PortfolioData = () => {
  const data = [
    {
    id: 1,
    title:'Oktech Klimatyzacje',
    link:'oktech-klimatyzacje',
    techStack: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiSanity />,
    ],
    image: 'placeholder2.png'
  },
  {
    id: 2,
    title:'Oktech Klimatyzacje',
    link:'oktech-klimatyzacje',
    techStack: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiSanity />,
    ],
    image: 'placeholder2.png'
  },
  {
    id: 3,
    title:'Oktech Klimatyzacje',
    link:'oktech-klimatyzacje',
    techStack: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiSanity />,
    ],
    image: 'placeholder2.png'
  },

]
  return data

}

export default PortfolioData