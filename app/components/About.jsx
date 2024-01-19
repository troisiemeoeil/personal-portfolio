import { motion } from "framer-motion";


export default function About() {
  return (
    <motion.div
    drag
    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
    dragElastic={1}
    className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  z-20 cursor-pointer relative shadow-xl rounded-lg  col-span-2 "
  >
    <div className=" absolute w-full p-2 z-10">
      <div className="flex justify-between items-center ">
        <p className="text-xs">About</p>
        <p className="text-neutral-500 text-xs ">Joscript Stone</p>
      </div>
      <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
    </div>

    <div className="mt-14 px-3 pb-3">
      <p className="text-xs font-semibold   leading-5">
        Am Joscript Stone, an adventurous Creative Director based in the
        vibrant city of San Francisco. With a keen eye for aesthetics, a
        passion for innovation, and a drive for designs that leaves a
        lasting impact. let's collaborate and bring your creative visions
        to life
      </p>
    </div>
  </motion.div>
  )
}
