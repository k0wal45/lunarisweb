import OfferPriceCard from "./OfferPriceCard";

export type OfferPriceProps = {
  title: string;
  description: string;
  items: string[];
  price: number;
};

const OfferPrice = ({ content }: { content: OfferPriceProps[] }) => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center p-4 py-24 bg-neutral-100 ">
      <h4 className="text-5xl font-bold lg:max-w-[70vw] text-center">
        Przykładowe oferty cenowe
      </h4>
      <p className="text-lg lg:max-w-[70vw] text-center">
        Jakich cen możesz się spodziewać? Poniżej przedstawiamy przykładowe
        oferty cenowe, które mogą być pomocne w podjęciu decyzji. Pamiętaj, że
        każda oferta jest dostosowywana indywidualnie do Twoich potrzeb
      </p>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-12">
        {content.map((offer: OfferPriceProps, index: number) => (
          <OfferPriceCard data={offer} key={index} />
        ))}
      </div>
    </section>
  );
};

export default OfferPrice;
