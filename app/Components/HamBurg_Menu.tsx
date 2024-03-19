"use client";

import React, { useState } from "react";
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaHome,
  FaThList,
  FaUserAlt,
  FaRegTimesCircle
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import AuthNavContent from "./AuthNavContent";
import { useToggleState } from "@/state/toggle_menu";


export const HamBurg_Menu = () => {
  const {isOpen,setIsOpen} = useToggleState()
    // const [isOpen, setIsOpen] = useState(false);
    const menuItem = [
        {
          path: "/",
          name: "Home",
          icon: <FaHome />,
        },
        {
          path: "/foods",
          name: "Foods",
          icon: < FaThList />,
        },
        {
          path: "/about",
          name: "About",
          icon: <FaRegChartBar />,
        }
      ];

      console.log(isOpen)

  return (
    <div className="z-0 relative">
      {" "}
      {isOpen ? (<IoCloseSharp
        onClick={() => setIsOpen(!isOpen)}
        className="text-5xl text-gray-200 cursor-pointer"
      />) : (<FaBars
        onClick={() => setIsOpen(!isOpen)}
        className="text-4xl text-gray-200 cursor-pointer"
      />)}
      {isOpen && (
         <div className="lg:hidden w-screen h-screen bg-blue-500 text-white z-50 -ml-[23rem] md:-ml-[49rem] mt-16 pb-4 absolute bg-opacity-5 backdrop-blur-sm inset-0">
         <ul className="">
           <li className="space-y-6 flex flex-col items-end justify-end font-semibold bg-blue-500 text-base p-5">
             <Link
               className="hover:text-gray-600 hover:pr-5 transition ease-in-out duration-200"
               href="/world"
             >
               World
             </Link>
             <Link
               className="hover:text-gray-600 hover:pr-5 transition ease-in-out duration-200"
               href="/business"
             >
               Business
             </Link>
             <Link
               className="hover:text-gray-600 hover:pr-5 transition ease-in-out duration-200"
               href="/science"
             >
               Science
             </Link>
             <Link
               className="hover:text-gray-600 hover:pr-5 transition ease-in-out duration-200"
               href="/health"
             >
               Health
             </Link>
             <Link
               className="hover:text-gray-600 hover:pr-5 transition ease-in-out duration-200"
               href="/sport"
             >
               Sport
             </Link>
             <Link
               className="hover:text-gray-600 hover:pr-5 transition ease-in-out duration-200"
               href="/lifestyle"
             >
               Lifestyle
             </Link>
             <Link
               className="hover:text-gray-600 hover:pr-5 transition ease-in-out duration-200"
               href="/food"
             >
               Food
             </Link>
             <Link
               className="hover:text-gray-600 hover:pr-5 transition ease-in-out duration-200"
               href="/travel"
             >
               Travel
             </Link>
             <AuthNavContent/>
           </li>
         </ul>
       </div>
        )}
    </div>
  );
};
