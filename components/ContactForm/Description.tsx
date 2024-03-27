import React from "react";
import FaqElement from "./FaqElement";


const Description = () => {
  return (
    <div className="p-4 flex-1 text-white flex flex-col gap-4">
      <FaqElement
        title="Do you prefer Android or iOS"
        answer="I like to use iOS products"
      />

      <FaqElement
        title="Do you prefer writing CSS or Tailwind?"
        answer="I like to use Tailwind"
      />

      <FaqElement 
        title="Firebase or Supabase?" 
        answer="I am using Supabase!" 
      />
    </div>
  );
};

export default Description;