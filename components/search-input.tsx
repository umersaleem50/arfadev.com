"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchInput({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = searchParams.get("page");
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 2000);
  return (
    <>
      <div
        className={cn(
          "grid w-full max-w-md items-center gap-1.5 relative",
          className,
        )}
      >
        <Input
          type="text"
          id="search"
          placeholder="Search a post..."
          className="text-accent dark:text-primary dark:border-primary border-accent font-sans text-base focus:outline-accent"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        {page ? (
          <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
            <MagnifyingGlass
              size={16}
              strokeWidth={2}
              aria-hidden="true"
              className="fill-accent dark:fill-primary"
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
