import React from 'react'
import Image from "next/image";
interface Props {
    imageURL: string;
  }
export const Image_Show: React.FC<Props> = ({imageURL}) => {
  console.log(imageURL)
    return (
    <div className="relative w-80 h-96 rounded-xl ">
        {imageURL && (
          <Image
            src={imageURL}
            alt="tt"
            fill
            className="rounded-xl"
          />
        )}
      </div>
  )
}
