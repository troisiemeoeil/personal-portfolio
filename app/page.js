"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  PiArrowUpRight,
  PiLinkedinLogoThin,
  PiBehanceLogoThin,
  PiArrowDownThin,
  PiGithubLogoThin,
} from "react-icons/pi";

import { IoIosMailUnread } from "react-icons/io";

import { RiTwitterXLine } from "react-icons/ri";

import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";
import Map from "./components/Map";
import Availability from "./components/Availability";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LatestWork from "./components/LatestWork";
import SideProjects from "./components/SideProjects";
import Newsletter from "./components/Newsletter";
import Quote from "./components/Quote";
import ExperienceYears from "./components/ExperienceYears";
// let Icons = [
//   { name: <PiTwitterLogoThin />, href: "https://twitter.com/Joenaldo" },
//   { name: <PiInstagramLogoThin />, href: "https://instagram.com/Joscriptt " },
//   { name: <PiGithubLogoLight />, href: "https://github.com/Joscriptt" },
// ];

function Homepage() {
  const { theme } = useTheme();

  return (
    <div className=" w-full  px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <Map />
        <Availability />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <LatestWork />
        <SideProjects />
        <Newsletter />
        <Quote />
        <ExperienceYears />
      </div>
    </div>
  );
}

export default Homepage;
