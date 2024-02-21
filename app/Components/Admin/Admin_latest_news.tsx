import Image from "next/image";
import React from "react";

export const Admin_latest_news = async () => {
  const get_all_news_link = new URL(
    `${process.env.NEXTAUTH_URL}/api/getallnews`
  );

  const news_response = await fetch(get_all_news_link, {cache: 'no-store'});

  if (!news_response.ok) {
    throw new Error("Failed to fetch data");
  }
  const all_News_Data = await news_response.json();
  // const all_News_Data = {
  //   data: [
  //     {
  //       _id: "65d49f886eacf2427d780647",
  //       source: [Object],
  //       author: "Doc Louallen",
  //       title:
  //         "Mega Millions winning numbers for February 9 as jackpot climbs to $394 million - USA TODAY",
  //       description:
  //         "The Mega Millions jackpot is now at $394 million ahead of the drawing on Friday, Feb. 9, 2024.",
  //       url: "https://www.usatoday.com/story/money/lottery/2024/02/09/mega-millions-winning-numbers/72543384007/",
  //       urlToImage: "https://i.ibb.co/NskxnjJ/mobile-13.png",
  //       publishedAt: "2024-02-10T04:39:37Z",
  //       content:
  //         "The Mega Millions jackpot has climbed to $394 million for Friday's drawing after no one won the top prize on Tuesday night.\r\n",
  //     },
  //     {
  //       _id: "65d49e856eacf2427d780643",
  //       source: [Object],
  //       author: "Doc Louallen",
  //       title:
  //         "Mega Millions winning numbers for February 9 as jackpot climbs to $394 million - USA TODAY",
  //       description:
  //         "The Mega Millions jackpot is now at $394 million ahead of the drawing on Friday, Feb. 9, 2024.",
  //       url: "https://www.usatoday.com/story/money/lottery/2024/02/09/mega-millions-winning-numbers/72543384007/",
  //       urlToImage: "https://i.ibb.co/NskxnjJ/mobile-13.png",
  //       publishedAt: "2024-02-10T04:39:37Z",
  //       content:
  //         "The Mega Millions jackpot has climbed to $394 million for Friday's drawing after no one won the top prize on Tuesday night.\r\n",
  //     },
  //     {
  //       _id: "65c8dc7db7cd3f0f805f5fd2",
  //       source: [Object],
  //       author: "Doc Louallen",
  //       title:
  //         "Mega Millions winning numbers for February 9 as jackpot climbs to $394 million - USA TODAY",
  //       description:
  //         "The Mega Millions jackpot is now at $394 million ahead of the drawing on Friday, Feb. 9, 2024.",
  //       url: "https://www.usatoday.com/story/money/lottery/2024/02/09/mega-millions-winning-numbers/72543384007/",
  //       urlToImage: "https://i.ibb.co/NskxnjJ/mobile-13.png",
  //       publishedAt: "2024-02-10T04:39:37Z",
  //       content:
  //         "The Mega Millions jackpot has climbed to $394 million for Friday's drawing after no one won the top prize on Tuesday night.\r\n",
  //     },
  //   ],
  // };
  // console.log(all_News_Data);

  return (
    <div className="w-full h-auto bg-slate-600 mt-10 ml-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 p-5">
      <p className="font-semibold">Latest News</p>

      {all_News_Data &&
        all_News_Data.data.map((item:any) => (
          <div
            key={item._id}
            className="w-full h-[5rem] bg-zinc-100 mt-5 flex items-center justify-center border rounded-lg py-2 lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60"
          >
            <div className="w-[20%] h-16 bg-green-00">
              <div className="relative aspect-video rounded-xl ">
                <Image
                  src={item.urlToImage}
                  alt={item.title}
                  fill
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="w-[80%] ml-5">
              <p className="text-lg text-zinc-800  md:mb-2">
                {item.title.length > 50
                  ? item.title.slice(0, 35) + "..."
                  : item.title}
              </p>
              <p className="text-base text-zinc-500">
                {item.publishedAt.slice(0, 10)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
