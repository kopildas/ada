import { news } from '@/utils/types'
import Image from 'next/image'
import React from 'react'

export const SmallBox_2 = ({ data }: { data: news }) => {
  return (
    <div className='flex flex-col bg-red-00 md:flex-row w-full mb-10'>
        <div className='md:w-2/5 bg-red-00 flex items-center justify-center'>
        <div className="relative aspect-video h-[220px] md:w-[350px] rounded-xl ">
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
        <div className='md:w-3/5 flex flex-col items-start justify-center ml-5 md:ml-0 bg-red-00 text-zinc-900'>
              <p className="text-blue-500 mt-2 md:mt-0">{data.source.name}</p>
              <p className="text-2xl font-bold md:mt-4 md:mb-6">{data.title}</p>
              <p className="text-xl md:mb-4 text-zinc-500">{data.author}</p>
              </div>
    </div>
  )
}
