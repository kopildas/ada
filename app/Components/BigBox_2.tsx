import { news } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

export const BigBox_2 = ({ data }: { data: news }) => {
  // Truncate the title if it exceeds 40 characters
  const truncatedTitle = data.title.length > 40 ? data.title.slice(0, 30) + '...' : data.title;
// console.log(truncatedTitle)
  return (
    <div className='flex flex-col w-full mb-10 bg-blue-0 items-center justify-center'>
        <div className='md:w-2/5 bg-red-00 flex items-center justify-center bg-green-100'>
            <div className="relative aspect-video h-[220px] w-[350px] rounded-xl ">
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
        <div className='md:w-3/5 flex flex-col items-start justify-center ml-7 md:-ml-14 bg-red-00 text-zinc-900'>
              
              {truncatedTitle && <p className="text-2xl font-bold mt-4 mb-2">{truncatedTitle} <span className="text-sm text-blue-500"></span></p>}
              <p className="text-xl mb-4 text-zinc-500">{data.author}</p>
        </div>
    </div>
  )
}
