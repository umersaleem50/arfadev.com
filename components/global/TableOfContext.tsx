"use client";

import { motion, Variants } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  headings: {
    id?: string;
    _key?: string;
    text?: string;
    style: string;
  }[];
  className?: string;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");

  const toc = useMemo<TOCItem[]>(() => {
    return headings.map((heading) => {
      const title = heading.text?.trim() || "";

      const id =
        heading.id ||
        heading._key ||
        title
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .trim();

      return {
        id,
        title,
        level: Number(heading.style.replace("h", "")) || 2,
      };
    });
  }, [headings]);

  useEffect(() => {
    if (!toc.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeading = entries.find((entry) => entry.isIntersecting);

        if (visibleHeading) {
          setActiveId(visibleHeading.target.id);
        }
      },
      {
        rootMargin: "-100px 0px -20% 0px",
        threshold: 0,
      },
    );

    toc.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [toc]);

  const scrollToHeading = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  if (!toc.length) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className={cn("space-y-2 sticky top-10 px-8", className)}
    >
      <motion.h3
        variants={itemVariants}
        className="mb-4 font-semibold font-serif text-base text-accent dark:text-primary"
      >
        Table of Contents
      </motion.h3>

      <motion.nav
        variants={containerVariants}
        className="space-y-1 max-h-96 overflow-y-auto lg:max-h-none lg:overflow-visible"
      >
        {toc.map((item) => (
          <motion.button
            key={item.id}
            variants={itemVariants}
            onClick={() => scrollToHeading(item.id)}
            className={cn(
              "block w-full rounded-lg px-2 py-1.5 text-left transition-all duration-200 hover:cursor-pointer hover:bg-muted/50 hover:text-accent hover:dark:text-primary text-sm font-sans",
              {
                "bg-accent dark:bg-primary text-accent-foreground hover:bg-accent/90 hover:text-accent-foreground hover:dark:text-primary-foreground":
                  activeId === item.id,
                "text-label": activeId !== item.id,

                "pl-0": item.level === 1,
                "pl-2 sm:pl-3": item.level === 2,
                "pl-4 sm:pl-6": item.level === 3,
                "pl-6 sm:pl-9": item.level === 4,
                "pl-8 sm:pl-12": item.level === 5,
                "pl-10 sm:pl-15": item.level === 6,
              },
            )}
          >
            <span className="line-clamp-2">{item.title}</span>
          </motion.button>
        ))}
      </motion.nav>
    </motion.div>
  );
}
