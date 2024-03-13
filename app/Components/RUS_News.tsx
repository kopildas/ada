// import { getRUSNews } from "@/api";
// import { removeDuplicate } from "@/utils";
import BigBox_1 from "./BigBox_1";
import { BigBox_2 } from "./BigBox_2";
import { getNewsByCategory, getRUSNews } from "../api";
import Link from "next/link";


export const RUS_News = async ({category}:{category:string}) => {
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
    <div className="w-full flex flex-wrap items-center justify-center md:justify-start bg-green-00 gap-5 md:gap-0">
      {sliceData &&
        sliceData.map((item, indx) => (
          <div key={indx}className="md:w-1/3">
            <BigBox_2 data={item} />
          </div>
        ))}
    </div>
  );
};
