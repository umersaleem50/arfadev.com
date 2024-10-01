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
import dynamic from "next/dynamic";

const NaviationMenuLink = dynamic(
  () => import("./mega-menu/navigation-menu-link")
);

const NavigationDropDown = dynamic(() => import("./mega-menu/drop-down-menu"));

export function MegaMenu({ module }: { module: any }) {
  return (
    <header className="bg-primary fixed top-0 w-full z-20">
      <div className="flex items-center justify-between py-4 max-w-[85rem] mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Icons.logo className="h-6 w-6" /> */}
          <span className="font-bold">shadcn/ui</span>
        </Link>
        <div className="hidden md:block">
          <DesktopNav module={module} />
        </div>
        <div className="md:hidden">
          <MobileNav module={module} />
        </div>
        <div className="sm:block hidden">
          <Button variant={"secondary"}>Let's Talk</Button>
          {/* <ModeToggle/> */}
        </div>
      </div>
    </header>
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
                  title={item.title}
                  featured={item.featured}
                />
              );
            case "navLink":
              return (
                <NaviationMenuLink
                  title={item.title}
                  url={item.url}
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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6 text-secondary hover:text-secondary-foreground" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-accent">
        <ScrollArea className="h-full">
          <p className="text-secondary pb-4 border-b text-lg border-secondary mb-4">
            {module?.title}
          </p>

          <NavigationMenu className="flex flex-col items-start space-y-6 list-none">
            {items.map((item: any, key: number) => {
              switch (item._type) {
                case "navDropdown":
                  return (
                    <details className="group justify-start" open key={key}>
                      <summary className="text-lg text-secondary font-serif font-bold cursor-pointer text-left w-full">
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
