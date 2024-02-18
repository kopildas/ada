import { connectToDatabase } from "@/utils/connectMongo";
import User from "@/models/User";
import mongoose from "mongoose";
import { Db } from "mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { namespace, key } = await request.json();

  //   console.log("eloo "+key)
  //   console.log("eloo "+namespace)

  try {
    
    const connection = await connectToDatabase();
    if (!connection) {
      // response.status(500).json({ error: 'Failed to connect to database' });
      console.log("not connected");
      return;
    }
    const { database }: { database: Db } = connection;

    const name = key;

    const collection2 = database.collection(name as string);
    const existingUser = await collection2.findOne({ name });

    if (existingUser) {
      await collection2.updateOne(
        { name: key },
        { $inc: { view: 1, "metrics.orders": 1 } }
      );
    } else {
      const results: any = await collection2.insertOne({
        name: key,
        view: 1,
      });
      return new NextResponse(results, {
        status: 200,
      });
    }
  } catch (err: any) {
    return new NextResponse(err, {
      status: 502,
    });
  }
};
