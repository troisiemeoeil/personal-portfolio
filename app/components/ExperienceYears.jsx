import { motion } from 'framer-motion'

import { PiArrowDownThin, PiArrowUpRight } from 'react-icons/pi'

export default function ExperienceYears() {
  return (
    <div className="  rounded-lg  grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={1}
      className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg  h-44 p-2 relative "
    >
      <div className=" absolute w-full p-2 z-20">
        <p className="text-xs">Years of Experience</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
      </div>
      <div className="mt-10  w-full flex justify-center items-center">
        <h1 className="text-8xl">17</h1>
      </div>
    </motion.div>
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative z-40">
      <div>
        <div className=" absolute w-full p-2 z-20">
          <p className="text-xs">CV</p>
          <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
        </div>
      </div>
      <div className="mt-24 w-full">
        <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
          <span>View</span>
          <PiArrowUpRight />
        </button>
        <button className="text-xs flex w-full mt-3 items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
          <span>Download</span>
          <PiArrowDownThin />
        </button>
      </div>
    </div>
  </div>
  )
}
