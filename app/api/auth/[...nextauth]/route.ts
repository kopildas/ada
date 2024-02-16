import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectToDatabase } from "@/utils/connectMongo";
import { Db } from "mongodb";

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any | null> {
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
        try {
          const user = await collection.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
            console.log(err)
          throw new Error(err);
        }
    
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == "credentials") {
        return true;
      }
      // if (account?.provider == "github") {
      //   await connect();
      //   try {
      //     const existingUser = await User.findOne({ email: user.email });
      //     if (!existingUser) {
      //       const newUser = new User({
      //         email: user.email,
      //       });

      //       await newUser.save();
      //       return true;
      //     }
      //     return true;
      //   } catch (err) {
      //     console.log("Error saving user", err);
      //     return false;
      //   }
      // }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };