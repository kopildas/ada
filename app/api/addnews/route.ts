import { connectToDatabase } from "@/utils/connectMongo";
import User from "@/models/User";
import mongoose from "mongoose";
import { Db } from "mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  try {
    const formData = await request.json();
    console.log("data from add news api " + JSON.stringify(formData));

    const connection = await connectToDatabase();
    if (!connection) {
      // response.status(500).json({ error: 'Failed to connect to database' });
      console.log("not connected");
      return new NextResponse("Failed to connect to database", {
        status: 500,
      });
    }
    const { database }: { database: Db } = connection;
    const collection = database.collection(
      process.env.NEXT_ATLAS_COLLECTION_3 as string
    );

    //   const existingUser = await collection.findOne({ email });

    //   if (existingUser) {
    //     return new NextResponse("Email is already in use", { status: 400 });
    //   }

    //   const hashedPassword = await bcrypt.hash(password, 5);

    try {
      const results = await collection.insertOne(formData);
      console.log(results);
      return new NextResponse("News added... ", { status: 200 });
    } catch (err: any) {
      console.log("error frm addnews : "+err)
      return new NextResponse(err, {
        status: 502,
      });
    }
  } catch (err: any) {
    return new NextResponse(err, {
      status: 502,
    });
  }
};
