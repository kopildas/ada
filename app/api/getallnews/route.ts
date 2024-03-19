export const revalidate = 0;

import { connectToDatabase } from "@/utils/connectMongo";
import User from "@/models/User";
import mongoose from "mongoose";
import { Db } from "mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


export async function GET(){
//   const { namespace, key } = await request.json();

  try {
    const connection = await connectToDatabase();
    if (!connection) {
      const errorResponse:any = { error: 'Failed to connect to database' };
      // console.log("Error response:", JSON.stringify(errorResponse)); // Log error response
      return new NextResponse(errorResponse, { status: 500 });
    }

    const { database }: { database: Db } = connection;

    let name = "all_news";

    const collection2 = database.collection(name as string);
    // name = key;

    let all_news: any = await collection2.find().toArray();
    all_news = all_news.reverse();


    const successResponse:any = { message: "Getting all news", data: all_news };
    // console.log("Success response:", JSON.stringify(successResponse)); // Log success response
    return new NextResponse(JSON.stringify(successResponse), { status: 200 });
  } catch (err: any) {
    const errorResponse:any = { error: err.message };
    // console.log("Error response:", JSON.stringify(errorResponse)); // Log error response
    return new NextResponse(errorResponse, { status: 502 });
  }
};
