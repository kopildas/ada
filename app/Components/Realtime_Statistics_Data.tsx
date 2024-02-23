"use client";

import React, { useEffect, useState } from "react";
import { Statistics_Box } from './Admin/Statistics_Box'
import { ViewerData } from '@/utils/types';




async function getAllViewerData(): Promise<ViewerData> {
    // const nextAuthUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
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




export const Realtime_Statistics_Data = () => {

    const [res_data, setRes_data] = useState<ViewerData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await getAllViewerData();
      setRes_data(responseData);
    };

    fetchData();
  }, []);


  return (
    <>
    {res_data && res_data.todayViews && (
            <Statistics_Box
              logo={"IoPersonOutline"}
              number={res_data.todayViews}
              title={"Today visitor"}
            />
          )}

          {res_data && res_data.averageView && (
            <Statistics_Box
              logo={"BsGraphUpArrow"}
              number={res_data.averageView}
              title={"Avg. visitor"}
            />
          )}

          {res_data && res_data.totalViews && (
            <Statistics_Box
              logo={"RiFolderHistoryLine"}
              number={res_data.totalViews}
              title={"Total visitor"}
            />
          )}

          {res_data && res_data.todayViews && (
            <Statistics_Box
              logo={"BsPostcard"}
              number={res_data.todayViews}
              title={"Total post"}
            />
          )}
    </>
  )
}
