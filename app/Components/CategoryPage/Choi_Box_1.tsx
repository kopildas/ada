"use client";

import { news } from "@/utils/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useToggleState } from "@/state/toggle_menu";

export const Choi_Box_1 = ({ data }: { data: news }) => {
  const { isOpen } = useToggleState();
  const truncatedTitle =
    data.title.length > 30 ? data.title.slice(0, 25) + "..." : data.title;
  const truncatedTitle2 =
    data.title.length > 30 ? data.title.slice(0, 35) + "..." : data.title;
  // console.log(truncatedTitle)
  return (
    <Link
      href={`/${data.category}/${data._id}`}
      className="flex md:flex-col lg:flex-row w-full lg:mb-10 bg-blue-00 lg:items-center lg:justify-center h-fit"
    >
      <div className="w-full lg:w-[30%] bg-red-00 flex items-center justify-center bg-green-00 px-5">
        <div className="relative  h-20 aspect-video   rounded-xl bg-cover overflow-hidden">
          {data.urlToImage && (
            <Image
              src={data.urlToImage}
              alt={data.title}
              className={`rounded-xl hover:scale-110 duration-500 transition ease-in-out ${
                isOpen ? "-z-10" : "z-10"
              }`}
              fill
            />
          )}
        </div>
      </div>
      <div className="w-full lg:w-[60%] flex flex-col items-start md:justify-center md:mr-0 bg-red-00 text-zinc-900 px-5">
        {truncatedTitle && (
          <p className="block lg:hidden lg:text-sm text-sm font-bold md:mt-2">
            {truncatedTitle}
          </p>
        )}
        {truncatedTitle2 && (
          <p className="lg:block hidden lg:text-ltext-sm text-ltext-sm font-bold md:mt-2">
            {truncatedTitle2}
          </p>
        )}
        <p className="text-xs md:mb-4 lg:mb-4 text-zinc-500">{data.author} y</p>
      </div>
    </Link>
  );
};
