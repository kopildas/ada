// import { getNewsTopHeadlines } from "@/api";
import { connectToDatabase } from "@/utils/connectMongo";
import axios from "axios";
import { Db } from "mongodb";
import React from "react";
import { getNewsByCategory } from "../api";
import { Categorypage } from "../Components/CategoryPage/Categorypage";

const page = async () => {
  let data = await getNewsByCategory("travel");

  
  // console.log(data);

  return (
    <div className="text-black w-full flex flex-col h-auto bg-red-00">
      <div className="flex w-full items-center justify-start mt-[2rem] mb-14 -ml-5 bg-red-00">
        <p className="w-auto pl-10 md:pl-14 text-2xl md:text-3xl font-bold text-zinc-800 hover:text-blue-500 transition ease-in-out duration-200">
          Travel
        </p>
        <div className="w-[45%] md:w-[75%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
      </div>
      <Categorypage data={data} />
    </div>
  );
};

export default page;
