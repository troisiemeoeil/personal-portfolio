import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Quote() {
  return (
    <motion.div
    drag
    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
    dragElastic={1}
    className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 lg:w-[22.5rem]  p-2"
  >
    <div>
      <p className="text-[10px] lg:text-sm mt-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
        optio vel officia.
      </p>

      <div className="flex items-center gap-x-2 mt-7">
        <Image
          height={400}
          width={400}
          className="w-8 h-8 rounded-full object-cover"
          src="/jo2.jpeg"
          alt=""
        />

        <div className="">
          <p className="text-xs">JoScript</p>
          <p className="text-xs">Founder, Joscript</p>
        </div>
      </div>
    </div>
  </motion.div>
  )
}
