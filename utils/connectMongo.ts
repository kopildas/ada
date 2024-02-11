import { MongoClient, Db } from "mongodb";

// Define types for uri and options
const uri: string = process.env.MONGODB_URI || '';
const options:any = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

let mongoClient: any = null;
let database: any = null;

// Rest of the code remains unchanged

export async function connectToDatabase(): Promise<{ mongoClient: MongoClient, database: Db } | undefined> {
    try {
        if (mongoClient && database) {
            console.log("cached database connection");
            return { mongoClient, database };
        }
        if (process.env.NODE_ENV === "development") {
            if (!(global as any)._mongoClient) {
                mongoClient = await (new MongoClient(uri, options)).connect();
                (global as any)._mongoClient = mongoClient;
            } else {
                mongoClient = (global as any)._mongoClient;
            }
        } else {
            mongoClient = await (new MongoClient(uri, options)).connect();
        }
        database = await mongoClient.db(process.env.NEXT_ATLAS_DATABASE);
        console.log("just connected..")
        return { mongoClient, database };
    } catch (e) {
        console.error(e);
        // return undefined; // Return undefined if there's an error
    }
}
