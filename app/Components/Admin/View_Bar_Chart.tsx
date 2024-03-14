"use client";

import { ViewerData } from '@/utils/types';
import { BarChart } from '@tremor/react';
import React, { useEffect, useState } from "react";


async function getAllViewerData(): Promise<ViewerData> {
  // console.log(process.env.NEXTAUTH_URL)
  // const nextAuthUrl = process.env.NEXTAUTH_URL;
  // const link = new URL(`${nextAuthUrl}/api/getallviewer`);
    const response = await fetch("/api/getallviewer");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const responseData: ViewerData = await response.json();

  if (
    responseData &&
    responseData.message &&
    responseData.data &&
    responseData.totalViews &&
    responseData.todayViews &&
    responseData.today &&
    responseData.averageView
  ) {
    return responseData as ViewerData;
  } else {
    throw new Error("Invalid response data format");
  }
}




export const View_Bar_Chart = () => {
  const [res_data, setRes_data] = useState<ViewerData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await getAllViewerData();
      setRes_data(responseData);
      console.log("responseData fm clt compo :"+JSON.stringify(responseData) )
    };
console.log("res_data "+res_data)
    fetchData();
  }, []);
  
  console.log("res_data "+res_data)

  let formattedData:any = null
if(res_data){
  
  formattedData = res_data.data.map((item) => ({
    name: item.name.split("::").pop(), // Extract only the date part
    Visitors: item.view
  }));
}

  return (
    <div className="w-full h-96 bg-slate-400 mt-10 ml-10 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100 p-5 text-slate-100">
      {res_data && formattedData && (
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