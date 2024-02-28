import Image from "next/image";
import React from "react";
interface Props {
  imageURL: string;
}
export const Image_Show: React.FC<Props> = ({ imageURL }) => {
  console.log(imageURL);
  return (
    <div className="relative w-80 h-96 rounded-xl">
      {imageURL && (
        <Image
          src={imageURL}
          alt="tt"
          fill
          // layout="responsive" // Ensure responsive behavior
         
          className="rounded-xl w-80 object-cover"
        />
      )}
    </div>
  );
};
