import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

import SectionHeader, { ISectionHeader } from "./section-options";
import SectionFooter from "./section-footer";

interface ISection {
  className?: string;
  children: ReactNode;
  sectionData?: ISectionHeader;
  fullWidth?: boolean;
}

function Section({
  children,
  className,
  sectionData,
  fullWidth = false,
}: ISection) {
  return (
    <section className={cn("w-full py-24 h-full", className)}>
      {sectionData && <SectionHeader {...sectionData} />}
      <div className={cn(fullWidth ? "w-full" : "max-w-[85rem]", "mx-auto")}>
        {children}
      </div>
      {sectionData?.sectionFooter && (
        <SectionFooter {...sectionData.sectionFooter} />
      )}
    </section>
  );
}

export default Section;
