// import { getNewsTopHeadlines } from "@/api";
import { connectToDatabase } from "@/utils/connectMongo";
import axios from "axios";
import { Db } from "mongodb";
import React from "react";

const page = async () => {
  console.log("test for mongo");
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
      const namespace= "pageview";
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
      console.error("world err "+error);
      // response.status(500).json({ error: 'Internal Server Error' });
    }
  }
  handler();

  return <div className="text-black">hola from world</div>;
};

export default page;
