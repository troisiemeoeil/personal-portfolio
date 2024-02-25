
import { motion } from "framer-motion";

export default function Map({theme, id}) {
  return (
    <motion.div
    id={id}
    drag
    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
    dragElastic={1}
    className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
  >
    <div className=" absolute w-full p-2 z-10">
      <div className="flex justify-between items-center ">
        <p className="text-xs">Location</p>
        <p className="text-neutral-500 text-xs ">New York</p>
      </div>
      <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
    </div>
    <motion.img
      whileHover={{ scale: 3 }}
      className="h-full w-full duration-300 transition-all ease-in-out object-cover"
      src={theme == "dark" ? "/lightm.bmp" : "/map.webp"}
      alt=""
    />
  </motion.div>
  )
}
