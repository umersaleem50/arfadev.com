"use client";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CaretDown, Translate } from "@phosphor-icons/react/dist/ssr";
import { Button, buttonVariants } from "./ui/button";
import { purifyString } from "@/lib/utils";

function LanguageSwitcher({
  langSupport = [{ title: "English", code: "en" }],
}: any) {
  const defaultLang = langSupport[0]?.title || "English";
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-white dark:text-slate-900"
        >
          <Translate className="h-5 w-5" />
          <span>{defaultLang}</span>
          <CaretDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2">
        <div className="grid gap-1">
          {langSupport.map(
            ({ title, code }: { title: string; code: string }, key: number) => {
              return (
                <Link
                  className={buttonVariants({ variant: "ghost" })}
                  href={purifyString(code) || "en"}
                  key={key}
                >
                  {title}
                </Link>
              );
            }
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default LanguageSwitcher;
