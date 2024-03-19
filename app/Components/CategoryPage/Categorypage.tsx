"use client";

import { news } from "@/utils/types";
import Link from "next/link";
import BigTopNews_2 from "./BigTopNews_2";
import SmallBox_1 from "../SmallBox_1";
import BigBox_1 from "../BigBox_1";
import { BigBox_2 } from "../BigBox_2";
import { useState } from "react";
import { SmallBox_2 } from "../SmallBox_2";
import BigBox_3 from "./BigBox_3";
export const Categorypage = ({ data }: { data: news }) => {
  // console.log(data);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 14;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = null;
  if (data) {
    currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  }

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  const [isChecked, setIsChecked] = useState(false);

  console.log(data);
  console.log(currentItems);

  let loop_currentItems = null;
  if (currentItems) {
    loop_currentItems = currentItems.slice(8, 14);
  }
  console.log(loop_currentItems);

  return (
    <div className="w-full flex flex-col px-10">
      <div
        // href={`/${item.category}/${item._id}`}
        className="w-full flex flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 bg-red-00">
          {currentItems[0] && <BigTopNews_2 data={currentItems[0]} />}
        </div>
        <div className="w-full md:w-1/2 h-fit bg-red-00 mt-5 md:mt-0 flex flex-wrap lg:items-center lg:justify-center gap-10 lg:pt-5 ml-2 md:ml-5 lg:ml-0">
          {currentItems[1] && <BigBox_2 data={currentItems[1]} />}
          {currentItems[2] && <BigBox_2 data={currentItems[2]} />}
          {currentItems[3] && <BigBox_2 data={currentItems[3]} />}
          {currentItems[4] && <BigBox_2 data={currentItems[4]} />}
        </div>
        {/* <p className="text-black bg-green-300">{indx}</p> */}
        {/* <BigBox_2 data={item} /> */}
      </div>

      <div className="hidden md:flex items-center justify-center gap-10 mt-10 md:-mt-[10rem] lg:mt-[3rem] mb-[5rem] px-5">
      {currentItems[5] && <BigBox_3 data={currentItems[5]} />}
      {currentItems[6] && <BigBox_3 data={currentItems[6]} />}
      {currentItems[7] && <BigBox_3 data={currentItems[7]} />}
      </div>

      <div className='w-full mt-10 flex flex-col md:flex-row md:flex-wrap bg-red-00 justify-between'>
        {loop_currentItems && loop_currentItems.map((item: news,indx:any)=>(
            <div key={indx} className='md:w-1/2'>
                <SmallBox_2 data={item as news}/>
            </div>
        ))}
    </div>



      {/* Pagination controls */}
      {data ? (
        <div className="mt-4">
          <ul className="flex justify-center space-x-2">
            {Array.from({
              length: Math.ceil(data.length / itemsPerPage),
            }).map((_, index) => (
              <li
                key={index}
                onClick={() => paginate(index + 1)}
                className={`cursor-pointer px-3 py-1 rounded-full ${
                  currentPage === index + 1 ? "bg-blue-400" : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      ) : null}


      {/* {data &&
        data.map((item, indx) => (
          
        ))} */}
    </div>
  );
};
