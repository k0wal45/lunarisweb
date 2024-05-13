import BtnLink from '@/components/reusable/btn-link';
import React from 'react'
import ShuffleGrid from './ShuffleCards';

const ShuffleHero = () => {
  return (
    <section className="w-screen px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-[90vw] mx-auto min-h-screen">
      <div>
        <span className="block mb-4 text-lg md:text-lg text-indigo-500 font-medium tracking-[4px] uppercase">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-bold">
          Innowacje, które Tworzą Różnicę
        </h1>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Odkryj nasze portfolio i zobacz, jak nasze innowacyjne podejście do marketingu pomogło naszym klientom osiągnąć nowe szczyty
        </p>
        <div className="lg:w-[20rem]">
          <BtnLink link="/kontakt">Skontaktuj się z nami</BtnLink>
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};

export default ShuffleHero

