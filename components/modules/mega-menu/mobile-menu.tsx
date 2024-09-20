"use client";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export const MobileNav = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  menuItems,
}: any) => (
  <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="flex flex-col space-y-4">
        {menuItems.map((item: any) => (
          <div key={item.title}>
            {item.items ? (
              <>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <ul className="ml-4 space-y-2">
                  {item.items.map((subItem: any) => (
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
