"use client";
import AnimatedText from "@/components/animated/AnimatedText";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { PortfolioHeaderProps } from "./types/portfolio.type";

export function PortfolioHeaders({
  title,
  subtitle,
  className,
}: PortfolioHeaderProps) {
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
