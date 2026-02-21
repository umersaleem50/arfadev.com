import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "./list-item-menu";

import { INavDropdown } from "@/sanity/schemaTypes/objects/nav-dropdown";
import { NavigationMenuIndicator } from "@radix-ui/react-navigation-menu";
import FeaturedItem from "./featured-item";

function NavigationDropDown({ title, featured, dropdownItems }: INavDropdown) {
  return (
    <NavigationMenuItem>
      <NavigationMenuIndicator />
      <NavigationMenuTrigger>{title || "Untitled"}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[700px] lg:grid-cols-2 font-sans">
          <FeaturedItem featured={featured} />

          {dropdownItems.map((item, key: number) => {
            switch (item._type) {
              case "menuLink":
                return (
                  <ListItem
                    href={"/" + (item?.page?.slug?.current || "invalid-slug")}
                    title={item?.title}
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
