'use client'

import { useToggleState } from "@/state/toggle_menu";
import { news } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const BigTopNews = ({ data }: { data: news }) => {
  //console.log(data);
  const {isOpen} = useToggleState()
  console.log(isOpen)
  // Function to calculate time ago
  const timeAgo = (timestamp: string): string => {
    const currentTime = new Date();
    const publishedTime = new Date(timestamp);
    const timeDifference = Math.floor(
      (currentTime.getTime() - publishedTime.getTime()) / 1000
    ); // Time difference in seconds

    if (timeDifference < 60) {
      return `${timeDifference} seconds ago`;
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
  };

  const truncatedTitle =
    data.title.length > 40 ? data.title.slice(0, 30) + "..." : data.title;

  return (
    <>
      {data && (
        <Link
          href={`/${data.category}/${data._id}`}
          className=" w-full md:h-[calc(100vh-190px)] flex flex-col bg-red-00 "
        >
          <div className="w-full md:h-fit flex flex-col lg:flex-row bg-green-20 group">
            <div className="lg:w-[60%] bg-red-00 flex   p-5 md:p-0">
            <div className="relative bg-slate-00 aspect-video h-[250px] md:h-[300px] lg:h-[500px] w-full rounded-xl bg-cover overflow-hidden">
                {data.urlToImage && (
                  <Image
                    src={data.urlToImage}
                    alt={data.title}
                    className={`rounded-xl group-hover:scale-110 duration-500 transition ease-in-out ${isOpen ? "-z-10" : "z-10"}`}
                    fill
                  />
                )}
              </div>
            </div>
            <div className="lg:w-1/2 lg:p-5 bg-red-00 flex flex-col items-start justify-center mt-2 lg:mt-0 ml-2 lg:ml-5 bg-red-00 text-zinc-900">
              {/* <p className="text-blue-500">{data.source.name}</p> */}
              <p className="text-xl md:text-2xl font-bold lg:mt-4 mb-6 group-hover:text-blue-500 duration-500 transition ease-in-out">
                {data.title}
              </p>
              <p className="text-xl mb-4 text-zinc-500 group-hover:text-blue-500 duration-500 transition ease-in-out">{data.author}</p>
              <p className="text-sm text-zinc-500 group-hover:text-blue-500 duration-500 transition ease-in-out">
                Published {timeAgo(data.publishedAt)}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BigTopNews;
