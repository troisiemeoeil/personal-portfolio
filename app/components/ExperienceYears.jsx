import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { PiArrowDownThin, PiArrowUpRight } from 'react-icons/pi'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
        <h1 className="text-8xl">5</h1>
      </div>
    </motion.div>
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative z-40">
      <div>
        <div className=" absolute w-full p-2 z-20">
          <p className="text-xs">CV</p>
          <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
        </div>
      </div>
      <div className="mt-16 w-full">
        <Dialog>
      <DialogTrigger asChild>
     <Button variant="custom">Let's Talk
     <PiArrowUpRight />

        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    <Button variant="custom">Download
    <PiArrowDownThin />
        </Button>
       
      </div>
    </div>
  </div>
  )
}
