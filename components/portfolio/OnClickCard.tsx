import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import UnderlineOnHover from '../Animations/UnderlineOnHover';


type Card = {
  id: number;
  title: string,
  text: string,
  link: string,
  className: string;
  thumbnail: string;
};

const OnClickCard = ({ selected }: { selected: Card | null }) => {
  
  console.log(selected)
  
  return (
    <div className="w-full h-full flex flex-col items-start justify-end p-4">
      <p className="font-bold text-4xl text-white">{selected?.title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{selected?.text}</p>
      <UnderlineOnHover>
        <Link href={`/portfolio/${selected?.link}`} className='flex items-center gap-2 text-white'>Sprawdź Teraz <FaArrowRight /></Link>
      </UnderlineOnHover>
    </div>
  );
};

export default OnClickCard
