"use client";

import { news } from "@/utils/types";
import Link from "next/link";
import BigTopNews_2 from "./BigTopNews_2";
import SmallBox_1 from "../SmallBox_1";
import BigBox_1 from "../BigBox_1";
import { BigBox_2 } from "../BigBox_2";
import { useState } from "react";
export const Categorypage = ({ data }: { data: news }) => {
  // console.log(data);

  

  return (
    <div className="w-full flex flex-col px-10">
      <div
        // href={`/${item.category}/${item._id}`}
        className="w-full flex flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 bg-red-00">
          <BigTopNews_2 data={data[0]} />
        </div>
        <div className="w-full md:w-1/2 h-fit bg-red-00 mt-5 md:mt-0 flex flex-wrap lg:items-center lg:justify-center gap-10 lg:pt-5 ml-2 md:ml-5 lg:ml-0">
          <BigBox_2 data={data[1]} />
          <BigBox_2 data={data[2]} />
          <BigBox_2 data={data[3]} />
          <BigBox_2 data={data[4]} />
        </div>
        {/* <p className="text-black bg-green-300">{indx}</p> */}
        {/* <BigBox_2 data={item} /> */}
      </div>

      <div className="hidden md:flex items-center justify-center gap-10 md:-mt-[30rem] lg:mt-[3rem] mb-[5rem]">
          <BigBox_1 data={data[5]} />
          <BigBox_1 data={data[6]} />
          <BigBox_1 data={data[7]} />
        </div>

      {/* {data &&
        data.map((item, indx) => (
         
        ))} */}
    </div>
  );
};
