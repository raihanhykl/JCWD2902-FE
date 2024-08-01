import React from "react";
import kakekKFC from "@/../public/kakek-kfc.jpg";
import ProviderContent from "@/components/provider/content.provider";
import Image from "next/image";

type Props = {};

export default function Page({}: Props) {
  return (
    <>
      <ProviderContent>
        <div>
          <Image src={kakekKFC} alt="" width={700} height={700} className="" />
        </div>
        <div></div>
      </ProviderContent>
    </>
  );
}
