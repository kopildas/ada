import { news } from "@/utils/types";
import Image from "next/image";
import React from "react";

function SmallBox_1({ data }: { data: news }) {
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
        <p className="text-2xl font-bold text-zinc-800  mb-2">{data.title}</p>
        <p className="text-xl mb-4 text-zinc-500">{data.author}</p>
      </div>
    </div>
  );
}

export default SmallBox_1;
