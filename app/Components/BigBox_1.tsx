import { news } from "@/utils/types";
import Image from "next/image";

const BigBox_1 = ({ data }: { data: news }) => {
  const truncatedTitle = data.title.length > 60 ? data.title.slice(0, 60) + '...' : data.title;

  return (
    <div className="w-1/3 flex flex-col">
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
        <p className="text-3xl font-bold text-zinc-800  mb-2">{truncatedTitle}</p>
        <p className="text-xl mb-4 text-zinc-500">{data.author}</p>
      </div>
    </div>
  );
};

export default BigBox_1;
