export const dynamic = "force-dynamic";

import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Statistics_Box } from "../Components/Admin/Statistics_Box";
import { Admin_latest_news } from "../Components/Admin/Admin_latest_news";
import { View_Bar_Chart } from "../Components/Admin/View_Bar_Chart";
import { unstable_noStore as noStore } from 'next/cache'; 

interface ViewerData {
  message?: string;
  data?: {
    _id?: string;
    name?: string;
    view?: number;
    metrics?: {
      orders?: number;
    };
  }[];
  totalViews?: number;
  todayViews?: number;
  today?: string;
  averageView?: number;
}

async function getAllViewerData(): Promise<ViewerData> {

  const link = new URL(`${process.env.NEXTAUTH_URL}/api/getallviewer`);
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  
  return response.json() as ViewerData;
}

const page = async () => {
  noStore(); 

  const session: any = await getServerSession();
  if (!session || session.user?.email !== "k@gmail.com") {
    // console.log(session.user?.email)
    redirect("/");
  }

  const responseData = await getAllViewerData();

  // const responseData = {"totalViews":47,"todayViews":2,"today":"analytics::pageview::20/02/2024","averageView":7.83}
  console.log(responseData);

 

  return (
    <div className="text-zinc-900 w-full flex ">
      <div className="w-1/6 h-screen bg-zinc-900"></div>
      <div className="w-5/6 h-screen bg-slate-300 flex flex-col">
        <div className="w-full h-20 bg-blue-00 px-5 py-5">
          <p className="text-3xl font-semibold">Dashboard</p>
          <p className="text-xl text-zinc-600">Welcome back</p>
        </div>
        <div className="w-full h-[10rem] bg-blue-00 flex items-center justify-center gap-12">
          <Statistics_Box
            logo={"IoPersonOutline"}
            number={responseData.todayViews}
            title={"Today visitor"}
          />
          <Statistics_Box
            logo={"BsGraphUpArrow"}
            number={responseData.averageView}
            title={"Avg. visitor"}
          />
          <Statistics_Box
            logo={"RiFolderHistoryLine"}
            number={responseData.totalViews}
            title={"Total visitor"}
          />
          <Statistics_Box
            logo={"BsPostcard"}
            number={responseData.todayViews}
            title={"Total post"}
          />
        </div>

        <div className="w-full h-[1px] px-10">
          <div className="w-full h-[1px] bg-zinc-500"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-[45%]">
            <View_Bar_Chart data={responseData.data} />
          </div>
          <div className="w-[45%]">
            <Admin_latest_news />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;