import Image from 'next/image';
import { MdOutlineStar } from 'react-icons/md';

const Review = ({img, name, opinion, rate, link}: any) => {

  const rating = [];
    
  for (let i = 1; i <= rate; i++) {
      rating.push(
        <MdOutlineStar key={generateRandomString()}/>
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
    
    <a href={link} target='_blank' rel='noreferer' 
      className="flex flex-col items-center justify-center mt-12 gap-8 p-4 mx-auto lg:max-w-[66vw]"
    >
      <div className="flex text-3xl text-black">
        {rating}
      </div>

      <p className="text-2xl  font-bold">{opinion}</p>

      <div className="flex flex-col items-center gap-2">
        <Image width={100} height={100} src={img} alt="Zdjęcie użytkownika który wystawił opinię" className='aspect-square rounded-full w-16'/>
        <h6 className="text-lg text-base font-hussar">{name}</h6>
      </div>

    </a>
  )
}

export default Review
