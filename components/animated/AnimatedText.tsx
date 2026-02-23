"use client";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef, ElementType } from "react";

type AnimatedTextProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function AnimatedText<T extends ElementType = "p">({
  as,
  className,
  children,
  ...props
}: AnimatedTextProps<T>) {
  const Component = motion.create(as ?? "p");

  return (
    <div className="relative inline-block overflow-hidden h-auto">
      {/* Text Layer */}
      <Component
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className={className}
        {...props}
      >
        {children}
      </Component>

      {/* Orange Strip */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: ["-100%", "0%", "100%"] }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-accent z-20"
      />
    </div>
  );
}
