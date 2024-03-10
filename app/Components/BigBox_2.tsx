import { news } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

export const BigBox_2 = ({ data }: { data: news }) => {
  // Truncate the title if it exceeds 40 characters
  const truncatedTitle = data.title.length > 30 ? data.title.slice(0, 10) + '...' : data.title;
  const truncatedTitle2 = data.title.length > 30 ? data.title.slice(0, 17) + '...' : data.title;
// console.log(truncatedTitle)
  return (
    <div className='flex flex-col w-full mb-10 bg-blue-00 items-center justify-center'>
        <div className='md:w-[140px] lg:w-[300px] w-full bg-red-00 flex items-center justify-center bg-green-00'>
            <div className="relative aspect-video w-[150px] h-[100px] md:h-[120px] bg-green-00 lg:h-[220px] md:w-[140px] lg:w-[300px] rounded-xl ">
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
        <div className='md:w-[140px] lg:w-[300px] flex flex-col items-start md:justify-center mr-5 md:mr-0 bg-red-00 text-zinc-900'>
              
              {truncatedTitle && <p className="block lg:hidden lg:text-2xl text-lg font-bold md:mt-4 mb-2">{truncatedTitle}</p>}
              {truncatedTitle2 && <p className="lg:block hidden lg:text-2xl text-lg font-bold md:mt-4 mb-2">{truncatedTitle2}</p>}
              <p className="lg:text-xl text-xs mb-4 text-zinc-500">{data.author} y</p>
        </div>
    </div>
  )
}
