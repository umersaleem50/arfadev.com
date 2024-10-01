import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import ListItem from "./list-item-menu";
import Image from "next/image";
import CustomImage from "@/components/custom-image";
import { urlFor } from "@/sanity/lib/image";

function NavigationDropDown({
  title,
  featured,
  dropdownItems,
}: {
  title: string;
  featured?: any;
  dropdownItems: any;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title || "Untitled"}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-2">
          {featured && (
            <li className="row-span-3 col-span-1">
              <NavigationMenuLink asChild>
                <Link
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md relative "
                  href={featured?.page?.slug?.current || "/invalid-slug"}
                >
                  {/* <Icons.logo className="h-6 w-6" /> */}

                  <div className="mb-2 mt-4 text-lg font-medium font-serif z-10">
                    {featured?.page?.title || "Invalid page title"}
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground font-sans z-10">
                    {featured?.title}
                  </p>
                  <CustomImage
                    imageOBJ={featured?.page?.seo?.shareGraphic}
                    alt={"Featured Image"}
                    src={urlFor(featured?.page?.seo?.shareGraphic).url()}
                    fill
                    className="-z-1 !opacity-20"
                  />
                </Link>
              </NavigationMenuLink>
            </li>
          )}

          {dropdownItems.map((item: any, key: number) => {
            switch (item._type) {
              case "navPage":
                return (
                  <ListItem
                    href={item?.page?.slug?.current || "/invalid-slug"}
                    title={title}
                    key={key}
                    className="col-span-1 col-start-2"
                  >
                    {item?.subtitle || "Invalid or missing subtitle"}
                  </ListItem>
                );
              case "navLink":
                return (
                  <ListItem
                    href={item?.url || "/invalid-slug"}
                    title={item?.title || "Invalid or missing title"}
                    key={key}
                    className="col-span-1 col-start-2"
                  >
                    {item?.subtitle}
                  </ListItem>
                );

              default:
                return null;
            }
          })}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default NavigationDropDown;
