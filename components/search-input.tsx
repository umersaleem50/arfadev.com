"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "@/lib/utils";

export function SearchInput({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
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
          className
        )}
      >
        <Input
          type="search"
          id="search"
          placeholder="Search..."
          className="text-primary border-primary"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <MagnifyingGlass
            size={16}
            strokeWidth={2}
            aria-hidden="true"
            className="fill-primary"
          />
        </div>
      </div>
    </>
  );
}
