import { news } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export const Search_Data = ({ data }: { data: news[] }) => {
  return (
    <div className="w-full h-96 overflow-y-scroll no-scrollbar bg-slate-600 mt-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 p-5 mb-5">
      <p className="font-semibold">Latest News</p>

      {data &&
        data.map((item: any) => (
          <Link
            href={`/${item.category}/${item._id}`}
            key={item._id}
            className="w-full h-[7rem] bg-zinc-100 mt-5 flex items-center justify-center border rounded-lg py-2 lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60"
          >
            <div className="w-[70%] md:w-[50%] lg:w-[30%] lg:p-10 pl-3 bg-blue-00 ">  <div className="relative aspect-video rounded-xl ">
                <Image
                  src={item.urlToImage}
                  alt={item.title}
                  fill
                  className="rounded-xl object-cover bg-blue-00 md:p-5"
                />
              </div>
            </div>
            <div className="w-[80%] ml-5">
              <p className="text-lg hidden md:block text-zinc-800">
                {item.title.length > 50
                  ? item.title.slice(0, 95) + "..."
                  : item.title}
              </p>
              <p className="text-lg md:hidden block text-zinc-800">
                {item.title.length > 15
                  ? item.title.slice(0, 15) + "..."
                  : item.title}
              </p>
              <p className="text-base text-zinc-500">
                {item.publishedAt.slice(0, 10)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};
