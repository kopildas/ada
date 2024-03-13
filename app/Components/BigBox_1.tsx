import { news } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

const BigBox_1 = ({ data }: { data: news }) => {
  const truncatedTitle = data?.title.length > 10 ? data.title.slice(0, 15) + '...' : data.title;
  const truncatedTitle2 = data?.title.length > 10 ? data.title.slice(0, 57) + '...' : data.title;

  return (
    <Link
    href={`/${data.category}/${data._id}`} className="w-1/3 flex flex-col">
      <div className="relative aspect-video rounded-xl ">
        {data.urlToImage && (
          <Image
            src={data.urlToImage}
            alt={data.title}
            fill
            className="rounded-xl"
          />
        )}
      </div>

      <div className="mt-5">
      {truncatedTitle && <p className="block lg:hidden md:text-xl text-base font-bold md:mt- mb- text-gray-800">{truncatedTitle}</p>}
      {truncatedTitle2 && <p className="lg:block hidden lg:text-xl text-base font-bold md:mt- mb-2 text-gray-800">{truncatedTitle2}</p>}       
      <p className="md:text-base text-lg mb-4 text-zinc-500">{data.author}</p>
      </div>
    </Link>
  );
};

export default BigBox_1;
