export const dynamic = "force-dynamic";

import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Statistics_Box } from "../Components/Admin/Statistics_Box";
import { Admin_latest_news } from "../Components/Admin/Admin_latest_news";
import { View_Bar_Chart } from "../Components/Admin/View_Bar_Chart";
import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
import { Realtime_Statistics_Data } from "../Components/Realtime_Statistics_Data";
import Sidebar from "../Components/Admin/Sidebar";
// import Sidebar from "../Components/Admin/Sidbar";



const page = async () => {
  // noStore();

  const session: any = await getServerSession();
  if (!session || session.user?.email !== "k@gmail.com") {
    // console.log(session.user?.email)
    redirect("/");
  }

  // const responseData = await getAllViewerData();

  // // const responseData = {"totalViews":47,"todayViews":2,"today":"analytics::pageview::20/02/2024","averageView":7.83}
  // console.log(responseData);
 

  return (

      
      <div className="w-full h-screen bg-slate-300 flex flex-col">
        <div className="w-full h-20 bg-blue-00 px-5 py-5">
          <p className="text-3xl font-semibold">Dashboard</p>
          <p className="text-xl text-zinc-600">Welcome back</p>
        </div>
        <div className="w-full h-[10rem] bg-blue-00 flex items-center justify-center gap-12">
          <Realtime_Statistics_Data/>
        </div>

        <div className="w-full h-[1px] px-10 mt-5">
          <div className="w-full h-[1px] bg-zinc-400"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-[45%]">
           <View_Bar_Chart  />
          </div>
          <div className="w-[45%]">
            <Admin_latest_news />
          </div>
        </div>
      </div>

  );
};

export default page;
