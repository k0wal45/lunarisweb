import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const Review = ({img, name, opinion, rate, link}: any) => {

  const rating = [];
    
  for (let i = 1; i <= rate; i++) {
      rating.push(
        <FaStar key={generateRandomString()}/>
      );
    }
  
    function generateRandomString() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < 12; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  
    }

  return (
    
    <a href={link} target='_blank' rel='noreferer' className="flex flex-col gap-4 p-4 border-2 border-neutral-200 max-w-[20rem] lg:max-w-[30rem] max-h-min mx-auto rounded-xl flex-1">
      <div className="flex justify-start items-center gap-4">
        <Image width={200} height={200} src={img} alt="Zdjęcie użytkownika który wystawił opinię" className='aspect-square rounded-full w-16'/>
    
        <div className="flex flex-col gap-2">
          <h6 className="text-xl font-hussar">{name}</h6>

          <div className="flex text-yellow-500">
            {rating}
          </div>
          
        </div>

      </div>
      <p className="text-lg">{opinion}</p>
    </a>
  )
}

export default Review
