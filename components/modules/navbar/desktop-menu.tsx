"use client";
import {
  NavigationMenu,
  NavigationMenuIndicator,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import dynamic from "next/dynamic";

import { NavbarProps } from "./types/navbar.type";

const NaviationMenuLink = dynamic(() => import("./navigation-menu-link"));

const NavigationDropDown = dynamic(() => import("./drop-down-menu"));

export function DesktopNav({ items = [] }: { items: NavbarProps["items"] }) {
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
