'use client'


import { useToggleState } from "@/state/toggle_menu";
import { news } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const BigBox_3 = ({ data }: { data: news }) => {
  const truncatedTitle = data?.title.length > 10 ? data.title.slice(0, 10) + '...' : data.title;
  const truncatedTitle2 = data?.title.length > 10 ? data.title.slice(0, 17) + '...' : data.title;
  const {isOpen} = useToggleState()

  return (
    <Link
    href={`/${data.category}/${data._id}`} className="w-1/3 flex flex-col">
      <div className="relative aspect-video rounded-xl w-full bg-cover overflow-hidden">
                {data.urlToImage && (
                  <Image
                    src={data.urlToImage}
                    alt={data.title}
                    className={`rounded-xl hover:scale-110 duration-500 transition ease-in-out ${isOpen ? "-z-10" : "z-10"}`}
            fill
          />
        )}
      </div>

      <div className="mt-5">
      {truncatedTitle && <p className="block md:hidden lg:text-xl text-base md:text-lg font-bold mb-2 text-gray-800">{truncatedTitle}</p>}
      {truncatedTitle2 && <p className="md:block hidden lg:text-xl text-base md:text-lg font-bold  mb-2 text-gray-800">{truncatedTitle2}</p>}       

        <p className="text-xl mb-4 text-zinc-500">{data.author}</p>
      </div>
    </Link>
  );
};

export default BigBox_3;
