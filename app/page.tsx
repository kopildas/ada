import Image from "next/image";
import TopNews from "./Components/TopNews";
import { getNewsTopHeadlines } from "@/api";
import { removeDuplicate } from "@/utils";
import TextMarquee from "./Components/TextMarquee";
import { LatestNews } from "./Components/LatestNews";
import BigBox_1 from "./Components/BigBox_1";
import { RUS_News } from "./Components/RUS_News";
export default async function Home() {
  const fetchingData = async () => {
    const newsTop = await getNewsTopHeadlines();
    const filterData = removeDuplicate(newsTop);
    console.log(newsTop);
    console.log(filterData);

    return filterData;
  };

  const data = await fetchingData();
  const singledata = data[3];
  console.log(singledata);

  return (
    <main className="flex h-[calc(100%-160px)] flex-col items-center justify-between px-24 w-full">
      <div className="w-full">
        <TopNews data={data} />
        <TextMarquee data={data} />
        <div className="flex items-center justify-center gap-10 mt-[5rem] mb-[5rem]">
          <BigBox_1 data={data[1]} />
          <BigBox_1 data={data[3]} />
          <BigBox_1 data={data[4]} />
        </div>

        <div className="w-full">
          <div className="flex w-full items-center justify-start mt-[7rem] mb-14 -ml-5 bg-red-00">
            <p className="w-auto text-3xl font-bold text-zinc-800 hover:text-blue-500 transition ease-in-out duration-200">
              The latest
            </p>
            <div className="w-[80%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
          </div>
          <LatestNews data={data}/>
        </div>


      <div className="w-full flex">
          <div className="w-4/5 flex flex-col">
          <div className="flex w-full items-center justify-start mt-[7rem] mb-14 -ml-5 bg-red-00">
            <p className="w-auto text-3xl font-bold text-zinc-800 hover:text-blue-500 transition ease-in-out duration-200">
              World
            </p>
            <div className="w-[80%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
          </div>
          <RUS_News/>



          <div className="">
          <div className="flex w-full items-center justify-start mt-[7rem] mb-14 -ml-5 bg-red-00">
            <p className="w-auto text-3xl font-bold text-zinc-800 hover:text-blue-500 transition ease-in-out duration-200">
              Business
            </p>
            <div className="w-[80%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
          </div>
          <RUS_News/>
          </div>


          </div>
          <div className="w-1/5"></div>
      </div>

      </div>
    </main>
  );
}
