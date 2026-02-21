"use client";
import BtnCTA from "@/components/BtnCTA";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/mode-toggle";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { NavbarProps } from "./types/navbar.type";

const Link = dynamic(() => import("next/link"));
const ListItem = dynamic(() => import("./list-item-menu"));
const FeaturedItem = dynamic(() => import("./featured-item"));
const NaviationMenuLink = dynamic(() => import("./navigation-menu-link"));

export function MobileNav({ items = [] }: { items?: NavbarProps["items"] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-full md:w-auto">
        <Image
          src={"/assets/logo.png"}
          width={150}
          height={70}
          alt="Arfa Developers Logo"
          className="mb-8"
        />

        <div className="flex gap-2 self-start my-4">
          {/* <LanguageSwitcher /> */}
          <ModeToggle />
          <BtnCTA>Send Us Email</BtnCTA>
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
                      className="text-2xl font-serif font-bold"
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
