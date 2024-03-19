"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Search_Button } from "./Search_Option/Search_Button";
import { news } from "@/utils/types";

const AuthNavContent = () => {
  const { data: session }: any = useSession();
  return (
    <>
      {!session ? (
        <>
          <div className=" w-fit flex flex-col lg:flex-row  items-center justify-center bg-fuchsia-00 gap-4">
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
            <div className="hidden lg:block">
              <Search_Button />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" w-fit flex flex-col lg:flex-row items-center justify-center bg-fuchsia-00 gap-4">
            {session.user?.email === "k@gmail.com" && (
              <Link
                className="hover:text-blue-500 transition ease-in-out duration-200"
                href="/admin"
              >
                Admin
              </Link>
            )}
            <button onClick={() => signOut()}>Logout</button>
            <div className="hidden lg:block">
              <Search_Button />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuthNavContent;
