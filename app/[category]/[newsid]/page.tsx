
import { Choice_Box } from "@/app/Components/CategoryPage/Choice_Box";
import { Related_News } from "@/app/Components/CategoryPage/Related_News";
import { RUS_News } from "@/app/Components/RUS_News";
import { Single_Top_img } from "@/app/Components/Single_Top_img";
import { getNews, getNewsByCategory } from "@/app/api";
import Image from "next/image";

async function page({
  params,
}: {
  params: { category: string; newsid: string };
}) {
  // const fetchingData:any = async () => {
  //   let [categoryData, data] = await Promise.all([getNewsByCategory(params.category), getNews(params.newsid)]);
  //   return [categoryData, data]
  // };
  // let dataa = await fetchingData()
// let flag = true
// if(flag){
  // let categorry = await getNewsByCategory(params.category);
  let data = await getNews(params.newsid);
  // let [categoryData, data] = await fetchingData()

  // categoryData = JSON.stringify(categoryData);
  // data = JSON.stringify(data);
  // flag=false
// }
  // let data = {
  //   _id: "65df59d6e4adbf5d7040b733",
  //   author: "Ada News",
  //   title:
  //     "In History: Martin Luther King Jr, a misunderstood icon of US history",
  //   description:
  //     '"My work is simply an attempt to say to America that you have a marvellous ideal, and that you should live up to it," said Martin Luther King Jr in an exclusive 1961 BBC interview. What is the truth behind the mythology that surrounds the civil rights leader?',
  //   urlToImage: "https://i.ibb.co/8j8MtMq/p0hfcl61.webp",
  //   publishedAt: "2024-02-28T21:41:42",
  //   content: "...",
  //   category: "lifestyle",
  // };

  console.log(data);

  const dateTime = new Date(data.publishedAt);
  const dateOptions: any = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = dateTime.toLocaleDateString("en-US", dateOptions);

  const timeOptions: any = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedTime = dateTime.toLocaleTimeString("en-US", timeOptions);

  // const paramsss = useParams<{ category: string; newsid: string }>()
  // // const { id, category } = router.query;
  // // console.log("id ", id);
  // console.log("category ", paramsss);

  return (
    <div className="bg-red-00 flex flex-col  ">

    
    <div className="bg-red-00 flex flex-col md:flex-row md:mt-10 ">
      <div className="md:w-[75%] h-auto bg-green-00 flex flex-col md:pl-14 p-2 md:p-0 ">
        <p className="text-gray-900 text-4xl font-semibold  mr-5">
          {data.title}
        </p>
        <div className="flex gap-5 mt-5 text-gray-600">
          <p className="text-blue-500 ">{data.author}</p>
          <p>{formattedDate}</p>
        </div>
        <div className="flex gap-5 mt-5 text-gray-600">
          <p>Share it on : </p>
        </div>

        <Single_Top_img data={data}/>

        <div className="flex flex-col mt-10 mb-5 bg-green-00 text-gray-600 text-2xl font-semibold">
          <p className="">{data.description}</p>
        </div>
        <div className="flex flex-col mt-7 mb-5 bg-green-00 text-gray-600 text-xl">
          {data.content && (
            <div className="">
              <p className="font-bold text-6xl text-gray-700  bg-red-00 float-left leading-10 w-[4.5rem] h-20 flex items-center justify-center border-2 mr-2">
                {data.content.charAt(0)}
              </p>
              <p className="">{data.content.slice(1)}</p>
            </div>
          )}
        </div>

        <div className="w-[80%] h-[1px] bg-gradient-to-r from-BASE_line to-white mt-10 mb-10"></div>
        <div className="flex gap-5">
          <p className="text-blue-500 ">{data.author}</p>
          <p className="text-gray-800 ">Share it on : </p>
        </div>
        <div className="w-[80%] h-[1px] bg-gradient-to-r from-BASE_line to-white mt-10 mb-10"></div>


        

      </div>

      <div className="hidden md:block w-[25%] h-20 bg-green-00 ">
      <div className="flex w-full items-center justify-start mb-4 bg-red-00">
            <p className="w-auto pl-10 md:pl-0  text-xl md:text-xl font-bold text-zinc-700 hover:text-blue-500 transition ease-in-out duration-200">
              Your Choice
            </p>
            <div className="w-[25%] lg:w-[40%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
          </div>
          <div className="lg:ml-0 md:ml-0 ml-10 bg-blue-00">
          {/* <RUS_News category="business"/> */}
          <Choice_Box category={data.category}/>
          </div>
      </div>
    </div>


    <div className="">
          <div className="flex w-full items-center justify-start mt-[7rem] mb-5 md:mb-14 bg-red-00">
            <p className="w-auto  md:pl-0  md:ml-10 p-2 text-2xl md:text-3xl font-bold text-zinc-800 hover:text-blue-500 transition ease-in-out duration-200">
              {data.category}
            </p>
            <div className="w-[55%] md:w-[60%] h-[2px] bg-gradient-to-r from-slate-800 to-white ml-5"></div>
          </div>

          <div className="lg:ml-0 md:ml-0 mb-10 md:mb-2  bg-blue-00">
          {/* <RUS_News category="business"/> */}
          <Related_News category={data.category}/>
          </div>

          </div>

    </div>
  );
}

export default page;
