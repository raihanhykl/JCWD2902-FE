"use client";
import ProductCard from "@/components/card/product.card";
import NavSec from "@/components/navbar/navbar.section";
import { api } from "@/config/axios.config";
import { IMenu } from "@/interfaces/menu";
import React, { useEffect, useState } from "react";

type Props = {};

export default function Menu({}: Props) {
  const [menu, setMenu] = useState<IMenu[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get("/menu");
      setMenu(res.data);
    };
    fetch();
  }, []);

  return (
    <>
      <NavSec />
      <div className=" my-[30px]">
        <div className=" font-bold text-[28px]" id="spesial">
          Special
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 shadow-border">
          {menu
            .filter((item) => item.category === "Spesial")
            .map((item, key) => (
              <div key={key}>
                <ProductCard
                  id={item.id}
                  img_src={item.img_src}
                  name={item.name}
                  desc={item.desc}
                  price={item.price}
                />
              </div>
            ))}
        </div>
      </div>
      <div className=" my-[30px] pt-36">
        <div className=" ml-4 font-bold text-[28px]" id="combo">
          Combo
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 shadow-border">
          {menu
            .filter((item) => item.category === "Combo")
            .map((item, key) => (
              <div key={key}>
                <ProductCard
                  id={item.id}
                  img_src={item.img_src}
                  name={item.name}
                  desc={item.desc}
                  price={item.price}
                />
              </div>
            ))}
        </div>
      </div>
      <div className=" my-[30px] pt-28" id="alacarte">
        <div className=" ml-4 font-bold text-[28px]">Ala Carte</div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 shadow-border">
          {menu
            .filter((item) => item.category === "Alacarte")
            .map((item, key) => (
              <div key={key}>
                <ProductCard
                  id={item.id}
                  img_src={item.img_src}
                  name={item.name}
                  desc={item.desc}
                  price={item.price}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
