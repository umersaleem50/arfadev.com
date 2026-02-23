"use client";
import { Badge } from "@/components/ui/badge";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { processType } from "./types";

export const ProcessCard = ({
  slide,
  index,
}: {
  slide: processType;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  // Responsive animation values
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const z = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        rotateX,
        z,
      }}
      className="sticky top-28 mb-10"
    >
      <div
        className="relative w-full rounded-lg bg-cover p-6 sm:p-8 lg:p-10 h-[500px]"
        style={{ backgroundImage: `url(${slide.bg_image})` }}
      >
        <div className="space-y-4 rounded-md p-6 backdrop-blur-lg md:max-w-[40%] bg-background/80">
          <h3 className="text-2xl md:text-3xl font-serif text-accent dark:text-primary">
            {index + 1}. {slide.title}
          </h3>
          <p className="text-sm md:text-base text-foreground font-sans">
            {slide.tagline}
          </p>

          <p className="text-sm md:text-base text-foreground font-sans">
            {slide.description}
          </p>

          <ul className="flex flex-wrap gap-2 pt-4">
            {slide.deliverables.map((d, i) => (
              <Badge
                key={i}
                className="rounded-full px-4 py-1 text-xs backdrop-blur "
              >
                {d.item}
              </Badge>
            ))}
          </ul>
        </div>

        {/* Index */}
        <span
          className="absolute bottom-6 right-6 text-7xl font-extrabold text-black/10"
          aria-hidden
        >
          {index + 1}
        </span>
      </div>
    </motion.div>
  );
};
