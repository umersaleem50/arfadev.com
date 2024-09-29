"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CaretDown, Translate } from "@phosphor-icons/react/dist/ssr";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

function LanguageSwitcher() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Translate className="h-5 w-5" />
          <span>English</span>
          <CaretDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2">
        <div className="grid gap-1">
          <Link className={buttonVariants({ variant: "ghost" })} href={"en"}>
            English
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href={"de"}>
            Deutsch
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default LanguageSwitcher;
