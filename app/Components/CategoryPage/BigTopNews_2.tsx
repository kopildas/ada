"use client";

import { useToggleState } from "@/state/toggle_menu";
import { news } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const BigTopNews_2 = ({ data }: { data: news }) => {
  //console.log(data);
  const {isOpen} = useToggleState()
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
          className="w-full md:h-[calc(100vh-190px)] flex flex-col bg-red-00 lg:mt-5"
        >
          <div className="w-full md:h-screen flex flex-col bg-green-20">
            <div className="lg:w-full bg-red-00 flex items-center justify-center md:p-0">
              <div className="relative bg-slate-00 aspect-video h-[250px] md:h-[300px] lg:h-[500px] w-full rounded-xl bg-cover overflow-hidden">
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
            <div className="lg:w-full bg-red-00 flex flex-col items-start justify-center bg-red-00 text-zinc-900">
              {/* <p className="text-blue-500">{data.source.name}</p> */}
              <p className="text-xl md:text-2xl font-bold mt-2 mb-2 lg:mt-4 lg:mb-6">
                {data.title}
              </p>
              <p className="text-xl lg:mb-4 mb-2 text-zinc-500">{data.author}</p>
              <p className="text-sm text-zinc-500 mb-4">
                Published {timeAgo(data.publishedAt)}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BigTopNews_2;
