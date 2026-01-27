"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import AnimatedText from "./animated/AnimatedText";

export interface IOptions {
  title?: string;
  subtitle?: string;
  className?: string;
}

export interface ISectionHeader extends IOptions {
  miniTitle?: string;
  sectionFooter?: any;
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
        "flex items-start flex-col space-y-3 max-w-[85rem] mx-auto lg:pb-24 md:pb-20 sm:pb-16 pb-14 z-20 relative text-muted-foreground",
        className,
      )}
    >
      {miniTitle && (
        <AnimatedText
          className={
            "text-sm font-sans border-b inline-block self-start border-current pb-3 max-w-lg"
          }
          Wrapper={motion.p}
        >
          {miniTitle}
        </AnimatedText>
      )}
      <AnimatedText
        className={
          "lg:text-4xl md:text-3xl text-2xl leading-normal font-serif max-w-lg text-current"
        }
        Wrapper={motion.h2}
      >
        {title}
      </AnimatedText>

      <AnimatedText
        className={
          "text-md text-sm sm:text-base font-sans max-w-lg text-current opacity-70"
        }
        Wrapper={motion.p}
      >
        {subtitle}
      </AnimatedText>
    </div>
  );
}

export function PortfolioOptions({ title, subtitle, className }: IOptions) {
  return (
    <div
      className={cn(
        "flex flex-col lg:space-y-4 md:space-y-2 max-w-md lg:mb-8  md:mb-6 mb-4",
        className,
      )}
    >
      <AnimatedText
        Wrapper={motion.h3}
        className="lg:text-3xl md:text-2xl text-xl leading-loose font-serif text-muted-foreground"
      >
        {title}
      </AnimatedText>
      <AnimatedText
        Wrapper={motion.p}
        className="text-md sm:text-base text-sm font-sans text-muted-foreground"
      >
        {subtitle}
      </AnimatedText>
    </div>
  );
}

export default SectionHeader;
