import { news } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

export const SmallBox_2 = ({ data }: { data: news }) => {
  return (
    <Link
          href={`/${data.category}/${data._id}`} className='flex flex-col bg-red-00 lg:flex-row w-full mb-10 gap-2'>
        <div className=' md:w-[300px] bg-red-00 flex items-center justify-center'>
        <div className="relative aspect-video h-[220px] md:w-[300px] rounded-xl ">
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
        <div className='lg:w-3/5 flex flex-col items-start justify-center lg:mr-5 bg-red-00 text-zinc-900'>
              {/* <p className="text-blue-500 mt-2 md:mt-0">{data.source.name}</p> */}
              <p className="text-xl font-bold md:mt-4 md:mb-6">{data.title}</p>
              <p className="text-xl md:mb-4 text-zinc-500">{data.author}</p>
              </div>
    </Link>
  )
}
