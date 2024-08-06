import React from "react";

type Props = {
  id: number;
  img_src: string;
  name: string;
  desc: string;
  price: string;
};

export default function ProductCard({ img_src, name, desc, price }: Props) {
  return (
    <div className=" flex md:flex-col shadow-border shadow-lg p-[10px] mx-[10px] mb-[25px] max-h-[500px] h-full">
      <div className=" w-full max-w-[267px]">
        <img src={img_src} alt="" className=" w-full object-cover" />
      </div>
      <div className=" flex flex-col justify-between h-full w-full">
        <div className=" pt-[5px] px-[15px]">
          <div className=" md:flex mb-[10px] md:justify-between font-bold">
            <div>{name}</div>
            <div className=" text-nowrap">{`Rp. ${Number(
              price
            ).toLocaleString()}`}</div>
          </div>
          <div className=" mb-[35px]">{desc}</div>
        </div>
        <div className=" w-full px-[15px] pb-[15px]">
          <button className=" bg-red-600 py-[9px] px-[2px] w-full text-white rounded-[25px] font-bold">
            Tambahkan
          </button>
        </div>
      </div>
    </div>
  );
}
