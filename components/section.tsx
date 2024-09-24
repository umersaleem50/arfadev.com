import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import SectionOptions, { ISectionOptions } from "./section-options";

interface ISection {
  className?: string;
  children: ReactNode;
  options?: ISectionOptions;
}

function Section({ children, className, options }: ISection) {
  return (
    <section className={cn("w-full py-24", className)}>
      <div className="max-w-[85rem] mx-auto">
        {options && <SectionOptions {...options} />}
        {children}
      </div>
    </section>
  );
}

export default Section;
