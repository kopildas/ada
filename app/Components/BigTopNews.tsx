import { news } from "@/utils/types";
import Image from "next/image";
import React from "react";

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



  return (
    <>
      {data && (
        <div className="w-full h-[calc(100vh-160px)] flex flex-col bg-red-00 -mt-10">
          <div className="w-full h-screen flex">
            <div className="w-1/2 flex items-center justify-center">
              <div className="relative aspect-video h-[560px] w-[600px] rounded-xl ">
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
            <div className="w-1/2 flex flex-col items-start justify-center ml-10 bg-red-00 text-zinc-900">
              <p className="text-blue-500">{data.source.name}</p>
              <p className="text-2xl font-bold mt-4 mb-6">{data.title}</p>
              <p className="text-xl mb-4 text-zinc-500">{data.author}</p>
              <p className="text-sm text-zinc-500">Published {timeAgo(data.publishedAt)}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BigTopNews;
