import AppearFromBottom from "@/components/Animations/AppearFromBottom";

function getRandomElement(array: any) {
  if (array.length === 0) {
    return undefined; // Jeśli tablica jest pusta, zwróć undefined
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const borderStyle = [
  'border-r-2 border-b-2',
  'border-b-2 border-l-2',
  'border-l-2 border-t-2',
  'border-t-2 border-r-2',

]

const AdvantegesItem = ({content}: any) => {
  return (
    <AppearFromBottom>
      <li className="flex flex-col items-center justify-center max-w-72 text-center gap-4 z-10">
        <div 
          className={ getRandomElement(borderStyle) + " grid place-items-center p-4 rounded-full text-5xl border-white"}
        >
          {content.icon}
        </div>

        <h6 className="text-2xl font-bold">{content.title}</h6>
      </li>
    </AppearFromBottom>
  )
}

export default AdvantegesItem