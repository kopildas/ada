import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import { BsPostcard, BsGraphUpArrow } from "react-icons/bs";
import { RiFolderHistoryLine } from "react-icons/ri";

// Define the type of the logo parameter
type LogoType = "BsGraphUpArrow" | "RiFolderHistoryLine" | "BsPostcard" | "IoPersonOutline";

interface Props {
  logo: LogoType; // Add type annotation here
  number: number;
  title: string;
}

export const Statistics_Box: React.FC<Props> = ({ logo, number, title }) => {
  return (
    <div className={`w-[22%] h-[6rem] flex items-center justify-center gap-5 bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 rounded-lg ${logo === "BsGraphUpArrow" && "bg-green-50"} ${logo === "RiFolderHistoryLine" && "bg-green-50"} ${logo === "BsPostcard" && "bg-green-50"} ${logo === "IoPersonOutline" && "bg-green-50"}`}>

      <div>
        <p className='text-4xl font-semibold'>{number}</p>
      </div>

      <div className='flex items-center justify-center flex-col gap-4'>
        {logo === "BsGraphUpArrow" && <BsGraphUpArrow className='text-xl' />}
        {logo === "RiFolderHistoryLine" && <RiFolderHistoryLine className='text-xl' />}
        {logo === "BsPostcard" && <BsPostcard className='text-xl' />}
        {logo === "IoPersonOutline" && <IoPersonOutline className='text-xl' />}
        <p className='text-xl -mt-2'>{title}</p>
      </div>

    </div>
  );
};
