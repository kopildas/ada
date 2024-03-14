'use client'


import { news } from "@/utils/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useToggleState } from "@/state/toggle_menu";


function SmallBox_1({ data }: { data: news }) {
   const {isOpen} = useToggleState()
  const truncatedTitle = data?.title.length > 10 ? data.title.slice(0, 10) + '...' : data.title;
  const truncatedTitle2 = data?.title.length > 10 ? data.title.slice(0, 20) + '...' : data.title;
  // Extracting date portion from publishedAt timestamp
  const publishedDate = data.publishedAt.slice(0, 10); // Extracts characters from index 0 to 9

  return (
    <Link
    href={`/${data.category}/${data._id}`} className="w-full flex flex-col lg:flex-row p-5 md:ml-6 lg:ml-0 -mt-5 lg:mt-0">
      <div className="lg:w-2/5">
        <div className="relative aspect-video rounded-xl bg-cover overflow-hidden">
                {data.urlToImage && (
                  <Image
                    src={data.urlToImage}
                    alt={data.title}
                    className={`rounded-xl hover:scale-110 duration-500 transition ease-in-out ${isOpen ? "-z-10" : "z-10"}`}
              fill
            />
          )}
        </div>
      </div>
      <div className="lg:w-3/5 lg:ml-5">
      {truncatedTitle && <p className="block lg:hidden md: text-base font-bold md:mt- mb- text-gray-800">{truncatedTitle}</p>}
      {truncatedTitle2 && <p className="lg:block hidden lg: text-base font-bold md:mt- mb-2 text-gray-800">{truncatedTitle2}</p>}         <p className="text-base text-zinc-500">{publishedDate}</p>
      </div>
    </Link>
  );
}

export default SmallBox_1;
