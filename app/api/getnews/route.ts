import { connectToDatabase } from "@/utils/connectMongo";
import { Db,ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: Request | NextApiRequest, res: NextApiResponse) => {
  //   const { email, password } = await request.json();
  const id:any = req.url?.split("=")[1];
  // Optional chaining and type casting to string

  // Handle potential missing ID
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Missing required parameter 'id'" });
  }
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
    const results = await collection.findOne({ _id: new ObjectId(id) });

    if (!results) {
      return new NextResponse("news not found", { status: 400 });
    }
    console.log(results);
    return new NextResponse(JSON.stringify(results), { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 502,
    });
  }
};
