import Image from "next/image";


export default function Projects() {
  return (
    <div className=" dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative ">
    <div className=" absolute w-full p-2 z-20">
      <p className="text-xs">Projects</p>
      <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
    </div>

    <div className="mt-8 px-2">
      <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
        <div className="flex justify-between items-center p-2  gap-x-2 mt-14">
          <Image
            width={200}
            height={200}
            className="w-14 h-14 rounded-full object-cover"
            src="/jo4.jpeg"
            alt=""
          />

          <div>
            <p className="text-xs">Fusion Pro Presentation</p>
            <p className="text-xs">
              I've come up with something truly unique
            </p>
          </div>

          <ul className="menu">
            <a href="#0"></a>
          </ul>
        </div>
      </div>
      <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
        <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
          <Image
            width={300}
            height={300}
            className="w-14 h-14 rounded-full object-cover"
            src="/jo4.jpeg"
            alt=""
          />

          <div>
            <p className="text-xs">Fusion Pro Presentation</p>
            <p className="text-xs">
              I've come up with something truly unique
            </p>
          </div>

          <ul className="menu">
            <a href="#0"></a>
          </ul>
        </div>
      </div>
      <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
        <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
          <Image
            width={300}
            height={300}
            className="w-14 h-14 rounded-full object-cover"
            src="/jo4.jpeg"
            alt=""
          />

          <div>
            <p className="text-xs">Fusion Pro Presentation</p>
            <p className="text-xs">
              I've come up with something truly unique
            </p>
          </div>

          <ul className="menu">
            <a href="#0"></a>
          </ul>
        </div>
      </div>
    </div>
    {/* <Products /> */}
  </div>
  )
}
