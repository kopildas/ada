'use server'

import { connectToDatabase } from "@/utils/connectMongo";
import User from "@/models/User";
import mongoose from "mongoose";
import { Db } from "mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const GET = async () => {
//   const { namespace, key } = await request.json();

  try {
    const connection = await connectToDatabase();
    if (!connection) {
      const errorResponse:any = { error: 'Failed to connect to database' };
      // console.log("Error response:", JSON.stringify(errorResponse)); // Log error response
      return new NextResponse(errorResponse, { status: 500 });
    }

    const { database }: { database: Db } = connection;

    let name = "analytics::pageview";

    const collection2 = database.collection(name as string);
    // name = key;

    let all_viewer: any = await collection2.find().toArray();
    all_viewer = all_viewer.reverse();

    // Calculate total views
    let totalViews = 0;
    for (const viewer of all_viewer) {
      totalViews += viewer.view || 0; // Ensure view property exists and handle potential undefined values
    }

    // Calculate average view
    let averageView = all_viewer.length > 0 ? totalViews / all_viewer.length : 0;
    averageView = parseFloat(averageView.toFixed(2))


    // Calculate today's views
    let today = new Date().toLocaleDateString('en-GB'); // Get today's date in "DD-MM-YYYY" format
    today ="analytics::pageview::"+today
    let todayViews = 0;
    for (const viewer of all_viewer) {
      if (viewer.name.includes(today)) {
        todayViews += viewer.view || 0;
      }
    }


    const successResponse:any = { message: "Getting all viewers", data: all_viewer, totalViews,todayViews,today,averageView };
   
    revalidatePath("/");
    // console.log("Success response:", JSON.stringify(successResponse)); // Log success response
    return new NextResponse(JSON.stringify(successResponse), { status: 200 });
  } catch (err: any) {
    const errorResponse:any = { error: err.message };
    // console.log("Error response:", JSON.stringify(errorResponse)); // Log error response
    return new NextResponse(errorResponse, { status: 502 });
  }
};
