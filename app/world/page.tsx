// import { getNewsTopHeadlines } from "@/api";
import { connectToDatabase } from "@/utils/connectMongo";
import axios from "axios";
import { Db } from "mongodb";
import React from "react";
import { getNewsByCategory } from "../api";
import { Categorypage } from "../Components/CategoryPage/Categorypage";

const page = async () => {
  let data = await getNewsByCategory("world");
  async function handler() {
    try {
      // const connection = await connectToDatabase();
      // if (!connection) {
      //   // response.status(500).json({ error: 'Failed to connect to database' });
      //   console.log("not connected");
      //   return;
      // }
      // const { database }: { database: Db } = connection;
      // const collection = database.collection(
      //   process.env.NEXT_ATLAS_COLLECTION as string
      // );

      // const namespace = "pageview";
      // const results = await collection.find().toArray();

      // let key = `analytics::${namespace}`;
      //  const collection2 = database.collection(
      //       key as string
      //     );

      // let name = "analytics::pageview"

      // console.log("connected");
      // console.log(results);
      const namespace = "pageview";
      // const formData = {
      //   email: namespace,
      //     password: `analytics::${namespace}`,
      // }
      // console.log(formData)
      // const res = await axios.post("/api/register",namespace)
      // const res = await axios.post("/api/addviewer",namespace)
      // console.log(key)
      // console.log(res)
      // response.status(200).json(results);
    } catch (error) {
      console.error("world err " + error);
      // response.status(500).json({ error: 'Internal Server Error' });
    }
  }
  handler();
  // console.log(data);

  return (
    <div className="text-black w-full flex flex-col h-auto bg-red-00">
      <div className="flex w-full items-center justify-start mt-[2rem] mb-14 -ml-5 bg-red-00">
        <p className="w-auto pl-10 md:pl-14 text-2xl md:text-3xl font-bold text-zinc-800 hover:text-blue-500 transition ease-in-out duration-200">
          World
        </p>
        <div className="w-[45%] md:w-[75%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
      </div>
      <Categorypage data={data} />
    </div>
  );
};

export default page;
