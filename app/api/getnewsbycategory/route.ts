import { connectToDatabase } from "@/utils/connectMongo";
import { Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse,NextRequest } from "next/server";

export const GET = async (req: Request | NextRequest, res: NextApiResponse) => {
  //   const { email, password } = await request.json();
  const category: any = req.url?.split("=")[1];
  // Optional chaining and type casting to string
  // console.log(category);
  // Handle potential missing ID
  //   if (!ObjectId.isValid(id)) {
  //     return res.status(400).json({ message: "Missing required parameter 'id'" });
  //   }
  const connection = await connectToDatabase();
  if (!connection) {
    // response.status(500).json({ error: 'Failed to connect to database' });
    console.log("not connected");
    return;
  }
  let name = "all_news";
  const { database }: { database: Db } = connection;
  const collection = database.collection(name as string);

  try {
    const results = await collection.find({ category }).toArray();

    if (!results) {
      return new NextResponse("news not found", { status: 400 });
    }
    // console.log(results);
    // console.log(JSON.stringify(results));
    return new NextResponse(JSON.stringify(results), { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 502,
    });
  }
};
