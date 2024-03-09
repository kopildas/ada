import { news } from "@/utils/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";


function SmallBox_1({ data }: { data: news }) {
  const truncatedTitle = data.title.length > 40 ? data.title.slice(0, 30) + '...' : data.title;

  // Extracting date portion from publishedAt timestamp
  const publishedDate = data.publishedAt.slice(0, 10); // Extracts characters from index 0 to 9

  return (
    <Link
    href={`/${data.category}/${data._id}`} className="w-full flex flex-col lg:flex-row p-5 md:ml-6 lg:ml-0 -mt-5 lg:mt-0">
      <div className="lg:w-2/5">
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
      <div className="lg:w-3/5 lg:ml-5">
        <p className="text-lg lg:text-xl font-bold text-zinc-800  md:mb-2">{truncatedTitle}</p>
        <p className="text-base text-zinc-500">{publishedDate}</p>
      </div>
    </Link>
  );
}

export default SmallBox_1;
