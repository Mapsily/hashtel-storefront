"use client";

import Image from "next/image";
import { useState } from "react";
import ImageMagnify from "@/components/image-magnify";
import { VariantDetailsFragment } from "@/gql/graphql";

export default function ImagesViewer({
  images = [],
  salePercent = 0,
}: {
  images: VariantDetailsFragment["media"];
  salePercent: number;
}) {
  const [index, setIndex] = useState(0);

  const handleChange = (idx: number) => {
    setIndex(idx);
  };

  return (
    <div className="md:w-1/2 flex gap-4 flex-col-reverse md:flex-row">
      <div className="flex gap-4 justify-start align-center md:flex-col w-[120px] h-[120px]">
        {images &&
          images.map((item, idx) => (
            <Image
              key={idx}
              className="cursor-pointer rounded-sm md:w-[120px] md:h-[120px] md:min-w-[120px] md:min-h-[120px] min-w-[80px] min-h-[80px] w-[80px] h-[80px] object-cover"
              src={item.url}
              width={240}
              height={240}
              onClick={() => handleChange(idx)}
              alt={item.alt}
            />
          ))}
      </div>
      <div className="relative h-full w-full">
        <ImageMagnify
          src={images?.[index]?.url}
          width={600}
          height={600}
          className="md:w-[400px] md:h-[400px] w-[400px] h-[400px] object-contain rounded-lg"
          alt={images?.[index]?.alt}
        />
        <p className="absolute top-4 left-4 shadow text-sm font-[500] bg-white px-2 py-1 w-fit rounded-sm">
          New
        </p>
        <p className="font-semibold bg-primary absolute top-16 left-4 shadow text-sm text-white px-2 py-1 w-fit rounded-sm">
          {salePercent}%
        </p>
      </div>
    </div>
  );
}
