'use client'


import { useToggleState } from "@/state/toggle_menu";
import { news } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const BigBox_2 = ({ data }: { data: news }) => {
  const truncatedTitle =
    data.title.length > 60 ? data.title.slice(0, 60) + "..." : data.title;
    const {isOpen} = useToggleState()
  return (
    <Link
      href={`/${data.category}/${data._id}`}
      className="w-1/3 flex flex-col"
    >
      <div className="relative aspect-video rounded-xl bg-cover overflow-hidden">
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

      <div className="mt-5">
        <p className="text-3xl font-bold text-zinc-800  mb-2">
          {truncatedTitle}
        </p>
        <p className="text-xl mb-4 text-zinc-500">{data.author}</p>
      </div>
    </Link>
  );
};

export default BigBox_2;
