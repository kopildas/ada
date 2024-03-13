// import { getRUSNews } from "@/api";
// import { removeDuplicate } from "@/utils";
// import BigBox_1 from "./BigBox_1";
// import { BigBox_2 } from "./BigBox_2";
// import { getNewsByCategory, getRUSNews } from "../api";
import { getNewsByCategory } from "@/app/api";
import Link from "next/link";
import { Related_Big_box_1 } from "./Related_Big_box_1";
import { Choi_Box_1 } from "./Choi_Box_1";


export const Choice_Box = async ({category}:{category:string}) => {
  const fetchingData = async () => {
    const newsTop = await getNewsByCategory(category);
    // const filterData = removeDuplicate(newsTop);
    // console.log(newsTop);
//     console.log(filterData);

    return newsTop;
  };

  const data = await fetchingData();
  const singledata = data[3];
  // console.log(data);
  const sliceData = data.slice(0, 6);
  return (
    <div className="w-full flex flex-col items-center justify-center bg-green-00 gap-5 md:gap-0">
      {sliceData &&
        sliceData.map((item: news,indx:any) => (
          <div key={indx}className="md:w-full flex gap-5">
            <Choi_Box_1 data={item as news} />
          </div>
        ))}
    </div>
  );
};
