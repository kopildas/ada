import { connectToDatabase } from "@/utils/connectMongo";
import User from "@/models/User";
import mongoose from "mongoose";
import { Db } from "mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password } = await request.json();

  const connection = await connectToDatabase();
  if (!connection) {
    // response.status(500).json({ error: 'Failed to connect to database' });
    console.log("not connected");
    return;
  }
  const { database }: { database: Db } = connection;
  const collection = database.collection(
    process.env.NEXT_ATLAS_COLLECTION_2 as string
  );

  const existingUser = await collection.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    const results = await collection.insertOne({
      email,
      password: hashedPassword,
    });
    console.log(results);
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 502,
    });
  }
};
