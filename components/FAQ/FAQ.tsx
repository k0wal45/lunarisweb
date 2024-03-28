import React from "react";
import FaqElement from "./FaqElement";

const data = [
  {
    title: "Do you prefer Android or iOS",
    answer: "I like to use iOS products",
  },
  {
    title: "Do you prefer Android or iOS",
    answer: "I like to use iOS products",
  },
  {
    title: "Do you prefer Android or iOS",
    answer: "I like to use iOS products",
  },
  {
    title: "Do you prefer Android or iOS",
    answer: "I like to use iOS products",
  },
]


function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;

}

const FAQ = () => {
  return (
    <div className="p-4 flex-1 text-white flex flex-col gap-4 w-full lg:max-w-[50rem]">
      {
        data.map((faq) => (
          <FaqElement
            title={faq.title}
            answer={faq.answer}
            key={generateRandomString()}
          />
        ))
      }
      

    </div>
  );
};

export default FAQ;