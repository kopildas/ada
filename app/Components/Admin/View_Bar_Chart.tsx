'use client'

import { BarChart } from '@tremor/react';
import React from 'react'

export const View_Bar_Chart = ({data}) => {
  
  const formattedData = data.map((item) => ({
    name: item.name.split("::").pop(), // Extract only the date part
    Visitors: item.view
  }));



  return (
    <div className="w-full h-auto bg-slate-400 mt-10 ml-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 p-5 text-slate-100">
      {data && (
       <BarChart
       allowDecimals={false}
       showAnimation
       data={formattedData}
       categories={['Visitors']}
       index='name'
       className='text-slate-100'
     />
      )}
    </div>
  );
  
}
