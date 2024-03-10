import { news } from "@/utils/types";
import React from "react";

const TextMarquee = ({ data }: { data: news[] }) => {
  // console.log(data);
  return (
    <div className="relative flex text-slate-200 overflow-x-hidden bg-gradient-to-r from-slate-800 to-violet-900 rounded-[3.5rem] mt-[58rem] md:-mt-[10rem] lg:mt-[15rem] bg-green-300">
      <div className=" flex items-center justify-center text-2xl bg-slate-800 z-20">
        <p className="bg-slate-200 text-zinc-600 px-5 py-[6px] rounded-[3.5rem] font-bold ml-2">
          {" "}
          New:
        </p>
      </div>
      <div className="py-3 animate-marquee whitespace-nowrap z-10 -mx-24">
        {data &&
          data.map((item, ind) => (
            <span key={ind} className="mx-4 text-2xl">
              {item.title}
            </span>
          ))}
        
      </div>

      <div className="absolute top-0 py-3 animate-marquee2 whitespace-nowrap">
        {data &&
          data.map((item, ind) => (
            <span key={ind} className="mx-4 text-2xl">
              {item.title}
            </span>
          ))}
        
      </div>
    </div>
  );
};

export default TextMarquee;
