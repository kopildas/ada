import { getNewsTopHeadlines } from '@/api'
import { removeDuplicate } from '@/utils'
import React from 'react'
import BigTopNews from './BigTopNews'

const TopNews = async () => {
  const fetchingData = async () => {
    const newsTop = await getNewsTopHeadlines()
    const filterData = removeDuplicate(newsTop)
    console.log(newsTop)
    console.log(filterData)
   
    return filterData;
  }

  const data = await fetchingData()
  const singledata = data[1]
  console.log(data)
  console.log(singledata)
  return (
    <div className='w-full h-[calc(100vh-160px)] flex'>
      <div className='w-[60%]'>
        {singledata && <BigTopNews data={singledata}/>}
      </div>
      <div className='w-[40%] bg-green-400'>
      {/* {singledata && <BigTopNews data={singledata}/>} */}
      </div>
    </div>
  )
}

export default TopNews
