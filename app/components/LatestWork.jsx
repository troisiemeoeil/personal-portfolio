import Image from 'next/image'
import React from 'react'

export default function LatestWork({id}) {
  return (
    <div id={id} className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-3 md:row-span-2 ">
    <div className=" absolute w-full p-2 z-10">
      <div className="flex justify-between items-center ">
        <p className="text-xs">Latest Work</p>
        <p className="text-neutral-500 text-xs ">Waitlist</p>
      </div>
      <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
    </div>

    <Image
      width={900}
      height={300}
      className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
      src={"/jo8.jpeg"}
      alt=""
    />
  </div>
  )
}
