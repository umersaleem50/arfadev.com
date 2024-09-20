"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  {
    title: "Products",
    items: [
      {
        title: "Analytics",
        href: "/products/analytics",
        description: "Measure your performance",
      },
      {
        title: "Engagement",
        href: "/products/engagement",
        description: "Interact with your users",
      },
      {
        title: "Security",
        href: "/products/security",
        description: "Protect your data",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Enterprise",
        href: "/solutions/enterprise",
        description: "For large teams",
      },
      {
        title: "Startups",
        href: "/solutions/startups",
        description: "For new businesses",
      },
      {
        title: "Personal",
        href: "/solutions/personal",
        description: "For individual use",
      },
    ],
  },
  { title: "Pricing", href: "/pricing" },
  { title: "About", href: "/about" },
];

export default function MegaMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (isDesktop) {
      setIsMobileMenuOpen(false);
    }
  }, [isDesktop]);

  const DesktopNav = () => (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.items ? (
              <React.Fragment>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {subItem.description}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </React.Fragment>
            ) : (
              <NavigationMenuLink asChild>
                <a
                  href={item.href}
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors text-muted dark:text-primary hover:bg-muted/90 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  {item.title}
                </a>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );

  const MobileNav = () => (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.items ? (
                <>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <ul className="ml-4 space-y-2">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.href}
                          className="text-sm hover:underline"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-lg font-semibold hover:underline"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="border-b border-secondary/40">
      <div className="container mx-auto flex py-4 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          Logo
        </Link>
        {isDesktop ? <DesktopNav /> : <MobileNav />}
      </div>
    </header>
  );
}
