"use client";

import { useToggleState } from "@/state/toggle_menu";
import { news } from "@/utils/types";
import Image from "next/image";
import React from "react";

export const Single_Top_img = ({ data }: { data: news }) => {
  const { isOpen } = useToggleState();

  return (
    <div className="relative bg-slate-00 aspect-video h-[250px] md:h-[550px] w-[95%] rounded-xl mt-7 pr-10 bg-cover overflow-hidden">
      <Image
        src={data.urlToImage}
        alt={data.title}
        className={`rounded-xl hover:scale-110 duration-500 transition ease-in-out ${
          isOpen ? "-z-10" : "z-10"
        }`}
        fill
      />
    </div>
  );
};
