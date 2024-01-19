
import {PiArrowUpRight} from "react-icons/pi";

export default function Availability() {
  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg sm:h-40  ">
    <div className=" absolute w-full p-2">
      <div className="flex justify-between items-center ">
        <p className="text-xs">Mode</p>
        <div>
          <span>
            <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
              <span
                className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400`}
              ></span>
              <span
                className={`relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 g-yellow-400`}
              ></span>
            </span>
          </span>
        </div>
      </div>
      <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
      <div className="">
        <p className="text-xs font-semibold max-sm:mt-16 sm:mt-4  ">
          Available for freelance <br /> design projects. Hit me up <br />{" "}
          for a collab 🦾
        </p>

        <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60  mt-3 rounded-full p-1 px-2 dark:bg-neutral-700/40 sm:w-full">
          <span>Contact me</span>
          <PiArrowUpRight />
        </button>
      </div>
    </div>
  </div>
  )
}
