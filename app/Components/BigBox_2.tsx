"use client";

import { news } from "@/utils/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useToggleState } from "@/state/toggle_menu";

export const BigBox_2 = ({ data }: { data: news }) => {
  const { isOpen } = useToggleState();
  // Truncate the title if it exceeds 40 characters
  const truncatedTitle =
    data.title.length > 30 ? data.title.slice(0, 10) + "..." : data.title;
  const truncatedTitle2 =
    data.title.length > 30 ? data.title.slice(0, 17) + "..." : data.title;
  // console.log(truncatedTitle)
  return (
    <Link
      href={`/${data.category}/${data._id}`}
      className="flex flex-col w-[40%] lg:mb-10 bg-blue-00 bg-blue-00 items-center justify-center h-fit group"
    >
      <div className="md:w-[140px] lg:w-[270px] w-full bg-red-00 flex items-center justify-center bg-green-00">
        <div className="relative aspect-video w-[150px] h-[100px] md:h-[120px] bg-green-00 lg:h-[220px] md:w-[140px] lg:w-[270px] rounded-xl bg-cover overflow-hidden">
          {data.urlToImage && (
            <Image
              src={data.urlToImage}
              alt={data.title}
              className={`rounded-xl group-hover:scale-110 duration-500 transition ease-in-out ${
                isOpen ? "-z-10" : "z-10"
              }`}
              fill
            />
          )}
        </div>
      </div>
      <div className="md:w-[140px] lg:w-[270px] w-[150px] flex flex-col items-start justify-center md:ml-0 md:mr-0 bg-red-00 text-zinc-900 group-hover:text-blue-500 duration-500 transition ease-in-out bg-red-00">
        {truncatedTitle && (
          <p className="block lg:hidden lg:text-xl text-lg font-bold md:mt-2">
            {truncatedTitle}
          </p>
        )}
        {truncatedTitle2 && (
          <p className="lg:block hidden lg:text-xl text-lg font-bold md:mt-2">
            {truncatedTitle2}
          </p>
        )}
        <p className="lg:text-xl text-xs md:mb-4 lg:mb-4 text-zinc-500 group-hover:text-blue-500">
          {data.author}
        </p>
      </div>
    </Link>
  );
};
