import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectToDatabase } from "@/utils/connectMongo";
import { Db } from "mongodb";
import { authOptions } from "./option";



const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };