import { cn } from "@/lib/utils";
import { ReactNode } from "react";

import SectionFooter from "./section-footer";
import SectionMetaData, { SectionMetaDataProps } from "./section-header";

interface SectionProps {
  className?: string;
  children: ReactNode;
  sectionData?: SectionMetaDataProps;
  fullWidth?: boolean;
  sectionRef?: React.Ref<HTMLDivElement>;
}

function Section({
  sectionRef,
  children,
  className,
  sectionData,
  fullWidth = false,
}: SectionProps) {
  const sectionFooter = sectionData?.sectionFooter;
  return (
    <section
      className={cn(
        "w-full lg:py-24 md:py-20 sm:py-16 py-14 h-full text-accent-foreground",
        !fullWidth ? "px-4 md:px-6 lg:px-8 xl:px-0" : "",
        className,
      )}
      ref={sectionRef}
    >
      {sectionData && (
        <SectionMetaData
          className={fullWidth ? "px-4 md:px-0" : ""}
          {...sectionData}
        />
      )}
      <div className={cn(fullWidth ? "w-full" : "max-w-[85rem]", "mx-auto ")}>
        {children}
      </div>
      {sectionFooter && <SectionFooter {...sectionFooter} />}
    </section>
  );
}

export default Section;
