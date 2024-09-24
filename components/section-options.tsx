import { cn } from "@/lib/utils";
import React from "react";

export interface IOptions {
  title?: string;
  subtitle?: string;
  className?: string;
}

export interface ISectionOptions extends IOptions {
  section?: string;
}

function SectionOptions({
  title,
  subtitle,
  className,
  section,
}: ISectionOptions) {
  return (
    <div className={cn("flex flex-col space-y-4 max-w-lg pb-24", className)}>
      {section && (
        <p className="text-sm font-sans border-b inline-block self-start border-current pb-3">
          {section}
        </p>
      )}
      <h2 className="text-4xl font-bold leading-loose font-serif ">{title}</h2>
      <p className="text-sm font-sans">{subtitle}</p>
    </div>
  );
}

export function PortfolioOptions({ title, subtitle, className }: IOptions) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-4 max-w-md mb-8 text-foreground",
        className
      )}
    >
      <h3 className="text-3xl font-bold leading-loose font-serif">{title}</h3>
      <p className="text-md font-sans">{subtitle}</p>
    </div>
  );
}

export default SectionOptions;
