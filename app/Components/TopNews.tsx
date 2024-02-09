import { getNewsTopHeadlines } from '@/api'
import { removeDuplicate } from '@/utils'
import React from 'react'
import BigTopNews from './BigTopNews'
import SmallBox_1 from './SmallBox_1'
import { news } from '@/utils/types'

const TopNews = ({ data }: { data: news[] }) => {
  
  const singledata = data[3]
  console.log(data)
  console.log(singledata)
  return (
    <>
    <div className='w-full h-[calc(100vh-160px)] flex'>
      <div className='w-[60%]'>
        <div className='flex w-full items-center justify-start mt-10 -ml-5 bg-red-00'>
          <p className='w-auto text-3xl font-bold text-zinc-800'>Top News</p>
          <div className="w-[80%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
        </div>
        {singledata && <BigTopNews data={singledata}/>}
      </div>
      <div className='w-[40%] bg-green-40'>
      <div className='flex w-full items-center justify-start mt-5 mb-5 p-5 bg-red-00'>
          <p className='w-auto text-3xl font-bold text-zinc-800'>Scoop</p>
          <div className="w-[80%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
        </div>
      {singledata && <SmallBox_1 data={data[5]}/>}
      {singledata && <SmallBox_1 data={data[2]}/>}
      {singledata && <SmallBox_1 data={data[4]}/>}
      </div>
    </div>

    

    </>
  )
}

export default TopNews
