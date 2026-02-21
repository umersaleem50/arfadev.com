"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import BtnCTA from "@/components/BtnCTA";
import ModeToggle from "@/components/ui/mode-toggle";
import { DesktopNav } from "./desktop-menu";
import { MobileNav } from "./mobile-menu";
import { NavbarProps } from "./types/navbar.type";

export default function Navbar({ module }: { module: NavbarProps }) {
  const [hidden, setHidden] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  const { logo, items } = module;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() as number;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, borderBottom: 2 },
        hidden: { y: "-95%", borderBottom: 0 },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className={cn(
        "w-full z-30 fixed top-0 backdrop-blur-sm bg-background border-border border-b-2 shadow-sm font-serif",
      )}
      whileHover={{ y: 0 }}
    >
      <div className="flex  items-center justify-between py-4 max-w-[85rem] xl:mx-auto lg:mx-8 md:mx-6 sm:mx-4 mx-2">
        <Link href="/" className="flex items-center space-x-2">
          {logo && (
            <Image
              src={"/assets/logo.png"}
              width={140}
              height={60}
              alt="Arfa Developers Logo"
            />
          )}
        </Link>
        <div className="hidden md:block">
          <DesktopNav items={items} />
        </div>
        <div className="md:hidden">
          <MobileNav items={items} />
        </div>
        <div className="md:flex md:items-center hidden items-center md:justify-start">
          <ModeToggle />
          <BtnCTA className="ml-4">Send Us Email</BtnCTA>
          {/* <ModeToggle/> */}
        </div>
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-primary to-accent w-full origin-left"
        style={{
          scaleX: scrollYProgress,
          display: hidden ? "block" : "none",
        }}
        transition={{ delay: 0.35 }}
      ></motion.div>
    </motion.header>
  );
}
