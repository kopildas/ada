import { news } from "@/utils/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const BigTopNews = ({ data }: { data: news }) => {
  console.log(data);

// Function to calculate time ago
const timeAgo = (timestamp: string): string => {
  const currentTime = new Date();
  const publishedTime = new Date(timestamp);
  const timeDifference = Math.floor((currentTime.getTime() - publishedTime.getTime()) / 1000); // Time difference in seconds

  if (timeDifference < 60) {
    return `${timeDifference} seconds ago`;
  } else if (timeDifference < 3600) {
    const minutes = Math.floor(timeDifference / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    const hours = Math.floor(timeDifference / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
};

  const truncatedTitle = data.title.length > 40 ? data.title.slice(0, 30) + '...' : data.title;



  return (
    <>
      {data && (
        <Link href={`/${data._id}`} className="w-full md:h-[calc(100vh-190px)] flex flex-col bg-red-00 mt-5">
          <div className="w-full md:h-screen flex flex-col md:flex-row bg-green-20">
            <div className="md:w-[60%] flex items-center justify-center  p-5 md:p-0">
              <div className="relative bg-slate-00 aspect-video h-[250px] md:h-[500px] w-full rounded-xl">
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
            <div className="md:w-1/2 p-5 bg-red-0 flex flex-col items-start justify-center md:ml-5 bg-red-00 text-zinc-900">
              {/* <p className="text-blue-500">{data.source.name}</p> */}
              <p className="text-xl md:text-2xl font-bold mt-4 mb-6">{data.title}</p>
              <p className="text-xl mb-4 text-zinc-500">{data.author}</p>
              <p className="text-sm text-zinc-500">Published {timeAgo(data.publishedAt)}</p>
            
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BigTopNews;
