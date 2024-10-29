"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import ListItem from "./mega-menu/list-item-menu";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ui/mode-toggle";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import LanguageSwitcher from "../language-switcher";

const NaviationMenuLink = dynamic(
  () => import("./mega-menu/navigation-menu-link")
);

const NavigationDropDown = dynamic(() => import("./mega-menu/drop-down-menu"));

export function MegaMenu({ module }: { module: any }) {
  const [hidden, setHidden] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  const { logo = null } = module;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() as number;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // scroll(
  //   (progress: any) => {
  //     if (progress * 100 > 20) {
  //       console.log("sticky", progress);

  //       setIsSticky(true);
  //     } else {
  //       console.warn("not sticky", progress);
  //       setIsSticky(false);
  //     }
  //   },
  //   {
  //     axis: "y",
  //   }
  // );

  return (
    <motion.header
      variants={{
        visible: { y: 0, borderBottom: 2 },
        hidden: { y: "-95%", borderBottom: 0 },
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      animate={hidden ? "hidden" : "visible"}
      className={cn(
        "w-full z-30 sticky top-0 backdrop-blur-sm bg-white dark:bg-secondary border-b-2 shadow-sm border-secondary dark:border-primary"
      )}
      whileHover={{ y: 0 }}
    >
      <div className="flex  items-center justify-between py-4 max-w-[85rem] xl:mx-auto lg:mx-8 md:mx-6 sm:mx-4 mx-2">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Icons.logo className="h-6 w-6" /> */}
          {/* <span className="font-bold">shadcn/ui</span>
           */}
          {logo && (
            <Image
              src={urlFor(logo).url()}
              width={140}
              height={60}
              alt="Arfa Developers Logo"
            />
          )}
        </Link>
        <div className="hidden md:block">
          <DesktopNav module={module} />
        </div>
        <div className="md:hidden">
          <MobileNav module={module} />
        </div>
        <div className="md:flex md:items-center md:gap-x-2 hidden items-center md:justify-start">
          <LanguageSwitcher />
          <ModeToggle />
          <Button variant={"outline"} className="border-foreground">
            Let's Talk
          </Button>
          {/* <ModeToggle/> */}
        </div>
      </div>
      <motion.div
        className="h-1 bg-primary dark:bg-primary w-full origin-left"
        style={{
          scaleX: scrollYProgress,
          display: hidden ? "block" : "none",
        }}
        transition={{ delay: 0.35 }}
      ></motion.div>
    </motion.header>
  );
}

function DesktopNav({ module }: any) {
  const items: any = module?.items || [];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item: any, key: number) => {
          switch (item._type) {
            case "navDropdown":
              return (
                <NavigationDropDown
                  key={key}
                  dropdownItems={item?.dropdownItems || []}
                  title={item?.title}
                  featured={item.featured}
                />
              );
            case "navLink":
              return (
                <NaviationMenuLink
                  title={item?.title}
                  url={item?.url}
                  key={key}
                />
              );
            case "navPage":
              return (
                <NaviationMenuLink
                  title={item?.title}
                  url={item?.page?.slug?.current || "/invalid-url"}
                  key={key}
                />
              );
            default:
              null;
          }
        })}
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav({ module }: any) {
  const items = module?.items || [];
  const { logo = null } = module;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6 text-primary hover:text-secondary-foreground" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      {/* <p className="text-accent-foreground pb-4 border-b text-lg border-secondary mb-4">
        {module?.title}
      </p> */}
      <SheetContent side="right" className="bg-accent w-full md:w-auto">
        {logo && (
          <Image
            src={urlFor(logo).url()}
            width={150}
            height={70}
            alt="Arfa Developers Logo"
            className="mb-8"
          />
        )}

        <div className="flex gap-2 self-start my-4">
          <LanguageSwitcher />
          <ModeToggle />
          <Button variant={"outline"} className="border-foreground">
            Let's Talk
          </Button>
        </div>

        <ScrollArea className="h-full">
          <NavigationMenu className="flex flex-col items-start space-y-6 list-none">
            {items.map((item: any, key: number) => {
              switch (item._type) {
                case "navDropdown":
                  return (
                    <details className="group justify-start" open key={key}>
                      <summary className="text-lg text-primary font-serif font-bold cursor-pointer text-left w-full">
                        <span>{item.title}</span>
                      </summary>

                      <div className="mt-2 space-y-2 pl-4">
                        {item?.dropdownItems &&
                          item?.dropdownItems?.map(
                            (component: any, key: number) => (
                              <ListItem
                                href={
                                  component?.url ||
                                  component?.page?.slug?.current ||
                                  "/"
                                }
                                title={component.title}
                                key={key}
                              >
                                {component.subtitle}
                              </ListItem>
                            )
                          )}
                      </div>
                    </details>
                  );
                case "navLink":
                  return (
                    <Link
                      href={item?.url}
                      className="text-secondary text-lg font-serif font-medium "
                      key={key}
                    >
                      {item?.title}
                    </Link>
                  );
                case "navPage":
                  return (
                    <NaviationMenuLink
                      title={item?.title}
                      url={item?.page?.slug?.current || "/invalid-url"}
                      key={key}
                    />
                  );
                default:
                  null;
              }
            })}
          </NavigationMenu>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
