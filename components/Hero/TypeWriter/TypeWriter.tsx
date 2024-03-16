"use client"
import { TypeAnimation } from 'react-type-animation';

const TyperWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Nowoczesne Strony Internetowe',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
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

