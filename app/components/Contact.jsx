import { Tooltip } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { IoIosMailUnread } from 'react-icons/io'
import { PiBehanceLogoThin, PiGithubLogoThin } from 'react-icons/pi'
import { RiTwitterXLine } from 'react-icons/ri'

export default function Contact() {
  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2  relative">
    <div className=" absolute w-full p-2 z-20">
      <p className="text-xs">Get in touch</p>
      <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
    </div>

    <div className="mt-14 mb-4">
      <div className="flex justify-center gap-x-2 px-2">
        <Tooltip showArrow={true} content="X (Twitter)" color="#161616">
          <Link
            href={"https://twitter.com/Joenaldo"}
            className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
          >
            <RiTwitterXLine className="text-xl" />
          </Link>
        </Tooltip>
        <Tooltip showArrow={true} content="GitHub" color="#161616">
          <Link
            href={"https://github.com/Joscriptt"}
            className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
          >
            <PiGithubLogoThin className="text-xl" />
          </Link>
        </Tooltip>
        <Tooltip showArrow={true} content="Behance" color="#161616">
          <Link
            href={"https://twitter.com/Joenaldo"}
            className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
          >
            <PiBehanceLogoThin className="text-xl" />
          </Link>
        </Tooltip>
        <Tooltip showArrow={true} content="E-mail" color="#161616">
          <Link
            href={"https://twitter.com/Joenaldo"}
            className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
          >
            <IoIosMailUnread className="text-xl" />
          </Link>
        </Tooltip>
      </div>
    </div>
  </div>
  )
}
