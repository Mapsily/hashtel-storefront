import React from "react";
import { Camera } from "lucide-react";
export default function Avatar({
  image = "/hashtel-logo.png",
  name = "Colm Tuite",
}) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div
        className="w-20 h-20 relative rounded-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <button
          className="absolute bottom-0 -right-1 z-10 rounded-full p-1 border-[2px] border-white bg-[#141718]"
        >
         <Camera color="#ffffff" size={16}/>
        </button>
      </div>
      <span className="text-xl font-semibold">{name}</span>
    </div>
  );
}
