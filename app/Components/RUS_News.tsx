import { getRUSNews } from "@/api";
import { removeDuplicate } from "@/utils";
import BigBox_1 from "./BigBox_1";
import { BigBox_2 } from "./BigBox_2";

export const RUS_News = async () => {
  const fetchingData = async () => {
    const newsTop = await getRUSNews();
    const filterData = removeDuplicate(newsTop);
    // console.log(newsTop);
//     console.log(filterData);

    return filterData;
  };

  const data = await fetchingData();
  const singledata = data[3];
  // console.log(singledata);
  const sliceData = data.slice(0, 6);
  return (
    <div className="w-full flex flex-wrap bg-green-00">
      {sliceData &&
        sliceData.map((item, indx) => (
          <div key={indx} className="md:w-1/3">
            <BigBox_2 data={item} />
          </div>
        ))}
    </div>
  );
};
