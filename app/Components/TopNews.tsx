import { news } from "@/utils/types";
import BigTopNews from "./BigTopNews";
import SmallBox_1 from "./SmallBox_1";

const TopNews = ({ data }: { data: news[] }) => {
  const singledata = data[1];
  // console.log(data)
  //   console.log(singledata)
  return (
    <>
      <div className="w-full h-[calc(100vh-160px)] flex flex-col md:flex-row bg-red-00">
        <div className="md:w-[70%]">
          <div className="flex w-full items-center justify-start mt-10 mb-10 md:mb-0 md:-ml-5 bg-red-00">
            <p className="w-auto text-2xl md:text-3xl font-bold text-zinc-800">
              Top News
            </p>
            <div className="md:w-[80%] w-[60%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
          </div>
          {singledata && <BigTopNews data={singledata} />}
        </div>
        <div className="md:w-[30%] bg-green-00">
          <div className="flex w-full items-center justify-start mt-5 mb-5 p-5 bg-red-00">
            <p className="w-auto text-2xl md:text-3xl font-bold text-zinc-800">
              Scoop
            </p>
            <div className="w-[80%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
          </div>
          {singledata && <SmallBox_1 data={data[5]} />}
          {singledata && <SmallBox_1 data={data[2]} />}
          {singledata && <SmallBox_1 data={data[4]} />}
          {singledata && <SmallBox_1 data={data[6]} />}
        </div>
      </div>
    </>
  );
};

export default TopNews;
