import { Db } from "mongodb";
import { connectToDatabase } from "./connectMongo";
import { news } from "./types";
import { format, subDays } from 'date-fns'

export const getDate = (sub: number = 0) => {
  const dateXDaysAgo = subDays(new Date(), sub)

  return format(dateXDaysAgo, 'dd/MM/yyyy')
}

export const db_connection = async (namespace: string,key: string) => {
    // const connection = await connectToDatabase();
    //     if (!connection) {
    //       // response.status(500).json({ error: 'Failed to connect to database' });
    //       console.log("not connected");
    //       return;
    //     }
        // const { database }: { database: Db } = connection;

        // const collection = database.collection(
        //     key as string
        //   );
    //       await collection.updateOne(
    //         { name: `analytics::${namespace}` },
    //         { $inc: { view: 1, "metrics.orders": 1 } }
    //      )
    
}

// export const removeDuplicate = (articles:any) =>{
//     const randomArticles:news[] = articles?.articles
//     const filteringArticles = randomArticles.filter(article => article?._id !== null)
//     return filteringArticles;
// }