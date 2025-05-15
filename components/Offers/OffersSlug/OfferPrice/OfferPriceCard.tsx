import BtnLink from "@/components/reusable/btn-link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { OfferPriceProps } from "./OfferPrice";

const OfferPriceCard = ({ data }: { data: OfferPriceProps }) => {
  return (
    <div className="flex flex-col gap-2 p-8 w-[22rem] h-[30rem] justify-between bg-white rounded-xl shadow-lg text-center">
      <h4 className="text-3xl font-bold">{data.title}</h4>
      <p className="text-lg -translate-y-2">{data.description}</p>
      <div className="flex flex-col gap-2 text-xl mb-4">
        {data.items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-start">
            <div className="text-teal-500 w-8">
              <FaCheckCircle />
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <p className="relative text-3xl font-bold">od{" " + data.price}zł</p>
      <p className="text-sm text-neutral-400 -translate-y-3">ceny netto</p>
      <BtnLink link="/kontakt">Złóż zamówienie</BtnLink>
    </div>
  );
};

export default OfferPriceCard;
