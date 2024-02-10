import { news } from '@/utils/types'
import React from 'react'
import { SmallBox_2 } from './SmallBox_2'

export const LatestNews = ({data}: {data:news[]}) => {
    const sliceData = data.slice(0,6)
    return (
    <div className='w-full flex flex-col md:flex-row md:flex-wrap'>
        {sliceData && sliceData.map((item,indx)=>(
            <div key={indx} className='md:w-1/2'>
                <SmallBox_2 data={item}/>
            </div>
        ))}
    </div>
  )
}
