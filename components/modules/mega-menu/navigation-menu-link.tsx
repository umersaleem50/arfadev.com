import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    <NavigationMenuItem className={cn(className, "font-serif")}>
      <Link href={url} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title || "Untitle"}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export default NaviationMenuLink;
