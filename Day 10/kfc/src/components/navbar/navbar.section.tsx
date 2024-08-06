import React from "react";

type Props = {};

export default function NavSec({}: Props) {
  return (
    <>
      <div className=" w-full sticky top-[100px] bg-white">
        <div className=" max-w-screen-2xl w-full  border-b border-[#ccc] leading-[35px] *:text-[#00000080] text-[20px] font-[700] flex *:px-4 *:py-2 justify-between mx-auto">
          <div className=" hover:text-black">
            <a href="#spesial">SPESIAL</a>
          </div>
          <div className=" hover:text-black">
            <a href="#combo">COMBO</a>
          </div>
          <div className=" hover:text-black">
            <a href="#alacarte">ALA CARTE</a>
          </div>
          <div className=" hover:text-black">
            <a href="#kfcbucket">KFC BUCKET</a>
          </div>
          <div className=" hover:text-black">
            <a href="#alacartechic">ALACARTE CHICKEN</a>
          </div>
          <div className=" hover:text-black">
            <a href="#drinks">DRINKS</a>
          </div>
          <div className=" hover:text-black">
            <a href="#kidsmeal">KIDS MEAL</a>
          </div>
          <div className=" hover:text-black">
            <a href="#coffee">COFFEE</a>
          </div>
          <div className=" hover:text-black">
            <a href="#breakfast">BREAKFAST</a>
          </div>
          <div className=" hover:text-black">
            <a href="#dessert">DESSERT</a>
          </div>
        </div>
      </div>
    </>
  );
}
