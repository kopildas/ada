"use client";
import Link from "next/link";
import React from "react";
import {signOut, useSession} from "next-auth/react"

const AuthNavContent = () => {
const {data:session}:any = useSession()
  return (
    <>
    {!session ? (
        <>
         <Link
        className="hover:text-blue-500 transition ease-in-out duration-200"
        href="/login"
      >
        Login
      </Link>

      <Link
        className="hover:text-blue-500 transition ease-in-out duration-200"
        href="/register"
      >
        Register
      </Link>
        </>
    ) : (
        <>
        {session.user?.email === "k@gmail.com" && 
        <Link
        className="hover:text-blue-500 transition ease-in-out duration-200"
        href="/admin"
      >
        Admin
      </Link>}
        <button onClick={()=>signOut()}>Logout</button>
        </>
    ) }
     
    </>
  );
};

export default AuthNavContent;
