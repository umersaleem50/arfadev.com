"use client";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CaretDown, Translate } from "@phosphor-icons/react/dist/ssr";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { useSlugAndLang } from "@/hooks/use-lang-slug";

function LanguageSwitcher({
  langSupport = [
    { title: "English", code: "en" },
    { title: "Deutsch", code: "de" },
  ],
  light = true,
}: any) {
  const { lang, slug } = useSlugAndLang();

  // const [lang = params?.lang[0], ...restSlug] = slug;

  const defaultLang =
    langSupport.filter((el: any) => el.code === lang)[0]?.title ||
    langSupport[0]?.title;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "flex items-center gap-2 dark:hover:text-white font-serif",
            light
              ? "dark:text-white text-slate-900"
              : "text-white dark:text-slate-900"
          )}
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
                  className={buttonVariants({
                    variant: "ghost",
                    className: "font-serif",
                  })}
                  href={`/${code}/${slug}`}
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
