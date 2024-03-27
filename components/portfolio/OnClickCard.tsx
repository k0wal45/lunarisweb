import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';


type Card = {
  id: number;
  title: string,
  text: string,
  link: string,
  className: string;
  thumbnail: string;
};

const OnClickCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-end p-4">
      <p className="font-bold text-4xl text-white">{selected?.title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">{selected?.text}</p>
      <Link href={`/oferta/${selected?.link}`} className='flex items-center gap-2 hover:underline'>Sprawdź Teraz <FaArrowRight /></Link>
    </div>
  );
};

export default OnClickCard
