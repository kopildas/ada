import { news } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";


export const BigBox_2 = ({ data }: { data: news }) => {
  // Truncate the title if it exceeds 40 characters
  const truncatedTitle = data.title.length > 30 ? data.title.slice(0, 10) + '...' : data.title;
  const truncatedTitle2 = data.title.length > 30 ? data.title.slice(0, 17) + '...' : data.title;
// console.log(truncatedTitle)
  return (
    <Link  href={`/${data.category}/${data._id}`} className='flex flex-col w-[40%] lg:mb-10 bg-blue-00 lg:items-center lg:justify-center h-fit'>
        <div className='md:w-[140px] lg:w-[270px] w-full bg-red-00 flex items-center justify-center bg-green-00'>
            <div className="relative aspect-video w-[150px] h-[100px] md:h-[120px] bg-green-00 lg:h-[220px] md:w-[140px] lg:w-[270px] rounded-xl ">
                {data.urlToImage && (
                  <Image
                    src={data.urlToImage}
                    alt={data.title}
                    fill
                    className="rounded-xl"
                  />
                )}
            </div>
        </div>
        <div className='md:w-[140px] lg:w-[270px] w-[150px] flex flex-col items-start md:justify-center -ml-10 md:ml-0 md:mr-0 bg-red-00 text-zinc-900'>
              
              {truncatedTitle && <p className="block lg:hidden lg:text-xl text-lg font-bold md:mt-2">{truncatedTitle}</p>}
              {truncatedTitle2 && <p className="lg:block hidden lg:text-xl text-lg font-bold md:mt-2">{truncatedTitle2}</p>}
              <p className="lg:text-xl text-xs md:mb-4 lg:mb-4 text-zinc-500">{data.author} y</p>
        </div>
    </Link>
  )
}
