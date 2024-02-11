import { getNewsTopHeadlines } from '@/api'
import { connectToDatabase } from '@/utils/connectMongo';
import { Db } from 'mongodb';
import React from 'react'

const page = async () => {
    console.log("test for mongo")
    async function handler() {
      try {
          const connection = await connectToDatabase();
          if (!connection) {
              // response.status(500).json({ error: 'Failed to connect to database' });
              console.log("not connected")
              return;
          }
          const { database }: { database: Db } = connection;
          const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION as string);
  
          const results = await collection.find().toArray();
              
              console.log("connected")
              console.log(results)
          // response.status(200).json(results);
      } catch (error) {
          console.error(error);
          // response.status(500).json({ error: 'Internal Server Error' });
      }
  }
  handler()
  
  return (
    <div className='text-black'>
      hola from world
    </div>
  )
}

export default page
