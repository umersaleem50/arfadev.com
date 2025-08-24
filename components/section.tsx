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
    <section
      className={cn(
        "w-full lg:py-24 md:py-20 sm:py-16 py-14 h-full",
        !fullWidth ? "px-4 md:px-6 lg:px-8 xl:px-0" : "",
        className
      )}
    >
      {sectionData && (
        <SectionHeader
          className={fullWidth ? "px-4 md:px-0" : ""}
          {...sectionData}
        />
      )}
      <div className={cn(fullWidth ? "w-full" : "max-w-[85rem]", "mx-auto ")}>
        {children}
      </div>
      {sectionData?.sectionFooter && (
        <SectionFooter {...sectionData.sectionFooter} />
      )}
    </section>
  );
}

export default Section;
