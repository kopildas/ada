import { connectToDatabase } from "@/utils/connectMongo";
import User from "@/models/User";
import mongoose from "mongoose";
import { Db } from "mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { namespace, key } = await request.json();

    // console.log("eloo "+key)
    // console.log("eloo "+namespace)

  try {
    
    const connection = await connectToDatabase();
    if (!connection) {
      // response.status(500).json({ error: 'Failed to connect to database' });
      // console.log("not connected");
      return;
    }else{
      // console.log("connceted from add viewr")
    }
    const { database }: { database: Db } = connection;

    let name = "analytics::pageview";

    const collection2 = database.collection(name as string);
    name=key
    const existingUser = await collection2.findOne({ name });

    if (existingUser) {
      await collection2.updateOne(
        { name: key },
        { $inc: { view: 1, "metrics.orders": 1 } }
      );
      // console.log("collection2 = "+collection2)
      return new NextResponse("addview updated", {
        status: 200,
      });
    } else {
      const results: any = await collection2.insertOne({
        name: key,
        view: 1,
      });
      // console.log("new entry added")
      return new NextResponse("new addview added", {
        status: 200,
      });
    }
  } catch (err: any) {
    // console.log("error: ", err)
    return new NextResponse(err, {
      status: 502,
    });
  }
};
