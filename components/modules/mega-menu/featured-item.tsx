import CustomImage from "@/components/custom-image";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { INavDropdown } from "@/sanity/schemaTypes/objects/nav-dropdown";
import Link from "next/link";
import React from "react";

function FeaturedItem({ featured }: Pick<INavDropdown, "featured">) {
  if (!featured) return null;
  return (
    <li className="row-span-3 col-span-1">
      <NavigationMenuLink asChild>
        <Link
          className="flex h-full min-h-[12rem] w-full select-none flex-col justify-end rounded-md to-muted p-4 mt-2 md:mt-auto md:p-6 no-underline outline-none focus:shadow-md relative transition-colors duration-150 outline md:bg:none bg-accent"
          href={"/" + (featured?.page?.slug?.current || "invalid-slug")}
        >
          {/* <Icons.logo className="h-6 w-6" /> */}

          <div className="mb-2 mt-4 text-lg font-medium font-serif z-10 text-accent-foreground">
            {(featured?.page?.title as string) || "Invalid page title"}
          </div>
          <p className="text-sm leading-tight font-sans z-10 text-accent-foreground">
            {featured?.title}
          </p>
          {featured?.cover?.asset && (
            <CustomImage
              imageOBJ={featured?.cover}
              alt={featured?.cover?.alt}
              fill
              className="-z-1 !opacity-30 saturate-0"
            />
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default FeaturedItem;
