'use client'


import { news } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { useToggleState } from '@/state/toggle_menu';

export const SmallBox_2 = ({ data }: { data: news }) => {
  const truncatedTitle = data.title.length > 30 ? data.title.slice(0, 30) + '...' : data.title;
  const truncatedTitle2 = data.title.length > 30 ? data.title.slice(0, 37) + '...' : data.title;
  const {isOpen} = useToggleState()
  return (
    <Link
          href={`/${data.category}/${data._id}`} className='flex flex-col bg-red-00 lg:flex-row w-full mb-10 gap-2 group'>
        <div className=' md:w-[300px] bg-red-00 flex items-center justify-center'>
        <div className="relative aspect-video h-[220px] md:w-[300px] rounded-xl bg-cover overflow-hidden">
                {data.urlToImage && (
                  <Image
                    src={data.urlToImage}
                    alt={data.title}
                    className={`rounded-xl group-hover:scale-110 duration-500 transition ease-in-out ${isOpen ? "-z-10" : "z-10"}`}
                    fill
                  />
                )}
              </div>
        </div>
        <div className='lg:w-3/5 flex flex-col items-start justify-center lg:mr-5 bg-red-00 text-zinc-900 group-hover:text-blue-500 duration-500 transition ease-in-out lg:ml-2'>
              {/* <p className="text-blue-500 mt-2 md:mt-0">{data.source.name}</p> */}
              {truncatedTitle && <p className="block lg:hidden lg:text-xl text-lg font-bold md:mt-4 mb-2">{truncatedTitle}</p>}
              {truncatedTitle2 && <p className="lg:block hidden lg:text-xl text-lg font-bold md:mt-4 mb-2">{truncatedTitle2}</p>}
              <p className="text-xl md:mb-4 text-zinc-500 group-hover:text-blue-500 duration-500 transition ease-in-out">{data.author}</p>
              </div>
    </Link>
  )
}
