"use client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NaviationMenuLink({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === url || (pathname === "/" && url === "/home");

  return (
    <NavigationMenuItem className={cn(className, "font-serif")}>
      <Link href={url} legacyBehavior passHref>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "bg-accent sm:bg-transparent",
            isActive ? "!bg-primary dark:!bg-accent dark:!text-foreground" : "",
          )}
          active={isActive}
        >
          {title || "Untitle"}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export default NaviationMenuLink;
