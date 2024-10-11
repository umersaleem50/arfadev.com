import { cn } from "@/lib/utils";
import React from "react";

export interface IOptions {
  title?: string;
  subtitle?: string;
  className?: string;
}

export interface ISectionHeader extends IOptions {
  miniTitle?: string;
}

function SectionHeader({
  title,
  subtitle,
  className,
  miniTitle,
}: ISectionHeader) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-3 max-w-[85rem] mx-auto pb-20",
        className
      )}
    >
      {miniTitle && (
        <p className="text-sm font-sans border-b inline-block self-start border-current pb-3 max-w-lg">
          {miniTitle}
        </p>
      )}
      <h2 className="text-4xl font-semibold leading-normal font-serif max-w-lg">
        {title}
      </h2>
      <p className="text-md font-sans max-w-lg text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}

export function PortfolioOptions({ title, subtitle, className }: IOptions) {
  return (
    <div className={cn("flex flex-col space-y-4 max-w-md mb-8", className)}>
      <h3 className="text-3xl font-bold leading-loose font-serif">{title}</h3>
      <p className="text-md font-sans text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export default SectionHeader;
