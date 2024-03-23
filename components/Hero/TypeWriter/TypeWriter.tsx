"use client"
import { TypeAnimation } from 'react-type-animation';


const TyperWriter = () => {
  return (
    <TypeAnimation

      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Strony Internetowe',
        3000, // wait 3s before replacing 
        'Logotypy',
        3000,
        'Banery Reklamowe',
        3000,
        
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  );
};

export default TyperWriter

