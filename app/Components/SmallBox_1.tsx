import { news } from "@/utils/types";
import Image from "next/image";
import React from "react";

function SmallBox_1({ data }: { data: news }) {
  const truncatedTitle = data.title.length > 40 ? data.title.slice(0, 30) + '...' : data.title;

  // Extracting date portion from publishedAt timestamp
  const publishedDate = data.publishedAt.slice(0, 10); // Extracts characters from index 0 to 9

  return (
    <div className="w-full flex p-5">
      <div className="w-2/5">
        <div className="relative aspect-video rounded-xl ">
          {data.urlToImage && (
            <Image
              src={data.urlToImage}
              alt={data.title}
              fill
              className="rounded-xl"
            />
          )}
        </div>
      </div>
      <div className="w-3/5 ml-5">
        <p className="text-lg md:text-2xl font-bold text-zinc-800  md:mb-2">{truncatedTitle}</p>
        <p className="text-base md:mb-4 text-zinc-500">{publishedDate}</p>
      </div>
    </div>
  );
}

export default SmallBox_1;
