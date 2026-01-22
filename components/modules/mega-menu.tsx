"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { IMenu } from "@/sanity/schemaTypes/documents/menu";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import LanguageSwitcher from "../language-switcher";
import { ModeToggle } from "../ui/mode-toggle";
import { ScrollArea } from "../ui/scroll-area";
import ListItem from "./mega-menu/list-item-menu";

import { InteractiveHoverButton } from "../InteractiveUIButton";
import FeaturedItem from "./mega-menu/featured-item";

interface IModule extends IMenu {
  logo: SanityImageSource;
}

const NaviationMenuLink = dynamic(
  () => import("./mega-menu/navigation-menu-link"),
);

const NavigationDropDown = dynamic(() => import("./mega-menu/drop-down-menu"));

export function MegaMenu({ module }: { module: IModule }) {
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
        "w-full z-30 sticky top-0 backdrop-blur-sm bg-background border-border border-b-2 shadow-sm font-serif",
      )}
      whileHover={{ y: 0 }}
    >
      <div className="flex  items-center justify-between py-4 max-w-[85rem] xl:mx-auto lg:mx-8 md:mx-6 sm:mx-4 mx-2">
        <Link href="/" className="flex items-center space-x-2">
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
          <DesktopNav items={items} />
        </div>
        <div className="md:hidden">
          <MobileNav items={items} logo={logo} />
        </div>
        <div className="md:flex md:items-center hidden items-center md:justify-start">
          <ModeToggle />
          <InteractiveHoverButton asChild variant={"default"} className="ml-8">
            <Link href={"/contact"}>Contact Us</Link>
          </InteractiveHoverButton>
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

function DesktopNav({ items = [] }: Pick<IMenu, "items">) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item, key: number) => {
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
                  className="font-serif"
                />
              );
            case "navPage":
              return (
                <NaviationMenuLink
                  title={item.title as string}
                  url={"/" + (item?.page?.slug?.current || "invalid-url")}
                  key={key}
                  className="font-serif"
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

function MobileNav({
  items = [],
  logo,
}: {
  items?: IMenu["items"];
  logo?: SanityImageSource;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full md:w-auto">
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
          <Button asChild variant={"default"}>
            <Link href={"/contact"}>Let&apos;s Talk</Link>
          </Button>
        </div>

        <ScrollArea className="h-full">
          <NavigationMenu className="flex flex-col items-start space-y-6 list-none mb-12">
            {items.map((item, key: number) => {
              switch (item._type) {
                case "navDropdown":
                  return (
                    <details className="group justify-start" open key={key}>
                      <summary className="text-lg font-serif font-bold cursor-pointer text-left w-full">
                        <span>{item.title}</span>
                      </summary>

                      <div className="mt-2 space-y-2 pl-4">
                        <FeaturedItem featured={item?.featured} />
                        {item?.dropdownItems?.map((component, key) => {
                          const href =
                            component._type === "navLink"
                              ? component.url
                              : `/${component.page?.slug?.current}`;

                          return (
                            <ListItem
                              href={href}
                              title={component.title}
                              key={key}
                            >
                              {"subtitle" in component
                                ? component.subtitle
                                : null}
                            </ListItem>
                          );
                        })}
                      </div>
                    </details>
                  );
                case "navLink":
                  return (
                    <Link
                      href={item?.url}
                      className="text-lg underline font-serif font-bold "
                      key={key}
                    >
                      {item?.title}
                    </Link>
                  );
                case "navPage":
                  return (
                    <NaviationMenuLink
                      title={item?.title as string}
                      className="text-lg underline font-serif font-bold"
                      url={`/${item?.page?.slug?.current}` || "/invalid-url"}
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
