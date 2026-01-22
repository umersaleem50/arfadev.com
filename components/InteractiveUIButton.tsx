import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps } from "./ui/button";

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border border-foreground p-2 px-6 text-center font-sans text-sm text-foreground hover:text-primary-foreground",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 font-sans hover:!text-foreground text-center w-full">
          {children}
        </span>
      </div>
      <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span className="text-center">{children}</span>
        <ArrowRight size={18} />
      </div>
    </button>
  );
}
