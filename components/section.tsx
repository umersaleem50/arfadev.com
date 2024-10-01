import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

import SectionHeader, { ISectionHeader } from "./section-options";

interface ISection {
  className?: string;
  children: ReactNode;
  sectionHeader?: ISectionHeader;
  fullWidth?: boolean;
}

function Section({
  children,
  className,
  sectionHeader,
  fullWidth = false,
}: ISection) {
  return (
    <section className={cn("w-full py-24 h-full", className)}>
      {sectionHeader && <SectionHeader {...sectionHeader} />}
      <div className={cn(fullWidth ? "w-full" : "max-w-[85rem]", "mx-auto")}>
        {children}
      </div>
    </section>
  );
}

export default Section;
