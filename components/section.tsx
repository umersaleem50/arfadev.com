import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import SectionOptions, { ISectionOptions } from "./section-options";
import SectionFooter from "./section-footer";

interface ISection {
  className?: string;
  children: ReactNode;
  options?: ISectionOptions;
  fullWidth?: boolean;
}

function Section({
  children,
  className,
  options,
  fullWidth = false,
}: ISection) {
  return (
    <section className={cn("w-full py-24 h-full", className)}>
      {options && <SectionOptions {...options} />}
      <div className={cn(fullWidth ? "w-full" : "max-w-[85rem]", "mx-auto")}>
        {children}
      </div>
    </section>
  );
}

export default Section;
