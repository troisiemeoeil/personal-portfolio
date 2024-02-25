import { motion } from "framer-motion";
export default function Experience({id}) {
  
  return (
    <motion.div
    drag
    dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
    dragElastic={1}
    id={id} className="dark:bg-[#1E1E1E] z-100 bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
    <div className=" absolute w-full p-2 z-20">
      <p className="text-xs">Experience & Education</p>
      <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
    </div>

    {/* Gradient  */}
    <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
    {/* gradient ends */}

    <div className=" overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
      {/* Starts */}
      <div className="flex gap-x-3 mt-16 px-2  ">
        <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
          2002 -- 2012
        </p>
        <div>
          <h4 className="text-xs font-bold">Creative Studio Owner</h4>
          <p className="text-[11px] text-neutral-500">
            Self-employed at my own creative studio, delivering innovative
            design solutions and giving value to your brand experience.
          </p>
        </div>
      </div>

      <div className="px-2 my-3 ">
        <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
      </div>

      <div className="flex  gap-x-3 px-2 relative ">
        <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
          2020 -- 2022
        </p>
        <div>
          <h4 className="text-xs font-bold">Nike Headquarters</h4>
          <p className="text-[11px] text-neutral-500">
            Designer & Creative Director
          </p>
        </div>
      </div>

      <div className="px-2 my-3 ">
        <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
      </div>

      <div className="flex  gap-x-3  px-2 relative ">
        <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
          2018 -- 2020
        </p>
        <div>
          <h4 className="text-xs font-bold">Spotify</h4>
          <p className="text-[11px] text-neutral-500">
            Designer & Art Director.
          </p>
        </div>
      </div>

      <div className="px-2 my-3 ">
        <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
      </div>

      <div className="flex  gap-x-3  px-2 relative ">
        <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
          2016 -- 2018
        </p>
        <div>
          <h4 className="text-xs font-bold">Apple</h4>
          <p className="text-[11px] text-neutral-500">Product Designer</p>
        </div>
      </div>

      <div className="px-2 my-3 ">
        <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
      </div>

      <div className="flex  gap-x-3  px-2 relative ">
        <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
          2014 -- 2016
        </p>
        <div>
          <h4 className="text-xs font-bold">Royal Academy of Arts</h4>
          <p className="text-[11px] text-neutral-500">
            Graduate Master’s Degree
          </p>
        </div>
      </div>

      <div className="px-2 my-3 ">
        <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
      </div>

      <div className="flex  gap-x-3  px-2 relative ">
        <p className="dark:text-white  text-xs w-20 shrink-0  ">
          2012 -- 2016
        </p>
        <div>
          <h4 className="text-xs font-bold">Zurich University of Arts</h4>
          <p className="text-[11px] text-neutral-500">
            Visual Communication
          </p>
        </div>
      </div>

      <div className="px-2 my-3 ">
        <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
      </div>

      <div className="flex  gap-x-3  px-2 relative ">
        <p className="dark:text-white  text-xs w-20 shrink-0  ">
          2011 -- 2012
        </p>
        <div>
          <h4 className="text-xs font-bold">Vogue France</h4>
          <p className="text-[11px] text-neutral-500">Graphic Designer</p>
        </div>
      </div>

      <div className="px-2 my-3 ">
        <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
      </div>

      <div className="flex  gap-x-3  px-2 relative ">
        <p className="dark:text-white  text-xs w-20 shrink-0  ">
          2010 -- 2011
        </p>
        <div>
          <h4 className="text-xs font-bold">Vignelli Associates</h4>
          <p className="text-[11px] text-neutral-500">Internship</p>
        </div>
      </div>

      <div className="px-2 my-3 ">
        <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
      </div>

      <div className="flex  gap-x-3  mb-6 px-2 relative ">
        <p className="dar:text-white  text-xs w-20 shrink-0  ">
          2010 -- 2011
        </p>
        <div>
          <h4 className="text-xs font-bold">Norm Zurich</h4>
          <p className="text-[11px] text-neutral-500">Internship</p>
        </div>
      </div>
    </div>
    {/* Gradient  */}
    <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
    {/* gradient ends */}
  </motion.div>
  )
}
