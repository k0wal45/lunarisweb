"use client"
import { TypeAnimation } from 'react-type-animation';


const TyperWriter = ({sequence}: any) => {
  return (
    <TypeAnimation

      sequence={sequence}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  );
};

export default TyperWriter

