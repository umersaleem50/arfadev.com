import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

function NaviationMenuLink({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  return (
    <NavigationMenuItem className={className}>
      <Link href={url} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title || "Untitle"}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export default NaviationMenuLink;
